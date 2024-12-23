"use client";
import styles from "../header.module.sass";
import Image from "next/image";
const Info = () => {
  const renderSettings = (icon: string) => {
    return (
      <button key={icon}>
        <Image src={`/icons/${icon}.svg`} alt="icon" width={64} height={64} />
      </button>
    );
  };
  return (
    <section className={styles.info}>
      <div className={styles.userProfile}>
        <Image
          src={"/images/user-image.png"}
          alt="user image"
          width={58}
          height={58}
        />
        <div className={styles.details}>
          <h3>Steve Rogers</h3>
          <p>@steve_rogers</p>
        </div>
      </div>
      <div className={styles.settings}>
        {["settings", "lamp", "notification"].map((e) => renderSettings(e))}
      </div>
    </section>
  );
};

export default Info;
