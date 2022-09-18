import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Login from "../Login";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
});

describe("Login component tests", () => {
  it("should render login page with two input fields and a button", () => {
    const username = screen.getByTestId("input-field");
    const password = screen.getByTestId("password-field");
    const loginButton = screen.getByRole("button");

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should show username value on change", () => {
    const username = screen.getByTestId("input-field");
    fireEvent.change(username, { target: { value: "test" } });
    expect(username).toHaveValue("test");
  });

  it("should show password value on change", () => {
    const username = screen.getByTestId("password-field");
    fireEvent.change(username, { target: { value: "passwordtest" } });
    expect(username).toHaveValue("passwordtest");
  });

  it("should login", () => {
    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton);
  });

  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
afterEach(cleanup);
