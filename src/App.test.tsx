import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout/layout";

test("renders Layout component", () => {
  render(
    <Router>
      <Layout />
    </Router>,
  );
  const PlansTitle = screen.getByText(/School system/i);
  expect(PlansTitle).toBeInTheDocument();
});
