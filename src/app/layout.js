import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El Camino del Cannabis en San Luis",
  description: "El Camino del Cannabis en San Luis",
  verification: { google: "r0vpWD7Z0s48JpQlIW8OrlG2-VeMMnvIj7tp672wNyc" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


<head>

<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
/>

<Script id="google-analytics">
  {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
  `}
</Script>
</head>

      <body className={inter.className}>{children}</body>
 
 
    </html>
  );
}
 