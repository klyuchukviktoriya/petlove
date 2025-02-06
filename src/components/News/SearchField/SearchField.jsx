"use client";
import { setSearch } from "@/redux/news/slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchField() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearch(query));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
}
