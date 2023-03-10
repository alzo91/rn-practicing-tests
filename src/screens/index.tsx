import React from "react";
import { useRenderScreen } from "../hooks/render-screen";
import { HomeScreen } from "./home";
import { SignIn } from "./signin";
import { SplashScreen } from "./splash";

export function Screens() {
  const { currentSceren } = useRenderScreen();
  if (!currentSceren || currentSceren === "splash") return <SplashScreen />;
  if (currentSceren === "signin") return <SignIn />;
  return <HomeScreen />;
}
