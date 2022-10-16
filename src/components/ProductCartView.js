import {useState} from 'react'
function ProductCartView (props){
    let [quantity,setQuantity] = useState(props.product.quantity)
    
    let raiseQty = ()=>{
        setQuantity(parseInt(quantity) + 1)
    }
    let lowerQty = ()=>{
        if (quantity>0)
        setQuantity(parseInt(quantity -1));
    }
    
    return (<div>
        <div className='productDesc'>
            <div>{props.product.name}</div>
        </div>
        <div>${props.product.price}</div>
        <label htmlFor='qtyInput'> Quantity: 
          <button onClick={lowerQty}>-</button> 
            <input type='text' onChange={()=>{}} value={quantity}/>
            <button onClick={raiseQty}>+</button>
        </label>
        <button onClick={()=>{}}>Update Quantity</button>
    </div>)
}
export default ProductCartView;