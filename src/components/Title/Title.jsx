import clsx from "clsx";
import css from "./Title.module.css";

export default function Title({ children, className }) {
  return <h2 className={clsx(css.title, className)}>{children}</h2>;
}
