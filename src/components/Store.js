import {Outlet} from 'react-router-dom'
import {useState} from 'react'
import appleImg from '../images/apple-svgrepo-com.svg'
import orangeImg from '../images/orange-svgrepo-com.svg'
import bananaImg from '../images/bananas-svgrepo-com.svg'

function Store (){
    let productList = [{name:"banana",price:3,image:bananaImg},
                       {name:"orange",price:2,image:orangeImg},
                       {name:"apple",price:2,image:appleImg},]
    const addToCart = ({name,price,quantity})=>{
        console.log('adding item')
        setCartList([{name,price,quantity},...cartList])
    }

    const [products,setProducts] =useState(productList)
    const [cartList,setCartList] = useState([])
    return (<div>
        <div>Here is the storeFront</div>
        <div>cart:{cartList.length}</div>
        
        <Outlet context = {[products,cartList,addToCart]}/>
    </div>)
}
export default Store;