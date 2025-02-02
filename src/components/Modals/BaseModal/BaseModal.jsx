"use client";
import { useEffect } from "react";
import Modal from "react-modal";
import css from "./BaseModal.module.css";

export default function BaseModal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement(document.body);
    }

    const handleEscape = event => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("no-scroll");
    };
  }, [onClose, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          <svg className={css.closeIcon}>
            <use href="/sprite.svg#x-modal" />
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
}
