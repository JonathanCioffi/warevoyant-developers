import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "WareVoyant Developers",
    template: "%s | WareVoyant Developers",
  },
  description:
    "Build with the WareVoyant API. Automate AV commissioning workflows, manage sites, equipment, and audits programmatically.",
  openGraph: {
    title: "WareVoyant Developers",
    description:
      "Build with the WareVoyant API. Automate AV commissioning workflows, manage sites, equipment, and audits programmatically.",
    siteName: "WareVoyant Developers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rbr8wxi.css" />
      </head>
      <body className="min-h-screen bg-[var(--wv-bg)] text-[var(--wv-text)] antialiased">
        <Header />
        <main className="min-h-[calc(100vh-64px-97px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
