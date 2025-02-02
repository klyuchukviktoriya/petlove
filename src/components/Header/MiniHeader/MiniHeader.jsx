"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/redux/auth/selectors";
import { useHeaderContext } from "@/context/HeaderContext";
import Logo from "@/components/Logo/Logo";
import UserBar from "@/components/UserBar/UserBar";
import LogOutBtn from "@/components/LogOutBtn/LogOutBtn";
import AuthNav from "@/components/AuthNav/AuthNav";
import MenuModal from "@/components/Modals/MenuModal/MenuModal";
import { clsx } from "clsx";
import css from "./MiniHeader.module.css";

export default function MiniHeader() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { isHomePage } = useHeaderContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={clsx(css.headerMini, isHomePage && css.homeHeaderMini)}>
      <Logo />
      <div className={css.headerMiniUserBar}>
        {isClient ? (
          isAuthenticated ? (
            <>
              <div className={css.logoutDis}>
                <LogOutBtn />
              </div>
              <UserBar />
            </>
          ) : (
            <div className={css.authDis}>
              <AuthNav />
            </div>
          )
        ) : null}
        <button className={css.menuButton} onClick={handleOpen}>
          <svg className={css.menuIcon}>
            <use href="/sprite.svg#menu" />
          </svg>
        </button>
      </div>

      <MenuModal
        isOpen={isOpen}
        onClose={handleClose}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
}
