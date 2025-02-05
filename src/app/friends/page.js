import Title from "@/components/Title/Title";
import css from "./page.module.css";
import FriendsList from "@/components/Friends/FriendsList/FriendsList";

export default function Friends() {
  return (
    <main className={css.friends}>
      <Title className={css.friendsTitle}>Our friends</Title>
      <FriendsList />
    </main>
  );
}
