"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const countries = [
  {
    id: 1,
    image: "/images/flags/australia.svg",
    name: "Australia",
    countryID: 11,
  },
  {
    id: 2,
    image: "/images/flags/austria.svg",
    name: "Austria",
    countryID: 12,
  },
  {
    id: 3,
    image: "/images/flags/belgium.svg",
    name: "Belgium",
    countryID: 18,
  },
  {
    id: 4,
    image: "/images/flags/canada.svg",
    name: "Canada",
    countryID: 32,
  },
  {
    id: 5,
    image: "/images/flags/czech-republic.svg",
    name: "Czech Republic",
    countryID: 48,
  },
  {
    id: 6,
    image: "/images/flags/denmark.svg",
    name: "Denmark",
    countryID: 49,
  },
  {
    id: 7,
    image: "/images/flags/estonia.svg",
    name: "Estonia",
    countryID: 58,
  },
  {
    id: 8,
    image: "/images/flags/europe.svg",
    name: "Europe",
    countryID: 234,
  },
  {
    id: 9,
    image: "/images/flags/finland.svg",
    name: "Finland",
    countryID: 62,
  },
  {
    id: 10,
    image: "/images/flags/france.svg",
    name: "France",
    countryID: 63,
  },
  {
    id: 11,
    image: "/images/flags/germany.svg",
    name: "Germany",
    countryID: 70,
  },
  {
    id: 12,
    image: "/images/flags/greece.svg",
    name: "Greece",
    countryID: 73,
  },
  {
    id: 13,
    image: "/images/flags/hungary.svg",
    name: "Hungary",
    countryID: 84,
  },
  {
    id: 14,
    image: "/images/flags/iceland.svg",
    name: "Iceland",
    countryID: 85,
  },
  {
    id: 15,
    image: "/images/flags/ireland.svg",
    name: "Ireland",
    countryID: 90,
  },
  {
    id: 16,
    image: "/images/flags/latvia.svg",
    name: "Latvia",
    countryID: 105,
  },
  {
    id: 17,
    image: "/images/flags/lithuania.svg",
    name: "Lithuania",
    countryID: 111,
  },
  {
    id: 18,
    image: "/images/flags/luxembourg.svg",
    name: "Luxembourg",
    countryID: 112,
  },
  {
    id: 19,
    image: "/images/flags/malta.svg",
    name: "Malta",
    countryID: 291,
  },
  {
    id: 20,
    image: "/images/flags/netherlands.svg",
    name: "Netherlands",
    countryID: 224,
  },
  {
    id: 21,
    image: "/images/flags/new-zealand.svg",
    name: "New Zealand",
    countryID: 288,
  },
  {
    id: 22,
    image: "/images/flags/norway.svg",
    name: "Norway",
    countryID: 148,
  },
  {
    id: 23,
    image: "/images/flags/poland.svg",
    name: "Poland",
    countryID: 158,
  },
  {
    id: 24,
    image: "/images/flags/portugal.svg",
    name: "Portugal",
    countryID: 159,
  },
  {
    id: 25,
    image: "/images/flags/singapore.svg",
    name: "Singapore",
    countryID: 177,
  },
  {
    id: 26,
    image: "/images/flags/slovakia.svg",
    name: "Slovakia",
    countryID: 289,
  },
  {
    id: 27,
    image: "/images/flags/slovenia.svg",
    name: "Slovenia",
    countryID: 290,
  },
  {
    id: 28,
    image: "/images/flags/spain.svg",
    name: "Spain",
    countryID: 184,
  },
  {
    id: 29,
    image: "/images/flags/sweden.svg",
    name: "Sweden",
    countryID: 190,
  },
  {
    id: 30,
    image: "/images/flags/switzerland.svg",
    name: "Switzerland",
    countryID: 191,
  },
  {
    id: 31,
    image: "/images/flags/uk.svg",
    name: "UK",
    countryID: 287,
  },
  {
    id: 32,
    image: "/images/flags/usa.svg",
    name: "USA",
    countryID: 228,
  },
];

const CountryInput = ({onCountriesChange}) => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Send selected countries to parent whenever selection changes
  useEffect(() => {
    onCountriesChange?.(selectedCountries);
  }, [selectedCountries, onCountriesChange]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (country) => {
    const alreadySelected = selectedCountries.some(
      (item) => item.countryID === country.countryID
    );

    if (alreadySelected) {
      setSelectedCountries((prev) =>
        prev.filter((item) => item.countryID !== country.countryID)
      );
      return;
    }

    if (selectedCountries.length >= 3) {
      return;
    }

    setSelectedCountries((prev) => [...prev, country]);
  };

  const removeCountry = (countryID) => {
    setSelectedCountries((prev) =>
      prev.filter((country) => country.countryID !== countryID)
    );
  };

  return (
    <div
      ref={dropdownRef}
      className="relative w-full max-w-md"
    >
      {/* <label className="mb-2 block text-sm font-medium text-gray-700">
        Select Countries
      </label> */}

      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`min-h-13 w-full cursor-pointer rounded-lg border bg-white px-3 py-2 transition-all ${
          isOpen
            ? "border-primary ring-2 ring-primary/10"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <div className="flex min-h-8 flex-wrap items-center gap-2">
          {selectedCountries.length > 0 ? (
            selectedCountries.map((country) => (
              <div
                key={country.countryID}
                className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-700"
              >
                <Image
                  src={country.image}
                  width={18}
                  height={18}
                  alt={country.name}
                  className="h-4.5 w-4.5 object-contain"
                />
                <span>{country.name}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCountry(country.countryID);
                  }}
                  className="ml-1 flex h-4 w-4 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-300 hover:text-gray-900"
                >
                  ×
                </button>
              </div>
            ))
          ) : (
            <span className="text-sm text-gray-400">
              Select up to 3 countries
            </span>
          )}

          <svg
            className={`ml-auto h-5 w-5 shrink-0 text-gray-500 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <span className="text-sm font-semibold text-gray-700">
              Select Countries
            </span>

            <span
              className={`text-xs font-medium ${
                selectedCountries.length === 3
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {selectedCountries.length}/3 selected
            </span>
          </div>

          <div className="max-h-64 overflow-y-auto p-1">
            {countries.map((country) => {
              const isSelected = selectedCountries.some(
                (item) => item.countryID === country.countryID
              );

              const isDisabled =
                selectedCountries.length >= 3 && !isSelected;

              return (
                <button
                  type="button"
                  key={country.countryID}
                  disabled={isDisabled}
                  onClick={() => handleCountrySelect(country)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition ${
                    isSelected
                      ? "bg-primary/10 text-primary"
                      : isDisabled
                      ? "cursor-not-allowed opacity-40"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                      isSelected
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {isSelected && (
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>

                  <Image
                    src={country.image}
                    width={24}
                    height={24}
                    alt={country.name}
                    className="h-6 w-6 shrink-0 object-contain"
                  />

                  <span className="text-sm font-medium">
                    {country.name}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedCountries.length === 3 && (
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-2.5 text-center text-xs text-gray-500">
              You can select a maximum of 3 countries. Remove a country to
              select another.
            </div>
          )}
        </div>
      )}
      <input
        type="hidden"
        name="countryIDs"
        value={selectedCountries.map((country) => country.countryID).join(",")}
      />
    </div>
  );
};

export default CountryInput;