import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Stock from "../Pages/Stock/Stock";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/stock" element={<Stock/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;