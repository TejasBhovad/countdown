import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Downcount",
  description: "Event countdown app",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    site: "downcount",
    creator: "@downcount",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className}>
        <Provider> {children}</Provider>
      </body>
    </html>
  );
}
