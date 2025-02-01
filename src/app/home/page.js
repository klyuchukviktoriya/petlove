import css from "./page.module.css";
export default function Home() {
  return (
    <main className={css.home}>
      <section className={css.homeInfo}>
        <h1 className={css.homeTitle}>
          Take good <span> care</span> of your small pets
        </h1>
        <p>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </section>
      <div className={css.imageWrapper}></div>
    </main>
  );
}
