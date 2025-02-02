"use client";
import RegistrationForm from "@/components/Forms/RegistrationForm/RegistrationForm";
import css from "./page.module.css";

export default function RegisterPage() {
  return (
    <main className={css.register}>
      {/* <PetBlock /> */}
      <div className={css.formWrapper}>
        {/* <Title text="Registration" /> */}
        <RegistrationForm />
      </div>
    </main>
  );
}
