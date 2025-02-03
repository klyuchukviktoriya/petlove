"use client";
import Image from "next/image";
import clsx from "clsx";
import css from "./PetBlock.module.css";

export default function PetBlock({
  src,
  name,
  birthday,
  description,
  className,
  showInfo = true,
}) {
  return (
    <div className={clsx(css.petBlock, className)}>
      {showInfo && (
        <div className={css.petBlockInfo}>
          <div className={css.petBlockAvatar}>
            <Image src={src} alt="Pet" width={32} height={32} />
          </div>

          <div className={css.petBlockInfoRight}>
            <div className={css.petBlockInfoTop}>
              <p className={css.petBlockName}>{name}</p>
              <p className={css.petBlockBirthday}>
                Birthday: <span>{birthday}</span>
              </p>
            </div>
            <p className={css.petBlockDescription}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
