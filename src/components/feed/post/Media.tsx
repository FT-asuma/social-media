import React from "react";
import styles from "../feed.module.sass";
import Image from "next/image";
import Link from "next/link";
const Media = () => {
  return (
    <div className={styles.mediaFeed}>
      <Image
        src={"/images/user-image.png"}
        alt="user image"
        width={140}
        height={140}
      />
      <div className={styles.user}>
        <div className={styles.details}>
          <div className={styles.top}>
            <h2>Tony Stark</h2>
            <Link href={"/users/@tony_stark_3000"}>@tony_stark_3000</Link>
          </div>
          <div className={styles.bottom}>
            <h3>
              Cognitive Person | Enthusiastic scientist | Worked on 300.....
            </h3>
          </div>
        </div>
        <div className={styles.portDetails}>
          <p>
            Looking for an amazing scientist who knows how to build a suit that
            can fly high in the sky without any problem.
          </p>
          <p>
            Exploring the amazing nature with my loved daughter and wife. These
            kind of visuals can soothen your mind, no matter what is your
            problem and it makes you to forget all your pains.
          </p>
          <Image
            src={"/images/postsample.png"}
            alt="post image"
            width={645}
            height={265}
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
