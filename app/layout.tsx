import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Menu from "./components/Menu";
import PiedDePage from "./components/pied-de-page";
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
  title: "Amina — Portfolio",
  description: "Projets 3D, jeu vidéo, direction artistique et web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Menu />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6">{children}</main>
        <div className="mx-auto w-full max-w-3xl px-6">
          <PiedDePage />
        </div>
      </body>
    </html>
  );
}
