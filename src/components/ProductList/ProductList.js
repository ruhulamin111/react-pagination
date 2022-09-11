import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const dataLoad = async () => {
            const { data } = await axios.get('http://localhost:5000/products')
            // if (!data?.success) {
            //     return toast.error(data.error)
            // }
            setProducts(data)
        }
        dataLoad()
    }, [products])




    return (
        <div>
            <h2>product list </h2>
            <h2>{products.length}</h2>


        </div>
    );
};

export default ProductList;