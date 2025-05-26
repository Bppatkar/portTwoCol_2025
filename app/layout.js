import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description:
    "A personal portfolio website built with Next.js, Tailwind CSS, and GSAP.",
};

/**
 * RootLayout component for the entire application.
 * This is a Server Component by default in the App Router.
 * It sets up the HTML structure, global styles, and fonts.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Child components (pages) to be rendered.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased bg-primary text-text`}
      >
        {children}
      </body>
    </html>
  );
}

