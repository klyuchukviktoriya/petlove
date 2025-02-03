"use client";
import { useEffect } from "react";
import Modal from "react-modal";
import Nav from "@/components/Header/Nav/Nav";
import LogOutBtn from "@/components/LogOutBtn/LogOutBtn";
import AuthNav from "@/components/Header/AuthNav/AuthNav";
import css from "./MenuModal.module.css";
import { useHeaderContext } from "@/context/HeaderContext";
import { clsx } from "clsx";

export default function MenuModal({ isOpen, onClose, isAuthenticated }) {
  useEffect(() => {
    Modal.setAppElement(document.body);

    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const { isHomePage } = useHeaderContext();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={clsx(css.menuModal, isHomePage && css.homeMenuModal)}
      overlayClassName={css.menuOverlay}
    >
      <div className={css.menuContent}>
        <button className={css.menuCloseButton} onClick={onClose}>
          <svg className={css.menuCloseIcon}>
            <use href="/sprite.svg#x-modal" />
          </svg>
        </button>
        <Nav onLinkClick={onClose} />
        {isAuthenticated ? (
          <LogOutBtn onClick={onClose} />
        ) : (
          <AuthNav onLinkClick={onClose} />
        )}
      </div>
    </Modal>
  );
}
