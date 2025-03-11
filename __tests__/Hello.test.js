// __tests__/Hello.test.js
import React from "react";
import { render } from "@testing-library/react-native";
import Hello from "../app/(tabs)/hello";


test("renders correctly with a name", () => {
    const { getByText } = render(<Hello name="Expo" />);
    expect(getByText("Hello, Expo!")).toBeTruthy();
});
