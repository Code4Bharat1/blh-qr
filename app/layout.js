import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Brass Line Hirer | Quality & service is our passion",
  description:
    "Brass Line Hirer, Marine Lines, Mumbai. Call, WhatsApp, email or visit our website.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2b3636",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
