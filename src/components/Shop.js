import  {useOutletContext} from 'react-router-dom'
import ProductView from './ProductView'
import '../styles/shop.css'
function Shop (){


    const [products,,addToCart,] = useOutletContext()

    
    return (<div className='shopDiv'>
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