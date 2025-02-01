import { useHeaderContext } from "@/context/HeaderContext";
import css from "./Logo.module.css";
import clsx from "clsx";
import Link from "next/link";

export default function Logo() {
  const { isHomePage } = useHeaderContext();

  return (
    <Link className={clsx(css.logo, isHomePage && css.homeLogo)} href="/home">
      Petl
      <svg className={css.logoIcon}>
        <use href="/sprite.svg#heart" />
      </svg>
      ve
    </Link>
  );
}
