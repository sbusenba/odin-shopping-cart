import  {useOutletContext} from 'react-router-dom'
import ProductView from './ProductView'
function Shop (){


    const [products,cartList] = useOutletContext()
    console.table(products)

    
    return (<div>
        here is the shop!
        <ul>
        {products.map((product)=>{return <li><ProductView product = {product}/></li>})}
        </ul>
    </div>)
}
export default Shop;