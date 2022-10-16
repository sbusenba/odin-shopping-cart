import  {useOutletContext} from 'react-router-dom'
import ProductCartView from './ProductCartView';
import {Link} from 'react-router-dom'

function Cart (){

    const [products,cartList,addToCart] = useOutletContext()
    let total = 0;
    return (<div>
        
        Your Cart:
        <Link to="/shop" >Back to Store</Link>
            <ul>
        {cartList.map((item,index)=>{
            total += item.price*item.quantity;
            return <li key={index}> 
            <ProductCartView product={item}/>
        </li>})}
        </ul>
        <div>{`Total: $${total}`}</div>
    </div>)
}
export default Cart;