import { AppContext } from "next/app";
import React, { ReactNode, useContext, useState } from "react";

type moduleType = {
  selectedModule: string;
  setSelectedModule: (module: string) => void;
};

const moduleTypeDefaultValues: moduleType = {
  selectedModule: "Content_module",
  setSelectedModule: (module: string) => {},
};

const ModuleContext = React.createContext<moduleType>(moduleTypeDefaultValues);

export const useModule = () => useContext(ModuleContext);

type Props = {
  children: ReactNode;
};

export function ModuleProvider({ children }: Props) {
  const [selectedModule, setSelected] = useState<string>("Content_module");

  const setSelectedModule = (module: string) => {
    setSelected(module);
  };

  const value = {
    selectedModule,
    setSelectedModule,
  };

  return (
    <>
      <ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
    </>
  );
}
