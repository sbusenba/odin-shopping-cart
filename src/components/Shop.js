import  {useOutletContext} from 'react-router-dom'
import ProductView from './ProductView'
function Shop (){


    const [products,,addToCart,] = useOutletContext()

    
    return (<div>
        Welcome to my shop!
        <ul>
        {products.map((product,index)=>{return <li key={index}><ProductView 
                                                    product = {product} 
                                                    addToCart={addToCart}
                                                    />
                                                    </li>})}
        </ul>
    </div>)
}
export default Shop;