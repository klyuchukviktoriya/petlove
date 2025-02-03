"use client";
import clsx from "clsx";
import css from "./InputField.module.css";

export default function InputField({ type, placeholder, register, error }) {
  return (
    <div className={css.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(css.input, error && css.error)}
        {...register}
      />
      {error && (
        <svg className={css.errorIcon}>
          <use href="/sprite.svg#x-modal" />
        </svg>
      )}
      {error && <p className={css.errorText}>{error}</p>}
    </div>
  );
}
