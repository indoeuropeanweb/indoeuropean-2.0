'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { MdKeyboardArrowRight } from 'react-icons/md'

const Breadcrumb = ({imgUrl, title}) => {

  const pathname = usePathname();
  const [firstPath, secondPath, thirdPath] = pathname.split("/").filter(Boolean)

  const backgroundImage = {
    backgroundImage: `url(${imgUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <>
       <section className=''>
         <div className="relative rounded-b-4xl overflow-hidden">
          <div
            className="relative rounded-b-4xl w-full h-full flex justify-center items-center flex-col gap-5 py-12 px-10 bg-cover bg-center"
            style={backgroundImage}
          >
            <div className="absolute rounded-b-4xl inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-0" />
            <div className="relative bg-secondary z-1 my-5 text-white py-2 px-4 rounded-4xl flex justify-center items-center">
            <Link href={'/'} className={`inline-block text-md font-semibold ${pathname === "/" ? "text-gray-500": "text-white hover:underline"}`}>Home</Link>
                {firstPath && <>&nbsp;<MdKeyboardArrowRight />&nbsp;<Link href={`/${firstPath}`} className={`inline-block text-md font-semibold ${pathname === `/${firstPath}` ? "text-gray-500": "text-white hover:underline"}`}>{firstPath.replace(/\b\w/g, (char) => char.toUpperCase())}</Link></>}
                {secondPath && <>&nbsp;<MdKeyboardArrowRight />&nbsp;<Link href={`/${firstPath}/${secondPath}`} className={`inline-block text-md font-semibold ${pathname === `/${firstPath}/${secondPath}` ? "text-gray-500": "text-white hover:underline"}`}>{secondPath.replace(/\b\w/g, (char) => char.toUpperCase())}</Link></>}
                {thirdPath && <>&nbsp;<MdKeyboardArrowRight />&nbsp;<Link href={`/${firstPath}/${secondPath}/${thirdPath}`} className={`inline-block text-md font-semibold ${pathname === `/${firstPath}/${secondPath}/${thirdPath}` ? "text-gray-500": "text-white hover:underline"}`}>{thirdPath.replace(/\b\w/g, (char) => char.toUpperCase())}</Link></>}
            </div>
            <div className="relative z-1">
               <h1 className='text-2xl lg:text-4xl text-white font-semibold font-Jakarta text-center'>{title}</h1>
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default Breadcrumb