import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import SmoothScroll from "./components/global/SmoothScroll";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOFTOZET - Home",
  description: "Softozet Build Togather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </SmoothScroll>
    </html>
  );
}
