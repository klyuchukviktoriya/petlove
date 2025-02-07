import css from "./SearchField.module.css";

export default function SearchField({
  query,
  setQuery,
  placeholder,
  handleSearch,
  handleClear,
}) {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={css.searchField}>
      <input
        className={css.searchFieldInput}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        type="submit"
        onClick={handleSearch}
        className={css.searchFieldBtn}
      >
        <svg className={css.searchFieldIcon}>
          <use href="/sprite.svg#search" />
        </svg>
      </button>
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className={css.searchFieldClearBtn}
        >
          <svg className={css.searchFieldIcon}>
            <use href="/sprite.svg#x-modal" />
          </svg>
        </button>
      )}
    </div>
  );
}
