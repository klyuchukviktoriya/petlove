import Title from "@/components/Title/Title";
import css from "./page.module.css";
import SearchField from "@/components/News/SearchField/SearchField";
import NewsList from "@/components/News/NewsList/NewsList";
import PaginationNews from "@/components/Pagination/PaginationNews/PaginationNews";

export default function News() {
  return (
    <div className={css.news}>
      <Title className={css.newsTitle}>News</Title>
      <SearchField />
      <NewsList />
      <PaginationNews />
    </div>
  );
}
