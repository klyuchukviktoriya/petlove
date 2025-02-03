import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import css from "./page.module.css";
import PetBlock from "@/components/Forms/PetBlock/PetBlock";

export default function Login() {
  return (
    <main className={css.login}>
      <div className={css.loginBlock}>
        <PetBlock
          className={css.loginImg}
          src="/images/smallDog.png"
          alt="Dog"
          name="Rich"
          birthday="21.09.2020"
          description="Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"
        />
        <LoginForm />
      </div>
    </main>
  );
}
