import React from "react";
import styles from "../feed.module.sass";
import Image from "next/image";

const Post = () => {
  const renderMedias = (title: string, icon: string) => {
    return (
      <div key={title+icon} className={styles.media}>
        <button>
          <Image
            src={`/icons/${icon}.svg`}
            alt={title}
            width={40}
            height={40}
          />
        </button>
        <p>{title}</p>
      </div>
    );
  };
  return (
    <div className={styles.post}>
      <div className={styles.uploadMedia}>
        {[
          {
            title: "Write a post",
            icon: "edit",
          },
          {
            title: "Upload photo",
            icon: "gallery",
          },
          {
            title: "Upload video",
            icon: "video",
          },
        ].map((e) => renderMedias(e.title, e.icon))}
      </div>
      <span />
      <form className={styles.formPost} action="#">
        <textarea name="" id="" placeholder="✍️ Write something here..."/>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Post;
