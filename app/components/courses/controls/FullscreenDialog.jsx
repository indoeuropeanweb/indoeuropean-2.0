"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "@/Redux/slices/popupReducer";
import useFetch from "@/utils/useFetch";

const FullScreenDialog = ({selectedFilters}) => {
  const [level, setLevel] = useState(""); 
  const [intake, setIntake] = useState("");
  const [university, setUniversity] = useState("");
  const open = useSelector((state) => state.popup.open);

  const dispatch = useDispatch();
  const {data:universities} = useFetch("https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx/UniversityAPI?countryid=0", "", "");
    const levelIntake = [
        { id: 1, value: 27, label: "April, May, June" },
        { id: 2, value: 62, label: "Feb, April, May, September, October, December" },
        { id: 3, value: 56, label: "Feb." },
        { id: 4, value: 64, label: "Feb. 26" },
        { id: 5, value: 58, label: "Feb./Sep." },
        { id: 6, value: 26, label: "Jan, Feb, March" },
        { id: 7, value: 28, label: "July, August, September" },
        { id: 8, value: 29, label: "October, November, December" },
        { id: 9, value: 57, label: "Sep." },
        { id: 10, value: 63, label: "Sep. 26" },
        { id: 11, value: 61, label: "Yes 3 Years Relevant Work Experience" }
    ]

    const intakeOptions = [
        {
            id: 1,
            value: 17,
            LevelName: "Bachelor"
        },
        {
            id: 2,
            value: 18,
            LevelName: "Master"
        },
        {
            id: 3,
            value: 55,
            LevelName: "PhD"
        }
    ]

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    dispatch(togglePopup());
  };

  const handleSave = () => {
    selectedFilters?.({
    level,
    intake,
    university,
  });
    dispatch(togglePopup())
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-9 flex h-screen w-screen flex-col bg-white"
          role="dialog"
          aria-modal="true"
        >
          <header className="relative flex h-16 shrink-0 items-center bg-primary px-4 text-white shadow-md">
            <button
              type="button"
              onClick={handleClose}
              aria-label="close"
              className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-full transition hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="ml-3 flex-1 text-lg font-medium">
              Filters
            </h2>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-md px-4 py-2 text-sm cursor-pointer font-medium uppercase transition hover:bg-white/10"
            >
              Save
            </button>
          </header>

          <div className="flex-1 overflow-y-auto bg-white">
            <div className="mx-auto w-full">

              <button
                type="button"
                className="flex w-full items-center px-5 py-4 text-left transition hover:bg-gray-50"
              >
                <div className="flex-1">
                <label
                    htmlFor="intake"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                        Type
                </label>
                <select
                    id="type"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                >
                <option value="">Level</option>
                {intakeOptions.map((item) => (
                    <option
                    key={item.id}
                    value={item.value}
                    >
                    {item.LevelName}
                    </option>
                ))}
                </select>
                </div>
              </button>

             <div className="border-b border-gray-200" />

              <button
                type="button"
                className="flex w-full items-center px-5 py-4 text-left transition hover:bg-gray-50"
              >
                <div className="flex-1">
                <label
                    htmlFor="intake"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                    Universities
                </label>

                    <select
                        id="level"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white cursor-pointer px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                        <option value="">Universities</option>
                        {universities?.map((item) => {
                        return <option className="" key={item.UNIVID} value={item.UNIVID}>
                            {item.UNIVNAME}
                        </option>
                    })}
                    </select>
                </div>
              </button>

              <div className="border-b border-gray-200" />

              <button
                type="button"
                className="flex w-full items-center px-5 py-4 text-left transition hover:bg-gray-50"
              >
                <div className="flex-1">
                <label
                    htmlFor="intake"
                    className="mb-2 block text-sm font-medium text-gray-700"
                >
                    Intake
                </label>

                    <select
                        id="level"
                        value={intake}
                        onChange={(e) => setIntake(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white cursor-pointer px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    >
                        <option value="">Intakes Months</option>
                        {levelIntake.map((item) => (
                        <option className="" key={item.id} value={item.value}>
                            {item.label}
                        </option>
                        ))}
                    </select>
                </div>
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenDialog;