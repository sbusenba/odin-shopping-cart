import {useState} from 'react'
import '../styles/productCartView.css'
function ProductCartView (props){
    let [quantity,setQuantity] = useState(props.product.quantity)
    
    let raiseQty = ()=>{
        setQuantity(parseInt(quantity) + 1)
    }
    let lowerQty = ()=>{
        if (quantity>0)
        setQuantity(parseInt(quantity -1));
    }
    let updateQuantity = ()=>{
        let editCart = props.cart;
        editCart.forEach((cartItem,index)=>{
            if (cartItem.name === props.product.name) {
                cartItem.quantity = quantity;
            }
        })
        props.updateCart(editCart)
    }
    
    return (<div>
        <div className='productCartDesc'>
            <div>{props.product.name}</div>
        </div>
        <div>${props.product.price}</div>
        <label htmlFor='qtyInput'> Quantity: 
          <button onClick={lowerQty}>-</button> 
            <input type='text' onChange={()=>{}} value={quantity}/>
            <button onClick={raiseQty}>+</button>
        </label>
        <button onClick={updateQuantity}>Update Quantity</button>
    </div>)
}
export default ProductCartView;