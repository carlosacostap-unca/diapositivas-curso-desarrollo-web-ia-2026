import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curso de Desarrollo de Aplicaciones Web Asistido por IA",
  description:
    "Presentación del Curso de Desarrollo de Aplicaciones Web Asistido por Inteligencia Artificial.",
  metadataBase: new URL("https://curso-desarrollo-web-ia.carlosacostap.chatgpt.site"),
  openGraph: {
    title: "Desarrollo de Aplicaciones Web Asistido por IA",
    description: "2 proyectos · 8 clases · 4 semanas",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de Aplicaciones Web Asistido por IA",
    description: "2 proyectos · 8 clases · 4 semanas",
    images: ["/og.png"],
  },
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
