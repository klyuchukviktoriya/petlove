import { useHeaderContext } from "@/context/HeaderContext";
import Logo from "@/components/Header/Logo/Logo";
import Nav from "@/components/Header/Nav/Nav";
import css from "./DesktopHeader.module.css";
import { selectIsAuthenticated } from "@/redux/auth/selectors";
import { useSelector } from "react-redux";
import AuthNav from "@/components/Header/AuthNav/AuthNav";
import UserBar from "@/components/UserBar/UserBar";
import LogOutBtn from "@/components/LogOutBtn/LogOutBtn";
import clsx from "clsx";

export default function DesktopHeader() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { isHomePage } = useHeaderContext();
  return (
    <div className={clsx(css.header, isHomePage && css.homeHeader)}>
      <Logo />
      <Nav />
      <div className={css.authBar}>
        {isAuthenticated ? (
          <div className={css.userBar}>
            <div className={css.logoutDis}>
              <LogOutBtn />
            </div>
            <UserBar />
          </div>
        ) : (
          <AuthNav />
        )}
      </div>
    </div>
  );
}
