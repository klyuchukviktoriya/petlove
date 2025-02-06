"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectCurrentPage,
  selectError,
  selectLoading,
  selectNews,
  selectSearchQuery,
} from "@/redux/news/selectors";
import { fetchNews } from "@/redux/news/operations";
import NewsItem from "../NewsItem/NewsItem";

export default function NewsList() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const page = useSelector(selectCurrentPage);
  const search = useSelector(selectSearchQuery);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNews({ page, search }));
  }, [dispatch, page, search]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {news.map(newsItem => (
        <NewsItem key={newsItem._id} news={newsItem} />
      ))}
    </ul>
  );
}
