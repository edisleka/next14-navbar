import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "Responsive Navbar",
  description: "Responsive Navbar with active links using usePathname() hook.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
