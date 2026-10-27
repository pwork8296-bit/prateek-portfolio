import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prateek-kumar-portfolio.vercel.app"),
  title: {
    default:
      "Prateek Kumar | Freelance Software Developer & Software Teacher Trainer | FastAPI, Django, Laravel, React",
    template: "%s | Prateek Kumar",
  },
  description:
    "Portfolio of Prateek Kumar, a seasoned Freelance Software Developer & Software Teacher Trainer with 5+ years of experience specializing in Python, FastAPI, Django, Laravel, PHP, Node.js, React.js, Next.js, REST APIs, and developer training bootcamps.",
  keywords: [
    "Prateek Kumar",
    "Freelance Software Developer",
    "Software Teacher",
    "Tech Trainer",
    "Coding Instructor",
    "Python Trainer",
    "Django Instructor",
    "FastAPI",
    "Laravel",
    "PHP",
    "React.js",
    "Next.js",
    "Three.js",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Technical SEO",
    "Full-Stack Mentorship",
    "Delhi",
    "India",
  ],
  authors: [
    {
      name: "Prateek Kumar",
      url: "https://prateek-kumar-portfolio.vercel.app/",
    },
  ],
  creator: "Prateek Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://prateek-kumar-portfolio.vercel.app/",
  },
  icons: {
    icon: [{ url: "/images/dark.jpeg", type: "image/jpeg" }],
    shortcut: "/images/dark.jpeg",
    apple: "/images/dark.jpeg",
  },
  openGraph: {
    type: "website",
    url: "https://prateek-kumar-portfolio.vercel.app/",
    title:
      "Prateek Kumar | Freelance Software Developer & Software Teacher Trainer",
    description:
      "Explore live production systems, APIs, ERPs, and developer training programs led by Prateek Kumar. Specializing in Python, FastAPI, Django, Laravel, React.js, and technical coaching.",
    siteName: "Prateek Kumar Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAgObyoiAeGB7lLOu16AvHww9z-ukO94LNEB_P7DGuw8OEWPPr7KcmL5aojlEL23j44ebyQo6rE6RvGj7cTjEWI5JRVnHfy8OgcjlZRFHMvYlJOuWSfHgc4uvkLUi1El8OR3sMhm52RJS_eZ6tts2q-II0H7OHrnUGzpfhkq30hLnhyE-WrkRUy3FDsDoJY7GP_GPbaj_YixAQZ_UtA6DftqQkdqrFlngLIUPqrFNVpgBKBfvXLWSp",
        alt: "Prateek Kumar | Freelance Software Developer & Software Teacher Trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prateek Kumar | Freelance Software Developer & Software Teacher Trainer",
    description:
      "Freelance Full-Stack Engineer & Software Tech Trainer specializing in FastAPI, Django, Laravel, React.js, and hands-on coding bootcamps. 5+ years creating production architectures and mentoring engineers.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAgObyoiAeGB7lLOu16AvHww9z-ukO94LNEB_P7DGuw8OEWPPr7KcmL5aojlEL23j44ebyQo6rE6RvGj7cTjEWI5JRVnHfy8OgcjlZRFHMvYlJOuWSfHgc4uvkLUi1El8OR3sMhm52RJS_eZ6tts2q-II0H7OHrnUGzpfhkq30hLnhyE-WrkRUy3FDsDoJY7GP_GPbaj_YixAQZ_UtA6DftqQkdqrFlngLIUPqrFNVpgBKBfvXLWSp",
    ],
  },
  other: {
    "X-UA-Compatible": "IE=edge",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://prateek-kumar-portfolio.vercel.app/#person",
      name: "Prateek Kumar",
      jobTitle: "Freelance Software Developer & Software Teacher Trainer",
      url: "https://prateek-kumar-portfolio.vercel.app/",
      telephone: "+91-9721396405",
      email: "prateekpppp4@gmail.com",
      sameAs: ["https://linkedin.com/in/prateek-kumar-229599184"],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "UIET, CSJM University, Kanpur",
          description: "M.Sc Electronics (2019-2021)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Zakir Husain Delhi College, University of Delhi",
          description: "B.Sc Electronics (2016-2019)",
        },
      ],
      knowsAbout: [
        "Python",
        "FastAPI",
        "Django",
        "Laravel",
        "PHP",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Three.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "RESTful APIs",
        "Software Teacher Training",
        "Developer Mentorship & Bootcamps",
        "Technical SEO",
        "ERP Software Development",
        "Pick-to-Light (PTL) Systems",
        "Next.js & FastAPI Microservices",
        "Warehouse Inventory Management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://prateek-kumar-portfolio.vercel.app/#website",
      url: "https://prateek-kumar-portfolio.vercel.app/",
      name: "Prateek Kumar - Freelance Developer & Software Teacher Trainer Portfolio",
      publisher: {
        "@id": "https://prateek-kumar-portfolio.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          id="dynamic-favicon"
          rel="icon"
          type="image/jpeg"
          href="/images/dark.jpeg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md text-body-md min-h-screen selection:bg-primary-container selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
