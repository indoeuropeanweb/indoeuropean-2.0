
import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/public/data/destinations';
import Breadcrumb from '@/app/components/Breadcrumb';
import { FaRegCircleCheck } from "react-icons/fa6";

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return {};   
  }

  return {
    title: destination.metaTitle || destination.title,
    description: destination.metaDescription,
    keywords: destination.keywords,

    alternates: {
      canonical: `https://www.indoeuropean.in/destinations/${slug}`,
    },

    openGraph: {
      title: destination.metaTitle || destination.title,
      description: destination.metaDescription,
      url: `https://www.indoeuropean.in/destinations/${slug}`,
      type: "website",
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: destination.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: destination.metaTitle || destination.title,
      description: destination.metaDescription,
      images: [destination.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = () => {
  return (
     <>
    {destinations.map((destination, index) => {
        return <div className='w-full' key={destination.id}><Breadcrumb imgUrl={destination.cover} title={destination.title}/>
        <section className='max-w-6xl mx-auto'>
        <div className='py-12 px-10'>
            <h2 className='text-2xl lg:text-3xl text-center font-Jakarta font-bold text-primary'>Study in <span className='text-secondary'>Australia</span></h2>
            {destination.sections.map((section, index) => {
                if (section.type === "h2") {
                    const words = section.content.split(" ");
                    const lastWord = words.pop();
                    const restOfHeading = words.join(" ");

                    return (
                        <h2
                        key={index}
                        className="mt-12 text-2xl text-center md:text-3xl font-semibold font-aino text-primary"
                        >
                        {restOfHeading}{" "}
                        <span className="text-secondary">{lastWord}</span>
                        </h2>
                    );
                }

            if (section.type === "p") {
                return (
                    <p
                    key={index}
                    className="mt-5 text-justify text-gray-700 leading-8 font-inter"
                    >
                    {Array.isArray(section.content)
                        ? section.content.map((item, i) => {
                            switch (item.type) {
                            case "text":
                                return <span key={i}>{item.text}</span>;

                            case "link":
                                return (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className="text-primary font-medium hover:underline"
                                >
                                    {item.text}
                                </Link>
                                );

                            case "bold":
                                return (
                                <strong key={i} className="font-semibold">
                                    {item.text}
                                </strong>
                                );

                            case "br":
                                return <br key={i} />;

                            default:
                                return null;
                            }
                        })
                        : section.content}
                    </p>
                );
            }

            if (section.type === "list") {
            return (
                <div
                key={index}
                className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                <ul className="space-y-3 rounded-2xl p-2">
                    {section.items.map((item, itemIndex) => (
                    <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-gray-700 bg-primary/10 p-2 rounded-full font-Jakarta"
                    >
                        <FaRegCircleCheck className="size-5 text-secondary shrink-0" />

                        <span className="leading-7 font-medium">
                        {item}
                        </span>
                    </li>
                    ))}
                </ul>

                <div className="w-full">
                    <img
                    src={section.imgUrl}
                    alt={section.alt}
                    className="w-full h-87.5 md:h-112.5 rounded-2xl object-cover"
                    />
                </div>
                </div>
            );
            }
            if (section.type === "course-list") {
            return (
                <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3 mt-5"
                >
                {section.items.map((item, index) => {
                    const Icon = item.icon;

                    return (
                    <div
                        key={item.id}
                        className={`flex flex-col bg-primary/5 group justify-center items-center gap-5 px-2 py-4 rounded-xl shadow-lg shadow-zinc-300 hover:scale-105 transition-all duration-500 ease-in-out font-Jakarta`}
                    >
                        <span className="bg-white group-hover:bg-secondary transition-all ease-in-out duration-500 p-4 rounded-full">
                          <Icon className="size-6 text-secondary group-hover:text-white transition-all duration-500 ease-in-out shrink-0" />
                        </span>

                        <span className="text-primary text-center font-Jakarta font-semibold">
                        {item.text}
                        </span>
                    </div>
                    );
                })}
                </div>
            );
            }

            if (section.type === "university-list") {
            return (
                <div key={index} className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {section.items.map((item) => (
                    <div
                        key={item.id}
                        className="group relative h-44 rounded-2xl overflow-hidden bg-white shadow-lg cursor-pointer"
                    >
                        {/* Logo */}
                        <div className="relative w-full h-full flex items-center justify-center p-6">
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                        />
                        </div>

                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <h3 className="text-white text-center font-Jakarta font-semibold text-lg px-4">
                            {item.title}
                        </h3>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            );
            }

            if (section.type === "intake-list") {
            return (
                <div
                key={index}
                className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                {section.items.map((item) => {
                    const Icon = item.icon;

                    return (
                    <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Background Accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="size-6" />
                        </div>

                        <h3 className="text-xl font-bold font-Jakarta text-primary">
                            {item.title}
                        </h3>

                        <p className="mt-3 text-gray-600 leading-7">
                            {item.description}
                        </p>
                        </div>
                    </div>
                    );
                })}
                </div>
            );
            }

            })}
        </div>
      </section>
      </div>
    })}
   </>
  )
}

export default page