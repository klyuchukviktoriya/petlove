import LoginForm from "@/components/LoginForm/LoginForm";
import css from "./page.module.css";
export default function Login() {
  return (
    <main className={css.container}>
      <LoginForm />
    </main>
  );
}
