import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';

initializeAuth(); // called initialized firebase

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider(); // get google provider

    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(true);

    // google sign in method
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // reserved auth
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

    // user log out method
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
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }


    //sign in with email & password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                setError(error);
            })
            .finally(() => setLoading(false));
    }
    // return all the functions
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