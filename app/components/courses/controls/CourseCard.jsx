import React, {Suspense, lazy} from 'react'
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { FaArrowAltCircleRight, FaRegHeart, FaUniversity, FaCoins, FaCalendarAlt  } from "react-icons/fa";
import { FaGraduationCap, FaLocationDot  } from 'react-icons/fa6';
import { IoIosTime } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { togglePopup } from '@/Redux/slices/formPopup';

const CourseSkeleton = () => {
  return <Stack className='border-2 border-dotted border-secondary p-5 rounded-2xl h-full' spacing={1}>
        <div className='flex justify-between items-center'>
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="circular" width={40} height={40} />
      </div>
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rounded" width={210} height={60} />
      <Skeleton variant="rounded" width={120} height={40} />
  </Stack>
}

const CourseCard = ({countryName, universityName, program, duration, tuitionFee, scholarship, intakePeriod}) => {
  const dispatch = useDispatch();
 
  return (
  <Suspense fallback={<CourseSkeleton />}>
  <div
    className="
      group relative isolate overflow-hidden
      rounded-2xl
      border-2 border-secondary
      border-dotted
      bg-white/80
      p-5
      shadow-lg shadow-black/5
      backdrop-blur-xl
      transition-all duration-300 ease-out
      hover:-translate-y-1
      hover:border-secodary/30
      hover:shadow-xl hover:shadow-primary/10
    "
  >
    {/* Glass background */}
    <div
      className="
        pointer-events-none absolute inset-0 -z-10
        bg-linear-to-br
        from-secondary/10
        via-transparent
        to-primary/10
      "
    />

    {/* Content */}
    <div className="relative z-10">

      {/* Header */}
      <div className="mb-5 mt-1">
        <div
          className="
            flex items-center justify-between
            rounded-xl
            border border-secondary/10
            bg-primary/10
            px-3 py-3
            backdrop-blur-md
          "
        >
          <h4 className="font-Jakarta text-md font-semibold text-primary lg:text-base">
            {program}
          </h4>
          <Link
            href="/contact"
            className="
              flex size-9 cursor-pointer items-center justify-center
              rounded-full
              text-secondary/70
              transition-all duration-300
              hover:scale-110
              hover:bg-secondary/10
              hover:text-secondary
            "
          >
          <FaRegHeart className="size-5" />
          </Link>
        </div>

        {/* University / Location */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <FaUniversity className="size-5 shrink-0 text-secondary" />
            <span className="font-manrope text-sm lg:text-md font-semibold">
              {universityName}
            </span>
          </div>

          <div className="flex items-center gap-2 text-primary">
            <FaLocationDot className="size-5 shrink-0 text-secondary" />
            <span className="font-manrope text-sm lg:text-md font-semibold">
              {countryName}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-2">
        <div
          className="
            rounded-xl
            border border-secondary/10
            bg-white/50
            backdrop-blur-sm
          "
        >
          <div className="flex items-start gap-2">
            <FaGraduationCap className="mt-0.5 size-5 shrink-0 text-secondary" />

            <div>
              <h6 className="font-manrope text-sm font-medium text-primary/70 lg:text-md">
                Tuition Fee
              </h6>

              <span className="font-manrope text-sm font-semibold text-primary lg:text-md">
                {tuitionFee}
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-xl
            border border-secondary/10
            bg-white/50
            backdrop-blur-sm
          "
        >
          <div className="flex items-start gap-2">
            <IoIosTime className="mt-0.5 size-5 shrink-0 text-secondary" />

            <div>
              <h6 className="font-manrope text-sm font-medium text-primary/70 lg:text-md">
                Duration
              </h6>

              <span className="font-manrope text-sm font-semibold text-primary lg:text-md">
                {duration}
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-xl
            border border-secondary/10
            bg-white/50
            backdrop-blur-sm
          "
        >
          <div className="flex items-start gap-2">
            <FaCoins className="mt-0.5 size-5 shrink-0 text-secondary" />

            <div>
              <h6 className="font-manrope text-sm font-medium text-primary/70 lg:text-md">
                Scholarships
              </h6>

              <span className="font-manrope text-sm font-semibold text-primary lg:text-md">
                {scholarship == "Not Available" ? "No": "Yes"}
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            rounded-xl
            border border-secondary/10
            bg-white/50
            backdrop-blur-sm
          "
        >
          <div className="flex items-start gap-2">
            <FaCalendarAlt className="mt-0.5 size-5 shrink-0 text-secondary" />

            <div>
              <h6 className="font-manrope text-sm font-medium text-primary/70 lg:text-md">
                Intake Period
              </h6>

              <span className="font-manrope text-sm font-semibold text-primary lg:text-md">
                {intakePeriod}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* CTA */}
      <button
        type="button"
        className="
          w-full
          group/btn
          inline-flex cursor-pointer items-center justify-center gap-2
          rounded-md
          border border-primary
          px-5 py-2.5
          font-manrope text-sm font-semibold text-primary
          shadow-md shadow-primary/20
          transition-all duration-300 ease-out
          hover:-translate-y-0.5
          hover:bg-primary/85
          hover:shadow-lg hover:shadow-primary/30
        hover:text-white
          active:translate-y-0
        "
        onClick={() => dispatch(togglePopup())}
      >
        Apply Now

        <FaArrowAltCircleRight
          className="
            size-5
            transition-transform duration-300
            group-hover/btn:translate-x-1
          "
        />
      </button>

    </div>
  </div>
</Suspense>
  )
}

export default CourseCard