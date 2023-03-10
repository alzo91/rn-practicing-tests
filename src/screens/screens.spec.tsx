import React from "react";
import { render } from "@testing-library/react-native";
import { Screens } from "./";

// jest.mock("../../hooks/render-screen", () => ({
//   useRenderScreen: () => ({
//     currentSceren: "signin",
//   }),
// }));

describe("[Screen/index] Testing the navigation between screens", () => {
  it("should be able to render one", () => {
    const screen = render(<Screens />);
    expect(screen).toBeTruthy();
  });

  // it("should be able to render signin screen", () => {
  //   const screen = render(<Screens />);
  //   expect(screen).toBeTruthy();
  // });
});
