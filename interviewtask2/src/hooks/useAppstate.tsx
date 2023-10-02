import { useContext } from "react";
import { DataValueContext } from "context/AppContext";

const useAppContext = () => {
  return useContext(DataValueContext);
};

export default useAppContext;
