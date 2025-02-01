"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/auth/operations";
import { useRouter } from "next/navigation";
import ModalApproveAction from "@/components/ModalApproveAction/ModalApproveAction";
import css from "./LogOutBtn.module.css";

export default function LogOutBtn({ onLogout }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logout()).unwrap();
    localStorage.removeItem("authToken");
    setIsModalOpen(false);

    if (onLogout) onLogout();
    router.push("/home");
  };

  return (
    <>
      <button className={css.logOut} onClick={() => setIsModalOpen(true)}>
        Log Out
      </button>
      <ModalApproveAction
        isOpen={isModalOpen}
        message="Already leaving?"
        onConfirm={handleLogout}
        onCancel={() => setIsModalOpen(false)}
        closeMenu={onLogout}
      />
    </>
  );
}
