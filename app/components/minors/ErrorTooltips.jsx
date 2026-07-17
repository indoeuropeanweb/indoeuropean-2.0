"use client";

export default function ErrorTooltip({ error, touched, children }) {
  return (
    <div className="relative">
      {children}

      {error && touched && (
        <div className="pointer-events-none absolute left-0 -top-11 z-2 transition-all duration-200 opacity-100">
          <div className="relative whitespace-nowrap rounded-md bg-red-500 px-2 py-2 text-xs font-medium text-white shadow-xl">
            {error}

            <div className="absolute left-4 top-full h-2 w-2 rotate-45 bg-red-500"></div>
          </div>
        </div>
      )}
    </div>
  );
}