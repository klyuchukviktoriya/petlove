"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, setPage } from "@/redux/news/slice";
import Title from "@/components/Title/Title";
import SearchField from "@/components/Search/SearchField/SearchField";
import NewsList from "@/components/News/NewsList/NewsList";
import PaginationNews from "@/components/Pagination/PaginationNews/PaginationNews";
import css from "./page.module.css";

export default function News() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearch(query));
    dispatch(setPage(1));
  };

  const handleClear = () => {
    setQuery("");
    dispatch(setSearch(""));
    dispatch(setPage(1));
  };

  return (
    <main className={css.news}>
      <div className={css.newsHeader}>
        <Title>News</Title>
        <SearchField
          query={query}
          setQuery={setQuery}
          placeholder="Search"
          handleSearch={handleSearch}
          handleClear={handleClear}
        />
      </div>
      <NewsList />
      <PaginationNews />
    </main>
  );
}
