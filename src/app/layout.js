import { Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import NoirNavbar, { HamBurgerMenu } from "@/components/ui/NoirNavbar";
import { ConfigProvider } from "@/contexts/ConfigContext";
import { personStructuredData, websiteStructuredData, organizationStructuredData } from "./structured-data";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: {
    default: "Mushan Khan - Software Engineer & Full Stack Developer",
    template: "%s | Mushan Khan"
  },
  description: "Hi, I'm Mushan Khan, a passionate Software Engineer and Full Stack Developer. I specialize in React, Node.js, and modern web technologies. Explore my portfolio to see my projects and experience.",
  keywords: [
    "Mushan Khan",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Next.js"
  ],
  authors: [{ name: "Mushan Khan" }],
  creator: "Mushan Khan",
  publisher: "Mushan Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mushankhan.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mushankhan.com', // Replace with your actual domain
    title: 'Mushan Khan - Software Engineer & Full Stack Developer',
    description: 'Hi, I\'m Mushan Khan, a passionate Software Engineer and Full Stack Developer. I specialize in React, Node.js, and modern web technologies.',
    siteName: 'Mushan Khan Portfolio',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mushan Khan - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mushan Khan - Software Engineer & Full Stack Developer',
    description: 'Hi, I\'m Mushan Khan, a passionate Software Engineer and Full Stack Developer. I specialize in React, Node.js, and modern web technologies.',
    images: ['/images/logo.png'],
    creator: '@mushankhan', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="flex justify-center items-center" lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0b0b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personStructuredData,
              websiteStructuredData,
              organizationStructuredData
            ])
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased w-full h-full lg:pt-24 container relative`}
        style={{ backgroundColor: "#0b0b0b" }}
      >
        {/* Film grain overlay for entire page */}
        <div
          className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px",
          }}
        />
        <ConfigProvider>
          {/* Navbar */}
          <NoirNavbar />
          <Analytics />
          <HamBurgerMenu />
          {/* <CustomCursor /> */}
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
