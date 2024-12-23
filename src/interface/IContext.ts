import { IProducts } from "./IProducts";

export interface IAppContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  isUpdated: string;
  setIsUpdated: React.Dispatch<React.SetStateAction<string>>;
  notification: string;
  setNotification: React.Dispatch<React.SetStateAction<string>>;
  respond: IProducts[] | undefined;
  isLoading: boolean;
  toggleTheme: () => void;
}
