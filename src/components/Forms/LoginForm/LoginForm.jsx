"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "@/redux/auth/operations";
import { useRouter } from "next/navigation";

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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      const result = await dispatch(login(data)).unwrap();
      if (result?.token) {
        console.log("✅ Successful login:", result);

        localStorage.setItem("token", result.token);

        router.push("/profile");
      } else {
        console.error("⚠️ Incorrect API response", result);
      }
    } catch (error) {
      console.error("⛔ Login error:", error);
      alert(error.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input type="password" {...register("password")} placeholder="Password" />
      <p>{errors.password?.message}</p>

      <button type="submit">Log In</button>
    </form>
  );
}
