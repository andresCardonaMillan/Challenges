import * as React from 'react';
import {signOut} from 'firebase/auth'
import {auth} from '../firebase/config'

export default function Home ({
    user,
    setAuthState,
    setUser
}) {

    const signOutHandler = () =>{
        signOut(auth)
        .then(()=>{
            setUser(null);
            setAuthState('login');
        })
        .catch((err) =>
        console.log(err + 'error al logOut'))
    }

    return(
        <div className='flex flex-col items-center text-5xl font-bold text-center '>
        Home Screen {user}
        <button onClick={signOutHandler} className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign Out</button>
        </div>
    )
}