import Image from "next/image";
import css from "./CongratsModal.module.css";
import BaseModal from "../BaseModal/BaseModal";
import Link from "next/link";

export default function CongratsModal({ isOpen, onCancel }) {
  return (
    <BaseModal isOpen={isOpen} onClose={onCancel}>
      <div className={css.congratsContent}>
        <div className={css.congratsImgWrapper}>
          <Image width={44} height={44} src="/images/smallCat.png" alt="Cat" />
        </div>
        <h3>Congrats</h3>
        <p>
          The first fluff in the favorites! May your friendship be the happiest
          and filled with fun.
        </p>
        <Link className={css.congratsBtn} href="/profile">
          Go to profile
        </Link>
      </div>
    </BaseModal>
  );
}
