import {Outlet,Link} from 'react-router-dom'
import {useState} from 'react'
import appleImg from '../images/apple-svgrepo-com.svg'
import orangeImg from '../images/orange-svgrepo-com.svg'
import bananaImg from '../images/bananas-svgrepo-com.svg'
import pearImg from "../images/pear-fruit-svgrepo-com.svg"
import pineappleImg from "../images/pineapple-svgrepo-com.svg"
import '../styles/store.css'

function Store (){
    let productList = [{name:"banana",price:0.50,image:bananaImg},
                       {name:"orange",price:1,image:orangeImg},
                       {name:"apple",price:2,image:appleImg},
                       {name:"pear",price:2,image:pearImg},
                       {name:"pineapple",price:5,image:pineappleImg},]
    const [products,] =useState(productList)
    const [cartList,setCartList] = useState([])

    const addToCart = ({name,price,quantity})=>{
        quantity = parseInt(quantity)
        if (quantity>0){
            setCartList([{name,price,quantity},...cartList])
        }
    }
    
    const updateCart=(updatedCart)=>{
        setCartList([...updatedCart])
    }
    const linkStyle = {
        margin: "0rem",
        textDecoration: "none",
        color: "rgb(0,0,0)",
      };
    return (
    <div>
        <nav className='navDiv'>
            
            <div><h1>Pete's Produce</h1></div>
            <ul>
            <li><div><Link to="" style={linkStyle}>about</Link></div></li>
            <li><div><Link to="shop" style={linkStyle}>shop</Link></div></li>
            <li><div className='cartDiv' >
            
                <Link to="cart" style={linkStyle}>cart:</Link>{cartList.length}
            </div></li>
            </ul>
        </nav>
        <Outlet context = {[products,cartList,addToCart,updateCart]}/>

    </div>)
}
export default Store;