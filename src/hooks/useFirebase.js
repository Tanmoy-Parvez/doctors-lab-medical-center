import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
initializeAuth();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(true);

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //sign up with email and password
    const signUpUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name,
                })

            })
            .catch((error) => {
                setError(error.message);
            })
    }


    //sign in with email & password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setError(error);
            })
    }

    return {
        googleSignIn,
        signUpUser,
        signInUser,
        user,
        error,
        logOut,
        isLoading,
    };


}



export default useFirebase;