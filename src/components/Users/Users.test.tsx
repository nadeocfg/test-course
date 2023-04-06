import React from "react";
import { render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";

jest.mock("axios");

describe("Tests for <Users /> component", () => {
  let response = {};

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  test("Render elements", async () => {
    // @ts-ignore
    axios.get.mockReturnValue(response);

    render(<Users />);

    const users = await screen.findAllByTestId("user-item");

    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);

    screen.debug();
  });
});
