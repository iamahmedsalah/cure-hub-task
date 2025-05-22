import React from "react";
import Sidebar from "./ui/Sidebar";
import {BrowserRouter }from "react-router";

const Layout = () => {

    return (
        <div className="flex">
            <BrowserRouter>
            <Sidebar />
            </BrowserRouter>
        </div>
    );
};

export default Layout;