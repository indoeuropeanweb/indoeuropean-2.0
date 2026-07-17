import Image from "next/image";
import Link from "next/link";

const CourseCard = async () => {
//   const data = await FetchData("https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx/ProgramsAPI?countryid=&univid=&levelid=&intakeid=&searchtext=");

  const courses = [
    {
      title: "Bachelor's Programs",
      image: "/images/courses/bachelors.webp",
      duration: "3 - 4 Years",
      description: "Start your academic journey with internationally recognized undergraduate degrees in engineering, business, IT, healthcare, design, and other high-demand fields.",
      href: "/courses/bachelors",
      color: "bg-blue-600",
    },
    {
      title: "Master's Programs",
      image: "/images/courses/masters.webp",
      duration: "1 - 2 Years",
      description: "Gain advanced knowledge, industry-focused skills, and global exposure through specialized postgraduate programs designed to accelerate your career growth.",
      href: "/courses/masters",
      color: "bg-emerald-600",
    },
    {
      title: "PhD Programs",
      image: "/images/courses/phd.webp",
      duration: "3 - 5 Years",
      description: "Conduct innovative research under experienced faculty and access doctoral opportunities that support academic, scientific, and professional advancement worldwide.",
      href: "/courses/phd",
      color: "bg-purple-600",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {courses?.map((course, index) => {
        return  <div
      key={course.title}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          height={120}
          width={220}
          className="w-full object-cover transition duration-700"
        />

        <div
          className={`absolute right-5 top-2 rounded-full bg-secondary text-white px-4 py-2 text-sm font-semibold`}
        >
          {course.duration}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-Jakarta text-2xl font-bold text-primary">
          {course.title}
        </h3>

        <p className="mt-4 font-manrope leading-7 text-gray-600">
          {course.description}
        </p>

        <Link
          href={course.href}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          Explore Programs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
    })}
    </div> 
  )
}

export default CourseCard