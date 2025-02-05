import Title from "@/components/Title/Title";
import css from "./page.module.css";

export default function Notices() {
  return (
    <div className={css.notices}>
      <Title className={css.noticesTitle}>Find your favorite pet</Title>
    </div>
  );
}
