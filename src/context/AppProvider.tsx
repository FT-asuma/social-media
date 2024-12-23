"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import styles from "@/app/page.module.sass";
import { Loading, Alert } from "@/components";

import { IAppContext, IProducts } from "@/interface";
import { getFakeStore } from "@/hooks";

const defaultState: IAppContext = {
  theme: "light",
  setTheme: () => {},
  isUpdated: "Tashkent",
  setIsUpdated: () => {},
  notification: "",
  setNotification: () => {},
  respond: undefined,
  isLoading: true,
  toggleTheme: () => {},
};

const AppContext = createContext(defaultState);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");
  const [isUpdated, setIsUpdated] = useState<string>("");
  const [notification, setNotification] = useState<string>("");
  const [respond, setRespond] = useState<IProducts[] | undefined>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isThemeLoaded, setThemeLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
      const fetchWeather = async () => {
        setLoading(true);
        setNotification("");
        try {
          const data = await getFakeStore({ setNotification });
          if (data) {
            setRespond(data);
          }
        } catch (err: any) {
          setNotification(`Cannot get the data of products: ${err.message}`);
        } finally {
          setLoading(false);
        }
      };
      fetchWeather();
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!isThemeLoaded || isLoading)
    return (
      <main className={styles.loading}>
        <Loading />
      </main>
    );

  return (
    <AppContext.Provider
      value={{
        setTheme,
        theme,
        isUpdated ,
        setIsUpdated,
        respond: respond!,
        isLoading,
        setNotification,
        notification,
        toggleTheme,
      }}
    >
      <main className={styles.page}>
        {notification && <Alert message={notification} />}
        {children}
      </main>
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
