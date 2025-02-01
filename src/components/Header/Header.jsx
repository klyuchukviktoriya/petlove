"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MiniHeader from "./MiniHeader/MiniHeader";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let HeaderComponent;
  if (screenWidth < 1280) {
    HeaderComponent = MiniHeader;
  } else {
    HeaderComponent = DesktopHeader;
  }

  return (
    <header className={`${css.header} ${isHomePage ? css.homeHeader : ""}`}>
      <HeaderComponent />
    </header>
  );
}
