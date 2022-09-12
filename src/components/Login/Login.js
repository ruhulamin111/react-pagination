import React from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogle = () => {
        signInWithGoogle()
    }

    return (
        <div className='w-1/6 mx-auto my-5'>
            <button onClick={handleGoogle} className='p-3 border-2 bg-green-400 w-full'>Continue with google</button>
        </div>
    );
};

export default Login;