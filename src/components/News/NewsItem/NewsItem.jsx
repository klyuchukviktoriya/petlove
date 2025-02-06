import Image from "next/image";
import Link from "next/link";

export default function NewsItem({ news }) {
  const { imgUrl, title, text, date, url } = news;

  return (
    <li>
      <Image src={imgUrl} alt={title} width={300} height={200} />
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </Link>
    </li>
  );
}
