"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { registerUser } from "@/redux/auth/operations";
import { setUser } from "@/redux/auth/slice";
import css from "./RegistrationForm.module.css";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required(),
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
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder="Name" />
      <p className={css.error}>{errors.name?.message}</p>

      <input type="email" {...register("email")} placeholder="Email" />
      <p className={css.error}>{errors.email?.message}</p>

      <input type="password" {...register("password")} placeholder="Password" />
      <p className={css.error}>{errors.password?.message}</p>

      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Confirm Password"
      />
      <p className={css.error}>{errors.confirmPassword?.message}</p>

      <button type="submit" className={css.submit}>
        Registration
      </button>
    </form>
  );
}
