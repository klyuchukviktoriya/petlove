import Image from "next/image";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <h3 className={css.notFoundText}>No results found</h3>
      <Image
        alt="Not found"
        width={300}
        height={300}
        className={css.notFoundGif}
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzd3ZXozbmJuN3g4dDBudXVqdmppcjRvcTRob3BoZG0ydnRnazMxYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/g01ZnwAUvutuK8GIQn/giphy.gif"
      />
    </div>
  );
}
