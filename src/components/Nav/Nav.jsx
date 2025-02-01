import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Nav.module.css";
import { useHeaderContext } from "@/context/HeaderContext";

export default function Nav({ onLinkClick }) {
  const { isHomePage } = useHeaderContext();
  const pathname = usePathname();

  return (
    <nav className={clsx(css.nav, isHomePage && css.homeNav)}>
      <Link
        onClick={onLinkClick}
        href="/news"
        className={clsx(css.link, pathname === "/news" && css.active)}
      >
        News
      </Link>
      <Link
        onClick={onLinkClick}
        href="/notices"
        className={clsx(css.link, pathname === "/notices" && css.active)}
      >
        Find pet
      </Link>
      <Link
        onClick={onLinkClick}
        href="/friends"
        className={clsx(css.link, pathname === "/friends" && css.active)}
      >
        Our friends
      </Link>
    </nav>
  );
}
