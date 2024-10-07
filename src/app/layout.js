import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/Components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Culinary Fusion Kitchen",
  description: "Designed by M-Bilal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
