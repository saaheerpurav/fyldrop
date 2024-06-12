import React, { useContext, useEffect, useState } from 'react';

import { fs, auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password, ascode) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('auth_token', userCredential._tokenResponse.refreshToken);

      try {
        let e = {
          userId: userCredential.user.uid,
          email: userCredential.user.email,
          tier: "free",
          createdAt: serverTimestamp(),
        }
        if (ascode !== null) {
          e["ascode"] = ascode;
          e["tier"] = "lifetime";
        }
        await addDoc(collection(fs, "accounts"), e);
      }
      catch (error) {
        console.log(error);
      }

      return userCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('auth_token', userCredential._tokenResponse.refreshToken);
      return userCredential.user;

    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('auth_token');
    } catch (error) {
      throw error;
    }
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}