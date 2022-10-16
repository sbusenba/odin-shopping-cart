import {Outlet,Link} from 'react-router-dom'
import {useState} from 'react'
import appleImg from '../images/apple-svgrepo-com.svg'
import orangeImg from '../images/orange-svgrepo-com.svg'
import bananaImg from '../images/bananas-svgrepo-com.svg'

function Store (){
    let productList = [{name:"banana",price:3,image:bananaImg},
                       {name:"orange",price:2,image:orangeImg},
                       {name:"apple",price:2,image:appleImg},]
    const [products,setProducts] =useState(productList)
    const [cartList,setCartList] = useState([])

    const addToCart = ({name,price,quantity})=>{
        quantity = parseInt(quantity)
        if (quantity>0){
            setCartList([{name,price,quantity},...cartList])
        }
    }
    
    const updateCart=(updatedCart)=>{
        setCartList(updatedCart)
    }
    
    return (<div>
        <div><Link to="cart" >CART:</Link>{cartList.length}</div>
        <Outlet context = {[products,cartList,addToCart]}/>
    </div>)
}
export default Store;