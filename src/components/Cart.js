import  {useOutletContext} from 'react-router-dom'

function Cart (){

    const [products,cartList,addToCart] = useOutletContext()
    let total = 0;
    return (<div>
        Your Cart:
            <ul>
        {cartList.map((item,index)=>{
            total += item.price*item.quantity;
            return <li key={index}> 
            {`${item.name}s, ${item.quantity} at $${item.price} = $${item.price*item.quantity}`}
        </li>})}
        </ul>
        <div>{`Total: $${total}`}</div>
    </div>)
}
export default Cart;