import Link from "next/link";
import css from "./AuthNav.module.css";
import clsx from "clsx";
export default function AuthNav({ onLinkClick }) {
  return (
    <nav className={css.auth}>
      <Link
        onClick={onLinkClick}
        className={clsx(css.authLink, css.login)}
        href="/login"
      >
        Login
      </Link>
      <Link
        onClick={onLinkClick}
        className={clsx(css.authLink, css.register)}
        href="/register"
      >
        Registration
      </Link>
    </nav>
  );
}
