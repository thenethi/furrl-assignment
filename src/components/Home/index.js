import Navbar from '../Navbar'
import ProductList from '../ProductList'
import './index.css'

const Home=()=>(
    <>
    <Navbar/>
    <div className='hero-section'>
        <h1 className='hero-heading'>#Night Flea</h1>
    </div>
    <ProductList/>
    </>
)

export default Home