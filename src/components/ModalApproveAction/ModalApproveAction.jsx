"use client";
import { useEffect } from "react";
import BaseModal from "../BaseModal/BaseModal";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/auth/operations";
import { setUser } from "@/redux/auth/slice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./ModalApproveAction.module.css";

export default function ModalApproveAction({ onCancel, isOpen }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleConfirm = async () => {
    try {
      await dispatch(logout()).unwrap();
    } catch (error) {
      toast.error("💔 Logout failed. Please try again.");
      return;
    }

    dispatch(setUser(null));
    localStorage.removeItem("authToken");
    router.push("/home");
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onCancel]);

  return (
    <BaseModal isOpen={isOpen} onClose={onCancel}>
      <div className={css.logoutContent}>
        <div className={css.logoutImgWrapper}>
          <Image width={44} height={44} src="/images/modalCat.png" alt="Cat" />
        </div>
        <p>Already leaving?</p>
        <div className={css.logoutButtons}>
          <button className={css.logoutYes} onClick={handleConfirm}>
            Yes
          </button>
          <button className={css.logoutCancel} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
