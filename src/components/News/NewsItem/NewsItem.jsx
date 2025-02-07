import Image from "next/image";
import Link from "next/link";
import css from "./NewsItem.module.css";

export default function NewsItem({ news }) {
  const { imgUrl, title, text, date, url } = news;

  return (
    <li className={css.newsLi}>
      <div className={css.newsLiImg}>
        <Image src={imgUrl} alt={title} fill />
      </div>
      <h3 className={css.newsLiTitle}>{title}</h3>
      <p className={css.newsLiText}>{text}</p>
      <div className={css.newsLiFooter}>
        <p className={css.newsLiDate}>
          {new Date(date).toLocaleDateString("en-GB")}
        </p>
        <Link
          className={css.newsLiLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Link>
      </div>
    </li>
  );
}
