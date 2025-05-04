import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import { createBrowserRouter, Outlet, RouterProvider, createRoutesFromElements, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body'
import Cart from './components/Cart';
import Error  from './components/Error';
import Restraunt from './components/Restraunt';
import Shimmer from './helper/Shimmer';
import { Provider } from 'react-redux';
import appStore from './util/appStore';


//implementing lazy loading...
const About = lazy(()=>import('./components/About'));


const App = () => {
    return (
        <Provider store={appStore}>
            <Header />
            <Outlet /> {/* This renders the current route's component */}
        </Provider>
    )
}

const AppRoute = createBrowserRouter([
    {
      path: "/",
      element: <App />, // Ensures Header is always displayed
      children: [
        { index: true, element: <Body /> }, // Default route ("/")
        { path: "cart", element: <Cart /> }, // "/cart" route
        { path: "restraunt/:id", element: <Restraunt /> },
        { path: "about", element: <Suspense fallback={<Shimmer/>}><About /></Suspense> },
      ],
      errorElement: <Error />, // Handles route errors
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoute}/>);

