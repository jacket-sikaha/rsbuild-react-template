import { createContext, useContext } from "react";

export const DpCtx = createContext({
  temp: {},
  setTemp: (v: any) => {},
});

export const useDpStore = () => useContext(DpCtx);
