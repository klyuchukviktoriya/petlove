import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useHeaderContext } from "@/context/HeaderContext";
import css from "./UserBar.module.css";
import { selectUser } from "@/redux/auth/selectors";

export default function UserBar() {
  const { isHomePage } = useHeaderContext();
  const user = useSelector(selectUser);

  return (
    <Link
      className={clsx(css.user, isHomePage && css.homeUser)}
      href="/profile"
    >
      <div className={css.userIconWrapper}>
        {user?.avatar ? (
          <Image
            className={css.userAvatar}
            src={user.avatar}
            alt={user.name || "User"}
            width={40}
            height={40}
          />
        ) : (
          <svg className={css.userIcon}>
            <use href="/sprite.svg#user" />
          </svg>
        )}
      </div>
      <p className={css.userName}>{user?.name || "User"}</p>
    </Link>
  );
}
