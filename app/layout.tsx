import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingProvider from "./LoadingProvider"; // Import komponen client tadi

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Momtana Resto - Ayam & bebek goreng laos spesial sambal mangga",
    template: "%s | Momtana Resto",
  },
  description:
    "Resto ayam & bebek goreng laos spesial dengan sambal mangga khas. Nikmati cita rasa hangat dan autentik di Momtana, Solo.",

  keywords: [
    "ayam goreng laos",
    "bebek goreng",
    "sambal mangga",
    "resto solo",
    "kuliner solo",
    "restoran jawa tengah",
  ],

  authors: [{ name: "Momtana Resto" }],

  openGraph: {
    title: "Momtana Resto",
    description:
      "Ayam & bebek goreng laos spesial sambal mangga. Hangat, autentik, dan penuh rasa.",
    url: "https://momtana.id", 
    siteName: "Momtana Resto",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/momtana-logo.png",
        width: 1200,
        height: 630,
        alt: "Momtana Resto",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Momtana Resto",
    description:
      "Ayam & bebek goreng laos spesial sambal mangga khas.",
    images: ["/momtana-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Bungkus children dengan LoadingProvider */}
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}