import React from "react";
import { render } from "@testing-library/react-native";
import { SplashScreen } from "./";

jest.useFakeTimers();
//import { useRenderScreen } from "";
jest.mock("../../hooks/render-screen", () => ({
  useRenderScreen: () => ({
    setCurrentScreen: (screenName) => {
      if (screenName === "signin") throw new Error("Sceen is not available");
    },
  }),
}));

describe("[Screen/Splash]", () => {
  it("should be able to check elements and render them.", () => {
    const screen = render(<SplashScreen />);
    const labelTitle = screen.getByTestId("screen-title");
    const loading = screen.getByTestId("loading");
    expect(labelTitle.children[0]).toBe("Splash Screen");
    expect(loading).toBeTruthy();
  });
});
