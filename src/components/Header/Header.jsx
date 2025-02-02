"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MiniHeader from "./MiniHeader/MiniHeader";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  const [isClient, setIsClient] = useState(false);
  const [isMiniHeader, setIsMiniHeader] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkScreenSize = () => {
      setIsMiniHeader(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isClient) return null;

  return (
    <header className={`${css.header} ${isHomePage ? css.homeHeader : ""}`}>
      {isMiniHeader ? <MiniHeader /> : <DesktopHeader />}
    </header>
  );
}
