import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suvin Chandula - My Portfolio",
  description: "I am a Full Stack Web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </html>
  );
}
