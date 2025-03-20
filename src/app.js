import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { createBrowserRouter, Outlet, RouterProvider, createRoutesFromElements, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body'
import Cart from './components/Cart';
import Error  from './components/Error';


const App = () => {
    return (
        <div>
            <Header />
            <Outlet /> {/* This renders the current route's component */}
        </div>
    )
}

const AppRoute = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Error />}>
            <Route index element={<Body />} />  {/* Default route ("/") */}
            <Route path="cart" element={<Cart />} />  {/* "/cart" route */}
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoute}/>);

