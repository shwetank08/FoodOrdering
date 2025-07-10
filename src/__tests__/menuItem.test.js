import { render, screen, act, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter, json } from "react-router-dom"
import Header from "../components/Header"
import Restraunt from "../components/Restraunt"
import Cart from "../components/Cart"
import DATA from "../Mock/menuItemData.json"
import "@testing-library/jest-dom"
import appStore from "../util/appStore"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(DATA);
        }
    })
})

// \ >|< /
//  \_|_/
//    | 
//    |
// __/ \__
it("should click on accordian and fetch the banner name", async()=>{
    await act(async()=>render(<BrowserRouter><Provider store={appStore}><Header/><Restraunt/><Cart/></Provider></BrowserRouter>));

    const headerBanner = screen.getAllByTestId("headerBanner");

    fireEvent.click(headerBanner[0]);

    const AddToCart = screen.getAllByRole("button", {name: "Add to cart"});

    fireEvent.click(AddToCart[0]);
    
    const cartBtn = screen.getByTestId("cartHeader");

    fireEvent.click(cartBtn);

    const removeButton = screen.getByTestId("removeBtnCart");

    expect(removeButton).toBeInTheDocument();

    const clearAllBtn = screen.getByTestId("clearCartBtn");

    expect(clearAllBtn).toBeInTheDocument();

    fireEvent.click(clearAllBtn);

    const emptyCartText = screen.getByText("You can go to the home page to view more restaurants.");

    expect(emptyCartText).toBeInTheDocument();
    
    
})

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.548726&lng=77.1804725&restaurantId=253709#