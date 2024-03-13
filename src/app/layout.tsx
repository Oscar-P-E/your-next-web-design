import "~/styles/globals.css";

// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Permanent_Marker } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const permanentMarker = Permanent_Marker({
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
        className={`font-sans ${montserrat.variable} font-cursive ${permanentMarker.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
