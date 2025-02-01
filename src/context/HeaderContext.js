"use client";
import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  return (
    <HeaderContext.Provider value={{ isHomePage }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  return useContext(HeaderContext);
}
