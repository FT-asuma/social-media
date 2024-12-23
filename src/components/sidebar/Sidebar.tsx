import React from "react";
import styles from "./sidebar.module.sass";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
const Sidebar = () => {
  const listRenderer = (title: string, icon: string) => {
    return (
      <li key={title}>
        <Link href={`/${icon}`}>
          <button>
            <Image
              src={`/icons/${icon}.svg`}
              alt={title}
              width={32}
              height={32}
            />
          </button>
          <p>{title}</p>
        </Link>
      </li>
    );
  };
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarCont}>
        <div className={styles.userProfile}>
          <Image
            src={"/images/user-image.png"}
            alt="user image"
            width={100}
            height={100}
          />
          <h2>Steve Rogers</h2>
        </div>
        <div className={styles.options}>
          <h2>Explore panel</h2>
          <ul className={styles.links}>
            {[
              {
                title: "Profile",
                icon: "profile",
              },
              {
                title: "Find friends",
                icon: "friends",
              },
              {
                title: "User analytics",
                icon: "analytics",
              },
            ].map((e) => listRenderer(e.title, e.icon))}
          </ul>
        </div>
        <div className={styles.options}>
          <h2>Settings</h2>
          <ul>
            {[
              {
                title: "Settings",
                icon: "settings",
              },
              {
                title: "Security data",
                icon: "security",
              },
            ].map((e) => listRenderer(e.title, e.icon))}
            <li className={styles.logOut}>
              <Link href={`/#`}>
                <button>
                  <Image
                    src={"/icons/log-out.svg"}
                    alt="log out icon"
                    width={32}
                    height={32}
                  />
                </button>
                <p>Log out</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
