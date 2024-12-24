import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { NETFLIX_LOGO, PROFILE_ICON } from '../utils/constants';


const Header = () => {

  const navigate = useNavigate();
  const dispatch =useDispatch();
  const user = useSelector((store)=>store.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate('/browse');
        } else {
          dispatch(removeUser());
          navigate('/')
        }
      });

      // Unsubscribe when component unmounts
      return ()=> unsubscribe();
},[])

  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={NETFLIX_LOGO} alt='logo'/>
        {
          user&&
        
        <div className='flex p-2'>
          <img className='w-12 h-12' src={PROFILE_ICON} alt="" />
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header