import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart"
import Store from "./components/Store";

const RouteSwitch = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element = {<App/>}/>
                <Route Path= "/" element ={<Store/>}>
                    <Route path="/shop" element = {<Shop/>}/>
                    <Route path="/cart" element = {<Cart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;