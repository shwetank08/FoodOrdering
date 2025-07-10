import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../util/appStore";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";


it("should render header with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartElement = screen.getByText("Cart");
  expect(cartElement).toBeInTheDocument();
});
it("should render header with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartElement = screen.getByText("Cart");
  expect(cartElement).toBeInTheDocument();
});
it("should render header with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <Cart/>
      </Provider>
    </BrowserRouter>
  );

  const aboutLink = screen.getByText("Cart");
  fireEvent.click(aboutLink);

  const gitHubText = screen.getByText("🛒 Your Cart");
  expect(gitHubTex).toBeInTheDocument();
});
