import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Navigation, Footer } from "@/components/shared";
import "@/styles/globals.css";

const latoHeading = Lato({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const latoBody = Lato({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A curated collection of artwork showcasing digital and physical creations.",
  keywords: ["art", "portfolio", "digital art", "painting", "illustration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${latoHeading.variable} ${latoBody.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
