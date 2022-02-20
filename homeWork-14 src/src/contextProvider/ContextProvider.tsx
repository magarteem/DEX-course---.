import React, { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const Context = createContext({});

export const ContextProvider = ({ children, ...props }: Props) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(false);

  const login = () => {
    setAuth((prev) => !prev);
    navigate("/", { replace: true });
  };

  return (
    <Context.Provider value={{ auth, login }} {...props}>
      {children}
    </Context.Provider>
  );
};
