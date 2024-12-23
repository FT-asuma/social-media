import Image from "next/image";
import { Container } from "../container";
import styles from "./header.module.sass";
import { FaSearch } from "react-icons/fa";
import Info from "./_components/Info";
const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerDivision}>
          <div className={styles.searchBar}>
            <div className={styles.imgContainer}>
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={400}
                height={400}
              />
            </div>
            <form action="#" className={styles.form}>
              <button type="submit">
                <Image
                  src={"/icons/search.svg"}
                  alt="search icon"
                  width={48}
                  height={48}
                />
              </button>
              <input type="text" placeholder="Search for friends here..." />
            </form>
          </div>
          <Info />
        </div>
      </Container>
    </header>
  );
};

export default Header;
