import { render, screen, act, fireEvent } from "@testing-library/react"
import Body from "../components/Body";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";
import DATA from "../Mock/bodyData.json";

//dummy fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(DATA);
        }
    })
})

it("should find search box in component", async()=>{
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));
    const searchBox = screen.getByRole("button", {name: "Search"});
    
    expect(searchBox).toBeInTheDocument();
    
    const inputBox = screen.getByTestId("searchInput");

    fireEvent.change(inputBox, {target: {value: "Burger"}});

    fireEvent.click(searchBox);

    //assert - screen should load cards with name containing burger
    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1)

})