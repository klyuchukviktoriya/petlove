import Title from "@/components/Title/Title";
import css from "./page.module.css";

export default function News() {
  return (
    <div className={css.news}>
      <Title className={css.newsTitle}>News</Title>
    </div>
  );
}
