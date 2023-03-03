import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Test from "./components/test";
import Result from "./components/result";

const MbitRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
 
export default MbitRouter;