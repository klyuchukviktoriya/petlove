import RegistrationForm from "@/components/Forms/RegistrationForm/RegistrationForm";
import css from "./page.module.css";
import PetBlock from "@/components/Forms/PetBlock/PetBlock";

export default function RegisterPage() {
  return (
    <main className={css.register}>
      <div className={css.registerBlock}>
        <PetBlock
          className={css.registerImg}
          src="/images/smallCat.png"
          alt="Cat"
          name="Jack"
          birthday="18.10.2021"
          description="Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
        />
        <RegistrationForm />
      </div>
    </main>
  );
}
