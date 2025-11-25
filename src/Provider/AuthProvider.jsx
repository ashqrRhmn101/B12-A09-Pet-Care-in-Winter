import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();
const googleAuth = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailValue, setEmailValue] = useState(null);
  // console.log(emailValue)

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInUser
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google SignIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };

  //    User PhotoURL
  const userPhotoURL = (photoData) => {
    return updateProfile(auth.currentUser, photoData);
  };

  //   SignOut
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   Forgot Password
  const forgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signInUser,
    googleSignIn,
    userPhotoURL,
    signOutUser,
    forgotPass,
    loading,
    emailValue,
    setEmailValue,
  };

  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
