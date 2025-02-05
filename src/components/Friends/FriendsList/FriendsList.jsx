"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFriends } from "@/redux/friends/selectors";
import { fetchFriends } from "@/redux/friends/operations";
import FriendsItem from "../FriendsItem/FriendsItem";
import css from "./FriendsList.module.css";

export default function FriendsList() {
  const dispatch = useDispatch();
  const { friends, loading, error } = useSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <FriendsItem key={friend._id} friend={friend} />
      ))}
    </ul>
  );
}
