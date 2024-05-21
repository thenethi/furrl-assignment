import './index.css'
// import { IoBookmarkOutline } from "react-icons/io5";
// import { SlHandbag } from "react-icons/sl";



const Navbar=()=>(
    <nav className='nav-container'>
        <h1 className='nav-heading'>#Vibe Page</h1>
        <div className='nav-icons-container'>
            <a href="https://furrl.in/wishlist" className='nav-link'>
                <img src="https://furrl.in/_next/static/media/Whislist.2ac94d87.svg" alt="wishlist"/>
            </a>
            <a href="https://furrl.in/cart" className='nav-link'>
                <img src="https://furrl.in/_next/static/media/Bag.b94fa005.svg" alt="cart"/>
            </a>
        </div>
    </nav>
)

export default Navbar