import { useContext, createContext, type ReactNode, useState } from "react";

export const HeaderContext = createContext({});

function HeaderProvider({ children }: { children: ReactNode }) {
  const [quantia, setQuantia] = useState(1); // quantia que a pessoa deposita
  const [quantiaUsada, setQuantiaUsada] = useState(); // quantia que a pessoa digita depois
  
  return (
    <HeaderContext.Provider value={{ quantia, setQuantia, quantiaUsada, setQuantiaUsada }}>
      {children}
    </HeaderContext.Provider>
  );
}

function useHeader() {
  const context = useContext(HeaderContext);
  return context;
}

export { useHeader, HeaderProvider };
