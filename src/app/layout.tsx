import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sovannborith Digital Portfolio",
  description: "Sovannborith Digital Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-[2000px] ${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
