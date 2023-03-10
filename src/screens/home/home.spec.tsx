import React from "react";
import { render } from "@testing-library/react-native";
import { HomeScreen } from "./";

jest.useFakeTimers();

describe("[Screen/Home]", () => {
  it("should be able to check elements and render them.", () => {
    const screen = render(<HomeScreen />);
    const labelTitle = screen.getByTestId("screen-title");
    expect(labelTitle).toBeTruthy();
  });
});
