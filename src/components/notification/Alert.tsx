"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import styles from "./errorAlert.module.sass";
import { useAppContext } from "@/context/AppProvider";

const Alert = ({ message }: { message: string }) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(100);
  const {setNotification} = useAppContext()
  useEffect(() => {
    const duration = 5000;
    const interval = 50;

    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.max(0, prev - 100 / (duration / interval)));
    }, interval);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className={styles.errorAlert}
      style={
        message.toLocaleLowerCase().includes("error")
          ? { backgroundColor: "var(--error)" }
          : message.toLocaleLowerCase().includes("warning")
          ? { backgroundColor: "var(--warning)" }
          : { backgroundColor: "var(--success)" }
      }
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: "spring", stiffness: 150, damping: 25 }}
    >
      <div className={styles.iconContainer}>
        <IoMdClose
          className={styles.closeIcon}
          onClick={() => {
            setNotification("")
            setShow(false)
          }}
        />
      </div>
      <div className={styles.message}>{message}</div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressLine}
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default Alert;
