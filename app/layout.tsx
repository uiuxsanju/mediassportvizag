import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import IntroSplash from "@/components/IntroSplash";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MEDIASPOT – Advertising Hub | Sign Boards, Branding & Corporate Gifts",
  description:
    "MEDIASPOT Advertising Hub – Premium sign boards, 3D acrylic letters, SS letters, in-shop branding, corporate gifts, photo frames & awards. Delivering all over India.",
  keywords:
    "sign boards, 3D letters, acrylic letters, SS letters, glow sign board, LED board, inshop branding, corporate gifts, MEDIASPOT",
  openGraph: {
    title: "MEDIASPOT – Advertising Hub",
    description:
      "Creative Branding & Advertising Solutions. Delivering All Over India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <IntroSplash />
        <CartProvider>{children}</CartProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MEDIASPOT – Advertising Hub",
              telephone: "+91-9XXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Visakhapatnam",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
              openingHours: "Mo-Sa 09:30-20:30",
            }),
          }}
        />
      </body>
    </html>
  );
}