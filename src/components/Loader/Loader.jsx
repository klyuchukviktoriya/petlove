import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <h1 className={css.loaderLogo}>
        Petl
        <svg className={css.logoIcon}>
          <use href="/sprite.svg#heart" />
        </svg>
        ve
      </h1>
    </div>
  );
}
