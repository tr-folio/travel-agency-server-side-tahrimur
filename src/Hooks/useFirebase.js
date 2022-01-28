import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            const user = userCredential.user;
            setUser(user);
            saveUser(email, name);
            setIsLoading(false);
        })
        .catch((error) => {
            setAuthError(error.message);
        });
    }

    // logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            localStorage.removeItem("username");
            localStorage.removeItem("useremail");
            localStorage.removeItem("useradmin");
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
            window.location.reload();
        });
    }

    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, []);

    // save user
    const saveUser = (email, displayName) => {
        const user = {email: email, displayName: displayName};
        fetch('http://localhost:5000/save-user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
            // console.log(data.acknowledged);
            if (data.acknowledged === true) {
                localStorage.setItem("username", user.displayName);
                localStorage.setItem("useremail", user.email);
            }
        })
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        logout
    }
}

export default useFirebase;