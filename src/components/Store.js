import {Outlet} from 'react-router-dom'
import {useState} from 'react'
function Store (){
    const [products,setProducts] =useState( ['banana','orange','apple'])
    const [cartList,setCartList] = useState([])
    return (<div>
        <div>Here is the storeFront</div>
        <div>cart:{cartList.length}</div>
        
        <Outlet context = {[products,cartList]}/>
    </div>)
}
export default Store;