import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El Camino del Cannabis en San Luis",
  description: "El Camino del Cannabis en San Luis",
  verification: { google: "r0vpWD7Z0s48JpQlIW8OrlG2-VeMMnvIj7tp672wNyc" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
 
 
    </html>
  );
}
 