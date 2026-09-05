// app/blogs/BlogsList.jsx

"use client";
import Image from "next/image";
import Link from "next/link";
import usePagination from "@/utils/usePagination";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const BlogList = ({ blogs }) => {
  const {
    pages,
    currentPageItems,
    currentPage,
    setCurrentPage,
    moveForward,
    moveBackward,
  } = usePagination(blogs, 6);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {currentPageItems.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.id}
            className="border rounded-xl overflow-hidden hover:scale-102 duration-500 ease-in-out"
          >
          <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
              width={480}
              height={320}
          />
          <div className="p-4">
            <h3 className="font-semibold font-Jakarta text-base md:text-xl">
              {blog.title}
            </h3>

              <div
                // href={`/blogs/${blog.slug}`}
                className="text-blue-600 mt-5 inline-block hover:underline"
              >
                Read More →
              </div>
              {/* <p className="font-roboto text-sm md:text-md text-end">{blog.publishDate}</p> */}
            </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center items-center gap-5 my-10'>
         <div className="flex gap-4">
        <div className="flex items-center justify-center gap-2 mt-4">
          {/* Previous */}
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
              // Show every page when there are 7 or fewer
              if (pages <= 7) {
                return true;
              }

              // Always show first page
              if (page === 1) {
                return true;
              }

              // Always show last page
              if (page === pages) {
                return true;
              }

              // Show current page and one page before/after
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
                  {/* Ellipsis */}
                  {previousPage &&
                    page - previousPage > 1 && (
                      <span className="px-1 text-gray-400">
                        ...
                      </span>
                    )}

                  {/* Page button */}
                  <button
                    type="button"
                    onClick={() => setCurrentPage(page)}
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

          {/* Next */}
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
      </div>
      </>
  );
};

export default BlogList;