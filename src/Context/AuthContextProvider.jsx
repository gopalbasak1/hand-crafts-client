import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';
import auth from '../config/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, password, name, image) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: image
                }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: image });
                });
            })
            .finally(() => setLoading(false));
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        }).then(() => {
            setUser(prevUser => ({ ...prevUser, displayName: name, photoURL: image }));
        });
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
            .finally(() => setLoading(false));
    }

    const logout = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth)
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        setLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        user,
        googleLogin,
        githubLogin,
        logout,
        loading,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
