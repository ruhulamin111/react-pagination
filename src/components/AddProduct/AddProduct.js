import axios from 'axios';
import React from 'react';

const AddProduct = () => {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const product = {
            name: event.target.name.value,
            price: event.target.price.value,
            image: event.target.image.value,
        }
        console.log(product);
        const { data } = await axios.post('http://localhost:5000/products', product)

        event.target.reset()
    }

    return (
        <div className='w-2/6 mx-auto'>
            <h2 className='my-5 font-bold'>Add Product</h2>
            <form onSubmit={handleSubmit} className='border-2 bg-green-200 p-16 my-5'>
                <input className='w-full block border-2 my-5 p-2' type="text" name="name" id="name" placeholder='name' required />
                <input className='w-full block border-2 my-5 p-2' type="number" name="price" id="price" placeholder='price' required />
                <input className='w-full block border-2 my-5 p-2' type="url" name="image" id="image" placeholder='image' />
                <input className='w-full block border-2 p-2 bg-green-400' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;