import styles from "./feed.module.sass";
import { Media, Post } from "./post";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <Post />
      <Media />
    </div>
  );
};

export default Feed;
