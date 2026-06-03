// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Susan Sapkota | Web Developer & Computer Engineering Student",
  description:
    "Portfolio of Susan Sapkota — Computer Engineering student at IOE Purwanchal Campus. Skilled in React, Next.js, Node.js, Python, and MongoDB.",
  metadataBase: new URL("https://www.susansapkota.com.np"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Susan Sapkota | Web Developer",
    description:
      "Explore Susan Sapkota's portfolio — projects, skills, and experience in React, Next.js, Node.js, and more.",
    url: "https://www.susansapkota.com.np",
    siteName: "Susan Sapkota Portfolio",
    images: [{ url: "/profile.jpeg", width: 1200, height: 630, alt: "Susan Sapkota" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Susan Sapkota | Web Developer",
    description: "Computer Engineering student building web apps with React, Next.js & Node.js.",
    images: ["/profile.jpeg"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "iVeCbVUw-LXfaroNGPf4P-eXsanbTi-jOqqVidaI0Q4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Susan Sapkota",
              url: "https://www.susansapkota.com.np",
              jobTitle: "Computer Engineering Student & Web Developer",
              email: "susansapkota986@gmail.com",
              sameAs: [
                "https://www.linkedin.com/in/susan-sapkota-9373b91b4/",
                "https://github.com/Susan-sapkota-98",
              ],
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="relative w-full flex items-center justify-center">
            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}