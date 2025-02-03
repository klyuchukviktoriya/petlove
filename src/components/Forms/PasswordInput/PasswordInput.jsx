"use client";
import { useState } from "react";
import clsx from "clsx";
import css from "./PasswordInput.module.css";

export default function PasswordInput({
  register,
  error,
  value,
  placeholder = "Password",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const hasInput = value?.length > 0;
  const isValid = value?.length >= 7;

  return (
    <div className={css.passwordWrapper}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={clsx(
          css.passwordInput,
          error && css.error,
          isValid && css.valid
        )}
        {...register}
      />
      {hasInput && (
        <button
          type="button"
          className={css.eyeButton}
          onClick={() => setShowPassword(!showPassword)}
        >
          <svg className={css.eyeIcon}>
            <use href={`/sprite.svg#${showPassword ? "eye" : "eye-off"}`} />
          </svg>
        </button>
      )}

      {isValid && (
        <>
          <svg className={css.validIcon}>
            <use href="/sprite.svg#check" />
          </svg>
          <p className={css.validText}>Password is secure</p>
        </>
      )}

      {error && <p className={css.errorText}>{error}</p>}
    </div>
  );
}
