import { createContext, useContext, useState } from "react";

type ITypeOfScreen = "splash" | "signin" | "home" | undefined;

interface IRenderScreenContextProps {
  currentSceren: ITypeOfScreen;
  setCurrentScreen(value: ITypeOfScreen): void;
}

const RenderScreenContext = createContext({} as IRenderScreenContextProps);

const RenderScreenProvider = ({ children }) => {
  const [currentSceren, setCurrentScreen] = useState<ITypeOfScreen>(undefined);

  return (
    <RenderScreenContext.Provider value={{ currentSceren, setCurrentScreen }}>
      {children}
    </RenderScreenContext.Provider>
  );
};

const useRenderScreen = () => {
  const context = useContext(RenderScreenContext);
  if (!context) {
    throw new Error("useRenderScreen can't use here");
  }
  return context;
};

export { RenderScreenContext, RenderScreenProvider, useRenderScreen };
