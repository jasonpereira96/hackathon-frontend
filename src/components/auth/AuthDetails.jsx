// components/auth/AuthDetails.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '/src/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import LogIn from './LogIn';
import Dash from '/src/pages/dashboard.js';

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [redirected, setRedirected] = useState(false); // New state variable
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        if (!redirected) {
          setRedirected(true);
          router.push('/dashboard');
        }
      } else {
        setAuthUser(null);
        setRedirected(false);
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, [router, redirected]);

  return authUser ? <Dash /> : <LogIn />;
};

export default AuthDetails;
