"use client";

import { useEffect, useMemo, useState } from "react";
import useFetchCourses from "@/utils/useFetchCourses";
import CountryInput from "./controls/CountryInput";
import FullScreenDialog from "./controls/FullscreenDialog";
import { RiUserSettingsLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { togglePopup } from "@/Redux/slices/popupReducer";
import FormContainer from "../FormContainer";

import CourseCard from "./controls/CourseCard";

const COURSES_PER_PAGE = 9;

const AllCourses = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    university: "",
    level: "",
    intake: "",
  });

  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCountriesChange = (selectedCountries) => {
    const newCountries = selectedCountries ?? [];

    setCountries(newCountries);
  };

  const handleSelectedFilters = (values) => {
    if (!values) return;

    console.log("Selected filters:", values);

    setFilters({
      university: values.university ?? "",
      level: values.level ?? "",
      intake: values.intake ?? "",
    });

    setCurrentPage(1);
  };

  const countryIds = useMemo(() => {
    return countries
      .map((country) => country.countryID)
      .join(",");
  }, [countries]);

  const url = useMemo(() => {

    return `https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx/ProgramsAPI?countryid=${countryIds}&univid=${filters.university}&levelid=${filters.level}&intakeid=${filters.intake}&searchtext=`;
  }, [
    countryIds,
    filters.university,
    filters.level,
    filters.intake,
  ]);

  const {
    data: courses = [],
    loading,
    error,
  } = useFetchCourses(url);

  const totalCourses = courses.length;

  const totalPages = Math.ceil(
    totalCourses / COURSES_PER_PAGE
  );
   
  const currentCourses = useMemo(() => {
    const startIndex =
      (currentPage - 1) * COURSES_PER_PAGE;

    const endIndex =
      startIndex + COURSES_PER_PAGE;

    return courses.slice(startIndex, endIndex);
  }, [courses, currentPage]);

  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage > totalPages
    ) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`flex md:items-center align-start md:justify-between gap-5 flex-col md:flex-row`}>
        <CountryInput
          onCountriesChange={handleCountriesChange}
        />

        <button
          type="button"
          onClick={() => dispatch(togglePopup())}
          className="cursor-pointer rounded-md bg-primary/95 px-6 py-2 font-semibold text-white transition-all duration-500 hover:bg-primary/80"
        >
          Filters&nbsp;&nbsp;
          <RiUserSettingsLine className="inline-block size-4" />
        </button>
      </div>

      {/* Filter Dialog */}
      <FullScreenDialog
        selectedFilters={handleSelectedFilters}
      />

      <section className="mt-6">

        {/* Loading */}
        {loading && (
          <div className="py-10 text-md lg:text-lg font-semibold text-center text-secondary">
            Loading courses...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="py-10 text-center text-red-500">
            Something went wrong.
          </div>
        )}

        {/* Courses */}
        {!loading &&
          !error &&
          currentCourses.length > 0 && (
            <>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {currentCourses.map((course, index) => (
                  <CourseCard
                    key={course.ID ?? index}
                    countryName={course.CountryName}
                    universityName={course.UnivName}
                    program={course.Program}
                    duration={course.Duration}
                    tuitionFee={course.Tuition_Fee}
                    scholarship={course.Scholarship}
                    intakePeriod={course.Intake_Period}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">

                  {/* Previous */}
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      goToPage(currentPage - 1)
                    }
                    className="
                      rounded-md
                      border border-gray-300
                      px-4 py-2
                      text-sm
                      transition
                      hover:border-primary
                      hover:bg-primary
                      hover:text-white
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    ← Previous
                  </button>

                  {/* Page numbers */}
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  )
                    .filter((page) => {
                      if (totalPages <= 7) {
                        return true;
                      }

                      if (page === 1) {
                        return true;
                      }

                      if (page === totalPages) {
                        return true;
                      }

                      return (
                        page >= currentPage - 1 &&
                        page <= currentPage + 1
                      );
                    })
                    .map((page, index, pages) => {
                      const previousPage =
                        pages[index - 1];

                      return (
                        <div
                          key={page}
                          className="flex items-center gap-2"
                        >
                          {/* Ellipsis */}
                          {previousPage &&
                            page - previousPage > 1 && (
                              <span className="px-1 text-gray-400">
                                ...
                              </span>
                            )}

                          <button
                            type="button"
                            onClick={() =>
                              goToPage(page)
                            }
                            className={`
                              h-10
                              min-w-10
                              rounded-md
                              px-3
                              text-sm
                              transition
                              ${
                                currentPage === page
                                  ? "bg-primary text-white"
                                  : "border border-gray-300 bg-white text-gray-700 hover:border-primary hover:bg-primary hover:text-white"
                              }
                            `}
                          >
                            {page}
                          </button>
                        </div>
                      );
                    })}

                  {/* Next */}
                  <button
                    type="button"
                    disabled={
                      currentPage === totalPages
                    }
                    onClick={() =>
                      goToPage(currentPage + 1)
                    }
                    className="
                      rounded-md
                      border border-gray-300
                      px-4 py-2
                      text-sm
                      transition
                      hover:border-primary
                      hover:bg-primary
                      hover:text-white
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}

        {!loading &&
          !error &&
          courses.length === 0 && (
            <div className="py-10 text-md lg:text-lg font-semibold text-center text-secondary">
              No courses found.
            </div>
          )}

      </section>
      <FormContainer />
    </>
  );
};

export default AllCourses;