import  {useOutletContext} from 'react-router-dom'

function Cart (){

    const [products,cartList,addToCart] = useOutletContext()

    return (<div>
        Your Cart:
            <ul>
        {cartList.map((item,index)=>{return <li key={index}> 
            {`${item.name}s, ${item.quantity} at $${item.price}`}
        </li>})}
        </ul>
    </div>)
}
export default Cart;