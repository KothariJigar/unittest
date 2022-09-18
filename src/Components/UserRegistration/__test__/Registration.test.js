import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Registration from "../Registration";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
});

describe("Registration component tests", () => {
  it("should render login page with two input fields and a button", () => {
    const username = screen.getByTestId("username");
    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");
    const city = screen.getByTestId("city");
    const age = screen.getByTestId("age");
    const registerButton = screen.getByRole("button");

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it("should show username value on change", () => {
    const username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "test" } });
    expect(username).toHaveValue("test");
  });

  it("should show email value on change", () => {
    const email = screen.getByTestId("email");
    fireEvent.change(email, { target: { value: "email" } });
    expect(email).toHaveValue("email");
  });

  it("should show password value on change", () => {
    const password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "passwordtest" } });
    expect(password).toHaveValue("passwordtest");
  });

  it("should show city value on change", () => {
    const city = screen.getByTestId("city");
    fireEvent.change(city, { target: { value: "city" } });
    expect(city).toHaveValue("city");
  });

  it("should show age value on change", () => {
    const age = screen.getByTestId("age");
    fireEvent.change(age, { target: { value: "age" } });
    expect(age).toHaveValue("age");
  });

  it("should handle register click", () => {
    const registerButton = screen.getByRole("button");
    fireEvent.click(registerButton);
    const error = screen.getByTestId("error");
    expect(error).toBeInTheDocument();

    const username = screen.getByTestId("username");
    fireEvent.change(username, { target: { value: "test" } });
    fireEvent.click(registerButton);
    expect(error).toBeInTheDocument();

    const email = screen.getByTestId("email");
    fireEvent.change(email, { target: { value: "email@test.com" } });
    fireEvent.click(registerButton);
    expect(error).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "p" },
    });
    fireEvent.click(registerButton);
    expect(error).toBeInTheDocument();

    const password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "passwordtest" } });
    fireEvent.click(registerButton);
    expect(error).toBeInTheDocument();

    const city = screen.getByTestId("city");
    fireEvent.change(city, { target: { value: "city" } });
    fireEvent.click(registerButton);
    expect(error).toBeInTheDocument();

    const age = screen.getByTestId("age");
    fireEvent.change(age, { target: { value: "age" } });
    fireEvent.click(registerButton);
    const errorRemoved = screen.queryByTestId("error");
    expect(errorRemoved).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
afterEach(cleanup);
