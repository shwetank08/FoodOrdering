import { render, screen } from "@testing-library/react"
import ItemCard from "../components/ItemCard"
import MOCK_DATA from "../Mock/resMockData.json";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../util/appStore";


it("should test individual card component with data",()=>{
    render(<Provider store={appStore}><ItemCard data={MOCK_DATA}/></Provider>)

    const restrauntName = screen.getByRole("button", {name: "Add to cart"});
    // const restrauntName = screen.getByRole("button");

    expect(restrauntName).toBeInTheDocument();
})