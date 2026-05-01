import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Bowman's Source Work | Website Design & Care in Anderson, SC";
const description =
  "Bowman's Source Work helps Anderson-area small businesses build clean, mobile-friendly websites and keep them updated with reliable website care.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bowmansourcework.com"),
  title,
  description,
  keywords: [
    "Anderson SC website design",
    "local website designer",
    "small business website",
    "website care",
    "website redesign",
    "Upstate South Carolina web design",
    "mobile-friendly websites",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title,
    description,
    url: "https://bowmansourcework.com",
    siteName: "Bowman's Source Work",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/bowmans-source-work-logo.png",
        width: 1090,
        height: 389,
        alt: "Bowman's Source Work logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/bowmans-source-work-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
