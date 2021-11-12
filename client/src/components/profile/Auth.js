import React, { useEffect, useState } from "react";
import firebaseConfig from "./config.js";
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged } from "@firebase/auth";
  const auth = getAuth();

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  

  const auth = getAuth();
  const provider = new GoogleAuthProvider()


  

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const { email, password } = e.target.elements;
    // try {
    //   const user =  getAuth().
    //   await firebaseConfig .auth.createUserWithEmailAndPassword(email.value, password.value);
    //   setCurrentUser(user);
    //   console.log(user)
    // } catch (error) {
    //   alert(error);
    // }
  };


  const signInWithGoogle =  (e) => {
    e.preventDefault()
     
   signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  };

  useEffect(() => {
    onAuthStateChanged(auth,user=> {
      setCurrentUser(user)
      setLoading(false)
    });
  }, );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ currentUser,handleSubmit,signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};