import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css";
import Navbar, { HamBurgerMenu } from "@/components/Navbar";
import { ConfigProvider } from "@/contexts/ConfigContext";
import { personStructuredData, websiteStructuredData, organizationStructuredData } from "./structured-data";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
// Background floating orbs
const orbs = [
  {
    size: "w-80 h-80",
    position: "-top-40 -left-40",
    delay: "0s",
    duration: "15s",
  },
  {
    size: "w-96 h-96",
    position: "-bottom-60 -right-60",
    delay: "2s",
    duration: "18s",
  },
  {
    size: "w-64 h-64",
    position: "top-1/3 -right-32",
    delay: "5s",
    duration: "12s",
  },
];
export default function RootLayout({ children }) {
  return (
    <html className="flex justify-center items-center" lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full lg:pt-24 container relative`}
      >
        {orbs.map((orb, index) => (
          <div
            key={index}
            className={`absolute rounded-full opacity-10 animate-pulse-slow ${orb.position} ${orb.size}`}
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-end), var(--gradient-start))",
              filter: "blur(80px)",
              animation: `float ${orb.duration} infinite alternate-reverse`,
              animationDelay: orb.delay,
            }}
          />
        ))}
        <ConfigProvider>
          {/* Navbar */}
          <Navbar />
          <Analytics />
          <HamBurgerMenu/>
          {/* <CustomCursor /> */}
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
