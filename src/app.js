import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { createBrowserRouter, Outlet, RouterProvider, createRoutesFromElements, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body'
import Cart from './components/Cart';
import Error  from './components/Error';
import Restraunt from './components/Restraunt';


const App = () => {
    return (
        <div>
            <Header />
            <Outlet /> {/* This renders the current route's component */}
        </div>
    )
}

const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <App />, // Ensures Header is always displayed
      children: [
        { index: true, element: <Body /> }, // Default route ("/")
        { path: "/cart", element: <Cart /> }, // "/cart" route
        { path: "/restraunt/:id", element: <Restraunt /> },
      ],
      errorElement: <Error />, // Handles route errors
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoute}/>);

