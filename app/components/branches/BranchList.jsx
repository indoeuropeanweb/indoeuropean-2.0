"use client";
import usePagination from "@/utils/usePagination";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const BranchList = ({ branches }) => {
  const {
    pages,
    currentPageItems,
    currentPage,
    setCurrentPage,
    moveForward,
    moveBackward,
  } = usePagination(branches, 9);

  return (
    <>{branches ? <> <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-2">
        {currentPageItems.map((branch) => (
        <section className="py-6 px-4" key={branch.id}>
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-1 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <iframe
                src={branch.mapUrl}
                className=""
                loading="lazy"
                width={500}
                height={200}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branch.title} location`}
              />
            </div>
            <div className="p-4 flex flex-col">
              <div>
                <div className="flex gap-2 mb-3">
                  <span className="text-sm">📍</span>
                    <p className="text-gray-600 text-md leading-relaxed">
                      {branch.address}
                    </p>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-sm">📞</span>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-gray-600 text-md hover:text-[#048D4E]"
                    >
                      {branch.phone}
                    </a>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm">✉️</span>
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-gray-600 text-md break-all hover:text-[#048D4E]"
                    >
                      {branch.email}
                    </a>
                  <a href={`/branches/${branch.slug}`} rel="noopener noreferrer" className="ms-auto pt-4" > <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-white text-sm md:text-md font-semibold hover:bg-primary/85 transition"> Know More → </span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        ))}
      </div>
      <div className='flex justify-center items-center gap-5 my-10'>
         <div className="flex gap-4">
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={moveBackward}
            disabled={currentPage === 1}
            className="px-4 py-2 flex justify-center items-center rounded-lg border group border-primary/30 text-sm text-primary font-medium
                      hover:bg-primary/10 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
           <FaArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-500 ease-in-out inline-block"/>&nbsp; Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: pages }, (_, index) => index + 1)
            .filter((page) => {
              if (pages <= 7) {
                return true;
              }
              if (page === 1) {
                return true;
              }

              if (page === pages) {
                return true;
              }

              return (
                page >= currentPage - 1 &&
                page <= currentPage + 1
              );
            })
            .map((page, index, visiblePages) => {
              const previousPage = visiblePages[index - 1];

              return (
                <div
                  key={page}
                  className="flex items-center gap-2"
                >
                  {previousPage &&
                    page - previousPage > 1 && (
                      <span className="px-1 text-gray-400">
                        ...
                      </span>
                    )}

                  <button
                    type="button"
                    onClick={() => {setCurrentPage(page) 
                    window.scrollTo({
                      top: 500,
                      behavior: "smooth",
                    });}}
                    className={`w-10 h-10 rounded-lg font-medium transition
                      ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "border border-gray-300 text-primary/80 hover:bg-gray-100"
                      }`}
                  >
                    {page}
                  </button>
                </div>
              );
            })}

          <button
            onClick={moveForward}
            disabled={currentPage === pages}
            className="px-4 flex justify-center items-center py-2 text-sm rounded-lg group border border-primary text-primary/80 font-medium
                      hover:bg-primary/10 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next &nbsp; <FaArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-500 ease-in-out inline-block"/>
          </button>
        </div>
      </div>
      </div></>: <div className="py-12 px-10 flex justify-center items-center">
        <h4 className='text-md lg:text-base text-secondary font-Jakarta text-center font-semibold'>Sorry, Blogs not found !</h4>
      </div>}
      </>
  );
};

export default BranchList;