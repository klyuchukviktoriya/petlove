import { Manrope, Roboto } from "next/font/google";
import "./globals.css";
import { HeaderProvider } from "@/context/HeaderContext";
import Header from "@/components/Header/Header";
import ReduxProvider from "@/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Petlove - Your Best Pet Companion",
  description:
    "Find news, notices, and friends for your beloved pets at Petlove. Join our community today!",
  keywords:
    "pets, pet notices, pet friends, pet news, adopt pets, pet community",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className} ${roboto.className}`}>
      <body>
        <ReduxProvider>
          <HeaderProvider>
            <Header />
            <ToastContainer autoClose={3000} />
            {children}
          </HeaderProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
