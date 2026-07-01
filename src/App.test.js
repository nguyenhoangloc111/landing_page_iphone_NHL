import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders the landing page and toggles dark mode", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /iPhone 17 Pro Max\./i }),
  ).toBeInTheDocument();

  const toggleButton = screen.getByRole("button", {
    name: /switch to dark mode/i,
  });
  await userEvent.click(toggleButton);

  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});
