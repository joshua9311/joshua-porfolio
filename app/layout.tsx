import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://joshuamwenda.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joshua Mwenda — Web Developer & Graphic Designer",
    template: "%s | Joshua Mwenda",
  },
  description:
    "Joshua Mwenda is a passionate Web Developer, Graphic Designer, and ICT Enthusiast based in Nairobi, Kenya. Building premium digital experiences and visual identities.",
  keywords: [
    "Joshua Mwenda",
    "Web Developer",
    "Graphic Designer",
    "ICT Enthusiast",
    "Next.js Developer",
    "React Developer",
    "UI/UX Designer",
    "Kenya",
    "Nairobi",
    "Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Joshua Mwenda", url: siteUrl }],
  // Contact: joshuamwenda36@gmail.com | +254 737 748 796
  creator: "Joshua Mwenda",
  publisher: "Joshua Mwenda",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Joshua Mwenda Portfolio",
    title: "Joshua Mwenda — Web Developer & Graphic Designer",
    description:
      "Building premium digital experiences. Web Development, UI/UX Design, and Brand Identity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joshua Mwenda — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Mwenda — Web Developer & Graphic Designer",
    description:
      "Building premium digital experiences. Web Development, UI/UX Design, and Brand Identity.",
    creator: "@joshuamwenda",
    images: ["/og-image.png"],
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || "",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(15, 23, 42, 0.9)",
              color: "#e2e8f0",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              fontFamily: "DM Sans, sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
