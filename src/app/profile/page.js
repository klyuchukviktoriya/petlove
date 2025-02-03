"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { selectIsAuthenticated } from "@/redux/auth/selectors";
import CongratsModal from "@/components/Modals/CongratsModal/CongratsModal";

export default function Profile() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => setIsModalOpen(true)}>CongratsModal</button>
      <CongratsModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}
