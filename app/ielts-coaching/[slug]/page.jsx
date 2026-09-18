import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ielts from "@/public/data/ielts";
import Breadcrumb from "@/app/components/Breadcrumb";
import MyAccordion from "@/app/components/MyAccordion";

export async function generateStaticParams() {
  return ielts.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const ielt = ielts.find((item) => item.slug === slug);

  if (!ielt) {
    return {};
  }

  return {
    title: ielt.metaTitle || ielt.title,
    description: ielt.metaDescription,
    keywords: ielt.keywords || ielt.secondaryKeywords,

    alternates: {
      canonical: `https://www.indoeuropean.in/ielts-coaching/${slug}/`,
    },

    openGraph: {
      title: ielt.metaTitle || ielt.title,
      description: ielt.metaDescription,
      url: `https://www.indoeuropean.in/ielts-coaching/${slug}/`,
      type: "article",
      images: ielt.image
        ? [
            {
              url: ielt.image,
              width: 1200,
              height: 630,
              alt: ielt.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: ielt.metaTitle || ielt.title,
      description: ielt.metaDescription,
      images: ielt.image ? [ielt.image] : [],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function IELTSPage({ params }) {
  const { slug } = await params;

  const ielt = ielts.find((item) => item.slug === slug);

  if (!ielt) {
    notFound();
  }

    const pageUrl = `https://www.indoeuropean.in/ielts-coaching/${slug}/`;

    const ieltsSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
            {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://indoeuropean.in/",
            },
            {
            "@type": "ListItem",
            position: 2,
            name: "IELTS Coaching",
            item: "https://indoeuropean.in/ielts-coaching/",
            },
            {
            "@type": "ListItem",
            position: 3,
            name: ielt.title,
            item: pageUrl,
            },
        ],
        },

        {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: ielt.metaTitle || ielt.title,
        description: ielt.metaDescription,
        url: pageUrl,
        inLanguage: "en",
        isPartOf: {
            "@type": "WebSite",
            url: "https://indoeuropean.in/",
        },
        },

        ...(ielt.faqs?.length
        ? [
            {
                "@type": "FAQPage",
                "@id": `${pageUrl}#faq`,
                mainEntity: ielt.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
                })),
            },
            ]
        : []),
    ],
    };

  return (
    <>
        {ielt.breadcrumbImage && (
            <Breadcrumb title={ielt.title} imgUrl={ielt.breadcrumbImage}/>
        )}
      <section className="py-10 px-5">
        <div className="container mx-auto max-w-4xl">

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold font-aino text-primary mt-8">
            {ielt.title}
          </h1>

          {/* Content */}
          {ielt.sections?.map((section, index) => {
            if (section.type === "image") {
              return (
                <Image
                  key={index}
                  src={section.content}
                  alt={section.text || ielt.title}
                  className="w-full rounded-xl mt-8"
                  width={1200}
                  height={630}
                />
              );
            }

            if (section.type === "heading") {
              return (
                <h2
                  key={index}
                  className="mt-10 text-2xl md:text-3xl font-semibold font-aino text-primary"
                >
                  {section.content}
                </h2>
              );
            }

            /* --------------------------------
               SUBHEADING
            -------------------------------- */
            if (section.type === "subheading") {
              return (
                <h3
                  key={index}
                  className="mt-7 text-xl md:text-2xl font-semibold font-aino text-primary"
                >
                  {section.content}
                </h3>
              );
            }

            /* --------------------------------
               PARAGRAPH
            -------------------------------- */
            if (section.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="mt-4 text-justify text-gray-700 leading-8 font-inter"
                >
                  {Array.isArray(section.content)
                    ? section.content.map((item, i) => {
                        switch (item.type) {
                          case "text":
                            return (
                              <span key={i}>
                                {item.text}
                              </span>
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
                              <strong
                                key={i}
                                className="font-semibold"
                              >
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
                <ul
                  key={index}
                  className="mt-5 space-y-3 rounded-2xl bg-primary/5 p-5"
                >
                  {section.items?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-gray-700 font-inter"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />

                      <span className="leading-7">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }

            if (section.type === "table") {
              return (
                <div
                  key={index}
                  className="mt-6 overflow-x-auto rounded-xl border border-gray-200"
                >
                  <table className="w-full min-w-150 border-collapse">
                    <thead>
                      <tr className="bg-primary text-white">
                        {section.content?.headers?.map(
                          (header, headerIndex) => (
                            <th
                              key={headerIndex}
                              className="border border-gray-200 px-4 py-3 text-left font-semibold"
                            >
                              {header}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>

                    <tbody>
                      {section.content?.rows?.map(
                        (row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={
                              rowIndex % 2 === 0
                                ? "bg-white"
                                : "bg-gray-50"
                            }
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="border border-gray-200 px-4 py-3 text-gray-700"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}

          {ielt.faqs?.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-semibold font-aino text-primary mb-6">
                FAQs
              </h2>

              {ielt.faqs.map((faq, index) => (
                (<MyAccordion key={index} id={index} title={faq.question} content={faq.answer}/>)
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Schema */}
      <Script
        id="ielts-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ieltsSchema),
        }}
      />
    </>
  );
}