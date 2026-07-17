
import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { blogs } from "@/public/data/blogs";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {};   
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    keywords: blog.keywords,

    alternates: {
      canonical: `https://www.indoeuropean.in/blogs/${slug}`,
    },

    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      url: `https://www.indoeuropean.in/blogs/${slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: [blog.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}



export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `https://www.indoeuropean.in/blogs/${slug}#article`,
      headline: blog.title,
      description: blog.metaDescription,
      image: [blog.image],
      author: {
        "@type": "Organization",
        name: "Study in latvia",
      },
      publisher: {
        "@type": "Organization",
        name: "Study in latvia",
        logo: {
          "@type": "ImageObject",
          url: "https://www.indoeuropean.in/logo.png",
        },
      },
      datePublished: blog.date,
      dateModified: blog.date,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.indoeuropean.in/blogs/${slug}`,
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `https://www.indoeuropean.in/blogs/${slug}#breadcrumb`,
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
          name: "Blogs",
          item: "https://www.indoeuropean.in/blogs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: blog.title,
          item: `https://www.indoeuropean.in/blogs/${slug}`,
        },
      ],
    },

    {
      "@type": "FAQPage",
      mainEntity: blog.faqs.map((faq) => ({
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

  return (
    <>
    <section className="py-10 px-5">
      <div className="container mx-auto max-w-4xl">
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-xl"
          width={720}
          height={540}
        />
        <h1 className="text-4xl font-bold font-aino mt-8">
          {blog.title}
        </h1>
        <p className="text-gray-500 mt-4 text-inter text-justify">
          {blog.date}
        </p>
      {blog.sections.map((section, index) => {
        if (section.type === "image") {
          return (
            <Image
              key={index}
              src={section.content}
              alt={section.text}
              className="w-full rounded-xl mt-3"
              width={720}
              height={540}
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
        if (section.type === "subheading") {
          return (
            <h3
              key={index}
              className="mt-6 text-xl md:text-2xl font-semibold font-aino text-primary"
            >
              {section.content}
            </h3>
          );
        }


        
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


if (section.type === "university-list") {
  return (
    <div key={index} className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {section.items.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-32 h-20">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 text-center font-Jakarta font-semibold text-primary text-sm md:text-base">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

      if (section.type === "list") {
        return (
          <ul
            key={index}
            className="mt-5 space-y-3 rounded-2xl bg-primary/5 p-5"
          >
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start gap-3 text-gray-700 font-inter"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />

                <span className="leading-7">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        );
      }
      return null;
    })}

        <div className="mt-10">
          {blog?.faqs?.length > 0 && <h2 className="mt-10 text-2xl md:text-3xl font-semibold font-aino text-primary mb-5">
            FAQs
          </h2>}

          {blog.faqs.map((faq, index) => (
            <div key={index} className="mt-5">
              <h3 className="font-semibold font-roboto">
                {`Q.${index + 1}`}&nbsp;{faq.question}
              </h3>

              <p className="font-inter text-justify mt-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
    </>
  );
}