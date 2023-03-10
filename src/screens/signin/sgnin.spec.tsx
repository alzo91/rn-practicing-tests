import { render } from "@testing-library/react-native";
import { SignIn } from "./index";

describe("[Screen/SignIn]", () => {
  it("", () => {
    const screen = render(<SignIn />);
    const input_email = screen.getByTestId("input-email");
    const input_nickname = screen.getByTestId("input-nickname");
    const button_signin = screen.getByTestId("button-signin");
    expect(input_email).toBeTruthy();
    expect(input_nickname).toBeTruthy();
    expect(button_signin).toBeTruthy();
  });
});
