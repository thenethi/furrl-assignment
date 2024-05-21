import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem";
import { Oval } from 'react-loader-spinner'; // Import the loader component
import './index.css';

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [productsCount, setProductsCount] = useState(0);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(true); 

    useEffect(() => {
        getProductList(page);
    }, []); 

    useEffect(() => {
        // Add scroll event listener
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !isFetching) {
                loadMoreProducts();
            }
        };
        window.addEventListener('scroll', handleScroll);

        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);

    useEffect(() => {
        if (page > 1) {
            getProductList(page);
        }
    }, [page]);

    const getProductList = async (page) => {
        const apiUrl = "https://api.furrl.in/api/v2/listing/getListingProducts";
        const input = {
            input: {
                entity: "vibe",
                filters: [],
                id: "#HomeHunts",
                page: page,
                pageSize: 10,
            },
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        };
        setIsFetching(true); 
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        setProductList(prevProductList => [...prevProductList, ...data.data.getListingProducts.products]);
        setProductsCount(data.data.getListingProducts.totalPages);
        setIsFetching(false); 
    };

    const loadMoreProducts = () => {
        if (page < productsCount) {
            setPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div>
            <h1 className="products-head">{productsCount} products</h1>
            
            <ul className="product-list-container" type="none">
                {productList.map(each => (
                    <ProductItem key={each.id} productItem={each} />
                ))}
            </ul>
            {isFetching && (
                <div className="loader">
                    <Oval
                        height={40}
                        width={40}
                        color="#007bff"
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#007bff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            )}
        </div>
    );
};

export default ProductList;