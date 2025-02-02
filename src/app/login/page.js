import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import css from "./page.module.css";
export default function Login() {
  return (
    <main className={css.login}>
      <LoginForm />
    </main>
  );
}
