"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { registerUser } from "@/redux/auth/operations";
import { setUser } from "@/redux/auth/slice";
import css from "./RegistrationForm.module.css";
import { toast, ToastContainer } from "react-toastify";
import PasswordInput from "@/components/Forms/PasswordInput/PasswordInput";
import InputField from "../InputField/InputField";
import Title from "@/components/Title/Title";
import Link from "next/link";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default function RegistrationForm() {
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
    const { confirmPassword, ...userData } = data;
    try {
      const result = await dispatch(registerUser(userData)).unwrap();
      if (result?.token) {
        toast.success("💛 Registration successful!");

        dispatch(
          setUser({
            name: result.name,
            email: result.email,
            token: result.token,
          })
        );
        localStorage.setItem("token", result.token);
        router.push("/profile");
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className={css.registerForm}>
      <Title className={css.registerTitle}>Registration</Title>
      <p className={css.registerText}>
        Thank you for your interest in our platform.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.registerInputs}>
        <InputField
          type="text"
          placeholder="Name"
          register={register("name")}
          error={errors.name?.message}
        />
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
        <PasswordInput
          name="confirmPassword"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
          placeholder="Confirm password"
        />
        <button className={css.registerFormBtn} type="submit">
          Registration
        </button>
      </form>
      <p className={css.registerGoto}>
        Already have an account? <Link href="/login">Login</Link>
      </p>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
