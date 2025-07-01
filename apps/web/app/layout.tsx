import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surfbit - Where Innovation Meets Execution",
  description: "We help startups launch and grow with scalable web and mobile apps.",
  keywords: [
    "Surfbit",
    "Startup software agency",
    "Next.js development",
    "MERN stack",
    "Web development",
    "App development",
    "Tech for startups"
  ],
  authors: [
    {
      name: "Ravi Pandey",
      url: "https://github.com/mrravipandee"
    },
    {
      name: "Aman Husain",
      url: "https://github.com/aman-husain" 
    },
    {
      name: "Yash ",
      url: "https://github.com/yash"
    },
    {
      name: "Nitesh Ray",
      url: "https://github.com/nitesh-ray" 
    }
  ],

  openGraph: {
    title: "Surfbit - Where Innovation Meets Execution",
    description:
      "We help startups launch and grow with scalable web and mobile apps.",
    url: "https://surfbit.in",
    siteName: "Surfbit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surfbit - Startup Tech Partner"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfbit - Where Innovation Meets Execution",
    description:
      "We help startups launch and grow with scalable web and mobile apps.",
    images: ["/og-image.jpg"]
  },
  metadataBase: new URL("https://surfbit.in"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
