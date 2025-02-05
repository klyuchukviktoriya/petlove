import Link from "next/link";
import Image from "next/image";
import css from "./FriendsItem.module.css";

export default function FriendsItem({ friend }) {
  const { title, imageUrl, email, phone, address, addressUrl, workDays } =
    friend;
  const today = new Date().getDay();
  const workDaysArray = Array.isArray(workDays) ? workDays : [];

  const isOpen24h = workDaysArray.every(
    day => day.isOpen && day.from === "00:00" && day.to === "23:59"
  );

  const todaySchedule =
    workDaysArray.length > 0
      ? workDaysArray[today === 0 ? 6 : today - 1]
      : null;

  return (
    <li className={css.friendsItem}>
      <p className={css.friendsSchedule}>
        {isOpen24h ? (
          <span>Day and night</span>
        ) : todaySchedule?.isOpen ? (
          <span>
            {todaySchedule.from} - {todaySchedule.to}
          </span>
        ) : (
          <span>Closed</span>
        )}
      </p>

      <div className={css.friendsFlex}>
        <div className={css.friendsLogoWrapper}>
          <Image src={imageUrl} alt={title} width={80} height={80} />
        </div>

        <div>
          <h3 className={css.friendsTitle}>{title}</h3>
          <div className={css.friendsContacts}>
            <p className={css.friendsContact}>
              <span>Email: </span>
              {email ? (
                <Link href={`mailto:${email}`} className={css.friendsLink}>
                  {email}
                </Link>
              ) : (
                "Not available"
              )}
            </p>

            <p className={css.friendsContact}>
              <span>Address: </span>
              {addressUrl ? (
                <Link
                  href={addressUrl}
                  className={css.friendsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </Link>
              ) : (
                "Not available"
              )}
            </p>
            <p className={css.friendsContact}>
              <span>Phone: </span>
              {phone ? (
                <Link href={`tel:${phone}`} className={css.friendsLink}>
                  {phone}
                </Link>
              ) : (
                "Not available"
              )}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
