import { useState } from 'react'
import '../styles/productView.css'
function ProductView (props){
    let [quantity,setQuantity]= useState(0)

    let click = ()=>{
        let itemName = props.product.name;
        let itemPrice = props.product.price
        props.addToCart({name:itemName,price:itemPrice,quantity})
        setQuantity(0)
    }
    let qtyChange = (e)=>{
        setQuantity(e.target.value)
    }

    return (<div>
        <img src={props.product.image}></img>
        <div>{props.product.name}</div>
        <div>${props.product.price}</div>
        <label htmlFor='qtyInput'> Quantity:
            <input type='text' onChange={qtyChange}/>
        </label>
        <button onClick={click}>Add to Cart</button>
    </div>)
}
export default ProductView;