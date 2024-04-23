import "~/styles/globals.css";

// import { Inter } from "next/font/google";
import { Montserrat as Sans } from "next/font/google";
import { Permanent_Marker as Cursive } from "next/font/google";
// import { JetBrains_Mono as Mono } from "next/font/google";
import { Space_Mono as Mono } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const mono = Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  // weight: ["400", "600"],
  weight: ["400", "700"],
});

const sans = Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cursive = Cursive({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: "400",
});

export const metadata = {
  title: "Your Next Web Design",
  description: "The next level of web design",
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
    { rel: "icon", url: "/favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${sans.variable} font-cursive ${cursive.variable} font-mono ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
