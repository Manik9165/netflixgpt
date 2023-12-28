import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { HEADER_lOGO } from '../Utils/Constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const authSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, Dispatch an action to add user data in our store.
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => {
      authSubscribe();
    }
  }, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-screen px-5 py-2 bg-gradient-to-b from-black flex z-50 justify-between'>
      <img
        className='w-44'
        src= {HEADER_lOGO}
        alt='HeaderIcon'
      />
      {user && <button className='w-18 h-auto p-2 bg-red-600' onClick={handleSignOut}>{user.displayName} Sign Out</button>}
    </div>
  )
}

export default Header