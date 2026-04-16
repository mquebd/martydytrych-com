import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marty Dytrych — Industrial Startup Founder · Sales & GTM · AI Operator",
  description:
    "Industrial startup founder and sales operator who finds product-market fit in hard technical markets, builds GTM from scratch, and uses AI to extend the surface area of small teams.",
  metadataBase: new URL("https://martydytrych.com"),
  openGraph: {
    title: "Marty Dytrych",
    description:
      "Industrial startup founder · Sales & GTM · AI-powered operator",
    url: "https://martydytrych.com",
    siteName: "martydytrych.com",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
