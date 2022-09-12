import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [pageAmount, setPageAmount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)


    useEffect(() => {
        const dataLoad = async () => {
            const { data } = await axios.get(`http://localhost:5000/products?page=${page}&size=${size}`)
            const pageCount = Math.ceil(Number(data.count) / size);
            setPageAmount(pageCount)
            setProducts(data.result)
        }
        dataLoad()
    }, [page, size])



    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                            Product name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                            Image
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Order
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {product.name}
                            </th>
                            <td className="py-4 px-6">
                                {product.price}
                            </td>
                            <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                                <img className='w-40 h-30 object-cover' src={product.image} alt="" />
                            </td>
                            <td className="py-4 px-6">
                                <button>Buy now</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
            <div className='flex justify-end my-4'>
                {
                    [...Array(pageAmount).keys()].map((number, index) => <button key={index} onClick={() => setPage(number)} className='ml-3 border-2 px-3'>{number + 1}</button>)
                }
                <select onChange={(event) => setSize(event.target.value)}>
                    <option value="5" >5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>

                </select>
            </div>
        </div>

    );
};

export default ProductList;