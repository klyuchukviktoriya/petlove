"use client";
import RegistrationForm from "@/components/Forms/RegistrationForm";
import css from "./page.module.css";

export default function RegisterPage() {
  return (
    <main className={css.container}>
      {/* <PetBlock /> */}
      <div className={css.formWrapper}>
        {/* <Title text="Registration" /> */}
        <RegistrationForm />
      </div>
    </main>
  );
}
