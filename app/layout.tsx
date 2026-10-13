import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primak Dent — сучасна стоматологія в Києві",
  description: "Комплексна стоматологія для дорослих і дітей біля метро Дорогожичі.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
