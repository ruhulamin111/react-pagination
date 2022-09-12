import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-green-300 '>
            <nav className='w-5/6 mx-auto h-10 flex justify-center items-center'>
                <Link className='pr-6  font-medium' to='/home'>Home</Link>
                <Link className='pr-6  font-medium' to='/addproduct'>Add product</Link>
                <Link className='pr-6  font-medium' to='/productlist'>Product list</Link>
                <Link className='pr-6  font-medium' to='/login'>Log in</Link>
            </nav>
        </div>
    );
};

export default Header;