import { HashRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart"
import Store from "./components/Store";

const RouteSwitch = () =>{
    return(
        <HashRouter basename="/">
            <Routes>
                <Route Path= "/" element ={<Store/>}>
                    <Route path= "/" element = {<App/>}/>
                    <Route path="/shop" element = {<Shop/>}/>
                    <Route path="/cart" element = {<Cart/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default RouteSwitch;