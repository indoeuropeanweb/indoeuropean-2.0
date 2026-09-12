import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import branches from "@/public/data/branches";

export async function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.slug,
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const branch = branches.find((item) => item.slug === slug);

  if (!branch) {
    return {};   
  }

  return {
    title: branch.metaTitle || branch.title,
    description: branch.metaDescription,
    keywords: branch.keywords,
    alternates: {
      canonical: `https://www.indoeuropean.in/branches/${slug}`,
    },

    openGraph: {
      title: branch.metaTitle || branch.title,
      description: branch.metaDescription,
      url: `https://www.indoeuropean.in/branches/${slug}`,
      type: "article",
      images: [
        {
          url: branch.image,
          width: 1200,
          height: 630,
          alt: branch.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: branch.metaTitle || branch.title,
      description: branch.metaDescription,
      images: [branch.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BranchPage({ params }){
    const { slug } = await params;
  
    const branch = branches.find(
      (item) => item.slug === slug
    );
  
    if (!branch) {
      notFound();
    }
  
    const branchSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "branchPosting",
        "@id": `https://www.indoeuropean.in/branches/${slug}#article`,
        headline: branch.title,
        description: branch.metaDescription,
        image: [branch.image],
        author: {
          "@type": "Organization",
          name: "Indo European Study Abroad Educational Services Pvt Ltd",
        },
        publisher: {
          "@type": "Organization",
          name: "Indo European Study Abroad Educational Services Pvt Ltd",
          logo: {
            "@type": "ImageObject",
            url: "https://www.indoeuropean.in/logo.png",
          },
        },
        datePublished: branch.date,
        dateModified: branch.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.indoeuropean.in/branch/${slug}`,
        },
      },
  
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.indoeuropean.in/branches/${slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.indoeruopean.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Branches",
            item: "https://www.indoeuropean.in/branches",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: branch.title,
            item: `https://www.indoeuropean.in/branches/${slug}`,
          },
        ],
      },
  
      {
        "@type": "FAQPage",
        mainEntity: branch.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
  return (    <>
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <Image
          src={branch.image}
          alt={branch.title}
          className="w-full rounded-xl"
          width={720}
          height={540}
        />
        <h1 className="text-4xl font-bold font-jakarta mt-8">
          {branch.title}
        </h1>
        {branch.sections.map((section, index) => {
          if (section.type === "image") {
            return (
              <div key={index} className="my-10">
                <div className="overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={section.content}
                    alt={section.text || ""}
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {section.text && (
                  <p className="mt-3 text-center text-sm text-gray-500 font-manrope">
                    {section.text}
                  </p>
                )}
              </div>
            );
          }

          if (section.type === "map") {
            return (
              <section key={index} className="my-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
                  
                  {/* Map */}
                  <div className="">
                    <iframe
                      src={section.mapUrl}
                      width={460}
                      height={360}
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title={section.title || "Branch location"}
                    />
                  </div>

                  {/* Address */}
                  <div className="flex flex-col px-5 py-5">
                    
                    {section.title && (
                      <h2 className="text-xl md:text-2xl font-semibold font-jakarta">
                        {section.title}
                      </h2>
                    )}

                    <div className="mt-6 space-y-5">
                      {/* Address */}
                      {section.address && (
                        <div className="flex items-start gap-4">
                          <div className="flex shrink-0 items-center justify-center">
                            📍
                          </div>

                          <div>
                            <p className="text-sm font-semibold font-manrope">
                              Address
                            </p>

                            <p className="leading-7 font-manrope">
                              {section.address}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Phone */}
                      {section.phone && (
                        <div className="flex items-start gap-4">
                          <div className="flex shrink-0 items-center justify-center">
                            📞
                          </div>

                          <div>
                            <p className="text-sm font-semibold font-manrope">
                              Phone
                            </p>

                            <a
                              href={`tel:${section.phone}`}
                              className="mt-1 block font-manrope hover:underline"
                            >
                              {section.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Email */}
                      {section.email && (
                        <div className="flex items-start gap-4">
                          <div className="flex shrink-0 items-center justify-center">
                            ✉
                          </div>

                          <div>
                            <p className="text-sm font-semibold font-manrope">
                              Email
                            </p>

                            <a
                              href={`mailto:${section.email}`}
                              className="mt-1 block font-manrope hover:underline"
                            >
                              {section.email}
                            </a>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === "twoColumn") {
            return (
              <section
                key={index}
                className="my-14 overflow-hidden rounded-3xl bg-gray-50"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 items-stretch ${
                    section.reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-70 md:min-h-105">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.heading || ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                    {section.heading && (
                      <div className="mb-5">
                        <h2 className="text-2xl md:text-3xl font-semibold font-jakarta text-primary leading-tight">
                          {section.heading}
                        </h2>
                        <span className="mt-3 block h-1 w-12 rounded-full bg-secondary" />
                      </div>
                    )}
                    {section.content && (
                      <p className="text-gray-600 leading-8 text-justify font-manrope">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <ul className="mt-6 space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-gray-700 font-manrope"
                          >
                            <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-white text-xs">
                              ✓
                            </span>

                            <span className="leading-7">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === "heading") {
            return (
              <div key={index} className="mt-14 mb-6">
                <div className="flex items-center gap-4">
                  <span className="h-8 w-1.5 rounded-full bg-secondary" />

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-jakarta text-primary leading-tight">
                    {section.content}
                  </h2>
                </div>
              </div>
            );
          }

          if (section.type === "subheading") {
            return (
              <h3
                key={index}
                className="mt-9 mb-4 text-xl md:text-2xl font-semibold font-jakarta text-primary"
              >
                {section.content}
              </h3>
            );
          }

          if (section.type === "paragraph") {
            return (
              <p
                key={index}
                className="mt-5 text-[16px] md:text-[17px] text-gray-600 text-justify leading-8 font-manrope"
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
                              className="text-primary font-semibold hover:underline"
                            >
                              {item.text}
                            </Link>
                          );

                        case "bold":
                          return (
                            <strong key={i} className="font-semibold text-gray-800">
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
                className="my-8 rounded-2xl border border-primary/10 bg-primary/3 p-6 md:p-8"
              >
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-4 font-manrope text-gray-700"
                    >
                      <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary text-sm font-bold">
                        ✓
                      </span>

                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          return null;
        })}

        <div className="mt-10">
          {branch?.faqs?.length > 0 && <h2 className="mt-10 text-2xl md:text-3xl font-semibold font-jakarta text-primary mb-5">
            FAQs
          </h2>}

          {branch.faqs.map((faq, index) => (
            <div key={index} className="mt-5">
              <h3 className="font-semibold font-jakarta">
                {`Q.${index + 1}`}&nbsp;{faq.question}
              </h3>

              <p className="font-manrope text-justify mt-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Script
        id="branch-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(branchSchema),
        }}
      />
    </>)
}




