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
            console.log(data);
            setProducts(data)
        }
        dataLoad()
    }, [products])




    return (

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                            Product name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                            Image
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Order
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index} class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {product.name}
                            </th>
                            <td class="py-4 px-6">
                                {product.price}
                            </td>
                            <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                                <img className='w-40 h-30 object-cover' src={product.image} alt="" />
                            </td>
                            <td class="py-4 px-6">
                                <button>Buy now</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>

    );
};

export default ProductList;