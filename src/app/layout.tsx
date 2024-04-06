import "~/styles/globals.css";

// import { Inter } from "next/font/google";
import { Montserrat as Sans } from "next/font/google";
import { Permanent_Marker as Cursive } from "next/font/google";
import { JetBrains_Mono as Mono } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const mono = Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
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
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
