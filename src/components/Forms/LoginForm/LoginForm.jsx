"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "@/redux/auth/operations";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "../InputField/InputField";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import css from "./LoginForm.module.css";
import Title from "@/components/Title/Title";
import Link from "next/link";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      const result = await dispatch(login(data)).unwrap();
      if (result?.token) {
        toast.success("✅ Successful login!");
        localStorage.setItem("token", result.token);
        router.push("/profile");
      } else {
        toast.error("⚠️ Incorrect email or password!");
      }
    } catch (error) {
      toast.error(error.message || "⛔ Login failed!");
    }
  };

  return (
    <div className={css.loginForm}>
      <Title className={css.loginTitle}>Log in</Title>
      <p className={css.loginText}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.loginInputs}>
        <InputField
          type="text"
          placeholder="Email"
          register={register("email")}
          error={errors.email?.message}
        />

        <PasswordInput
          name="password"
          register={register("password")}
          error={errors.password?.message}
          value={watch("password")}
        />

        <button className={css.loginFormBtn} type="submit">
          Log In
        </button>
      </form>
      <p className={css.loginGoto}>
        Don’t have an account? <Link href="/register">Register</Link>
      </p>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
