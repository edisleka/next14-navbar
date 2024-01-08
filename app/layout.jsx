import { Header } from "@/components/header/header";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "Navbar",
  description: "Navbar with active links using usePathname() hook.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
