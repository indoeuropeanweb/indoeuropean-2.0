import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaRegCircleCheck } from "react-icons/fa6";

import Breadcrumb from "@/app/components/Breadcrumb";
import { destinations } from "@/public/data/destinations";

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) return {};

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

const Page = async ({ params }) => {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  const words = destination.title.split(" ");
  const lastWord = words.pop();
  const restOfHeading = words.join(" ");

  return (
    <>
      <Breadcrumb
        imgUrl={destination.cover}
        title={destination.heading}
      />

      <section className="max-w-6xl mx-auto">
        <div className="py-12 px-10">
          <h2 className="text-2xl md:text-3xl text-center font-semibold font-aino text-primary">
            {restOfHeading}{" "}
            <span className="text-secondary">{lastWord}</span>
          </h2>

          {destination.sections.map((section, index) => {
            switch (section.type) {
              case "h2": {
                const words = section.content.split(" ");
                const lastWord = words.pop();
                const restHeading = words.join(" ");

                return (
                  <h2
                    key={index}
                    className="mt-12 text-2xl md:text-3xl text-center font-semibold font-aino text-primary"
                  >
                    {restHeading}{" "}
                    <span className="text-secondary">
                      {lastWord}
                    </span>
                  </h2>
                );
              }

              case "p":
                return (
                  <p
                    key={index}
                    className="mt-5 text-justify text-gray-700 leading-8 font-inter"
                  >
                    {Array.isArray(section.content)
                      ? section.content.map((item, i) => {
                          switch (item.type) {
                            case "text":
                              return (
                                <span key={i}>{item.text}</span>
                              );

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
                                <strong key={i}>
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

              case "list":
                return (
                  <div
                    key={index}
                    className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                  >
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 bg-primary/10 p-2 rounded-full"
                        >
                          <FaRegCircleCheck className="text-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Image
                      src={section.imgUrl}
                      alt={section.alt}
                      width={480}
                      height={360}
                      className="w-140 h-120 object-cover rounded-2xl"
                    />
                  </div>
                );

              case "course-list":
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
                  >
                    {section.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.id}
                          className="group flex flex-col items-center justify-center gap-4 bg-primary/5 rounded-xl p-6 shadow-lg hover:scale-105 transition"
                        >
                          <span className="bg-white group-hover:bg-secondary p-4 rounded-full transition">
                            <Icon className="text-secondary group-hover:text-white text-2xl" />
                          </span>

                          <span className="font-semibold text-center text-primary">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );

              case "university-list":
                return (
                  <div
                    key={index}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8"
                  >
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="relative h-44 rounded-2xl overflow-hidden shadow-lg group"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-contain p-6 group-hover:scale-110 transition"
                        />

                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                          <h3 className="text-white text-center font-semibold px-3">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                );

              case "intake-list":
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
                  >
                    {section.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.id}
                          className="relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition"
                        >
                          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/10 opacity-0 hover:opacity-100 transition" />

                          <div className="relative z-10">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary text-white mb-5">
                              <Icon className="text-2xl" />
                            </div>

                            <h3 className="text-xl font-bold text-primary">
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

              default:
                return null;
            }
          })}
        </div>
      </section>
    </>
  );
};

export default Page;