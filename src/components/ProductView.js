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
    let raiseQty = ()=>{
        setQuantity(parseInt(quantity) + 1)
    }
    let lowerQty = ()=>{
        if (quantity>0)
        setQuantity(parseInt(quantity -1));
    }

    return (<div className='productCard'>
        <div className='productDesc'>
            <img src={props.product.image} alt={props.product.name}></img>
            <div>{props.product.name}</div>
        </div>
        <div className='price'>${props.product.price}</div>
        <label htmlFor='qtyInput'> Quantity: 
          <button onClick={lowerQty}>-</button> 
            <input type='text' onChange={qtyChange} value={quantity}/>
            <button onClick={raiseQty}>+</button>
        </label>
        <button onClick={click}>Add to Cart</button>
    </div>)
}
export default ProductView;