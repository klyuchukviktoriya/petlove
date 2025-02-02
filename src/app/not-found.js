import Image from "next/image";
import css from "./style.module.css";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className={css.notFound}>
      <div className={css.notFoundBlock}>
        <div className={css.notFoundTitle}>
          <p>4</p>
          <div className={css.notFoundImg}>
            <Image src="/images/404Cat.jpg" alt="Cat" fill />
          </div>

          <p>4</p>
        </div>
        <p className={css.notFoundText}>Ooops! This page not found :(</p>
        <Link href="/home" className={css.notFoundBtn}>
          To home page
        </Link>
      </div>
    </main>
  );
}
