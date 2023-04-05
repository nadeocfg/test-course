import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Tests for <App /> component", () => {
  test("Render elements", () => {
    render(<App />);
    const helloWorld = screen.getByText(/hello world/i);
    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    expect(helloWorld).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("test Async data", async () => {
    render(<App />);

    screen.debug();

    const asyncEl = await screen.findByText(/async data/i);

    screen.debug();

    expect(asyncEl).toBeInTheDocument();
  });

  test("test onClick event", () => {
    render(<App />);

    const btn = screen.getByTestId("visible-btn");

    expect(screen.queryByTestId("visible-el")).toBeNull();

    fireEvent.click(btn);

    expect(screen.queryByTestId("visible-el")).toBeInTheDocument();

    fireEvent.click(btn);

    expect(screen.queryByTestId("visible-el")).toBeNull();

    fireEvent.click(btn);

    expect(screen.queryByTestId("visible-el")).toBeInTheDocument();
  });

  test("test Input event", () => {
    render(<App />);

    const input = screen.getByRole("textbox");

    expect(screen.getByTestId("header")).toContainHTML("");

    fireEvent.input(input, {
      target: {
        value: "asd bkb",
      },
    });

    expect(screen.getByTestId("header")).toContainHTML("asd bkb");
  });
});
