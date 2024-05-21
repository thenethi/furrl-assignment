import './index.css'

const ProductItem = (props) => {
    const { productItem } = props
    const { id, MRP, brand, discountPercent, images, price, title } = productItem

    const handleShare = async () => {
        const shareData = {
            title: title,
            text: `Check out this product: ${title}`,
            url: `https://web.furrl.in/productDetail?id=${id}&ref=vibeResults_HomeHunts`
        }

        if (navigator.share) {
            try {
                await navigator.share(shareData)
                console.log('Product shared successfully')
            } catch (error) {
                console.error('Error sharing the product:', error)
            }
        } else {
            console.log('Share not supported on this browser')
            // You can implement a fallback share dialog here
        }
    }

    return (
        <li className='product-item-container'>
            <a href={`https://web.furrl.in/productDetail?id=${id}&ref=vibeResults_HomeHunts`} className='product-link'>
                <div className='image-container'>
                    <img src={images[0].src} alt="product-item" className='product-image' />
                    <svg className="share-icon" onClick={handleShare} width="34" height="34" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
                        <g filter="url(#filter0_d_6238_38939)">
                            <rect x="4" y="4.82983" width="36" height="36" rx="18" fill="#4B5563"></rect>
                            <path d="M17.3895 19.8139H16.4565C14.4215 19.8139 12.7715 21.4639 12.7715 23.4989V28.3739C12.7715 30.4079 14.4215 32.0579 16.4565 32.0579H27.5865C29.6215 32.0579 31.2715 30.4079 31.2715 28.3739V23.4889C31.2715 21.4599 29.6265 19.8139 27.5975 19.8139H26.6545" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M22.0215 13.0204V25.0614" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M19.1064 15.9486L22.0214 13.0206L24.9374 15.9486" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                        <defs>
                            <filter id="filter0_d_6238_38939" x="0" y="0.829834" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset></feOffset>
                                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6238_38939"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6238_38939" result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </a>
            <p className='brand-name'>{brand[0].name}</p>
            <h1 className='title-name'>{title}</h1>
            <div className='pricing-container'>
                <p className='price-value'>Rs. {price.value}</p>
                <p className='mrp-value'>Rs. {MRP.value}</p>
                <p className='discount-value'>{discountPercent}%</p>
            </div>
        </li>
    )
}

export default ProductItem
