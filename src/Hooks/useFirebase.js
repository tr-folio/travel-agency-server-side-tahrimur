import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // register with email and password
    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            saveUser(email, name);
            setIsLoading(false);
        })
        .catch((error) => {
            setAuthError(error.message);
        });
    }

    // login with email and password
    const login = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            localStorage.setItem("useremail", user.email);
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
        const user = {email: email, displayName: displayName, role: 'user'};
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

    // check if current user is an admin or normal user
    useEffect(() => {
        fetch(`http://localhost:5000/single-user/${user.email}`)
        .then(res => res.json())
        .then((data) => {
            if (data.role === "admin") {
                localStorage.setItem("username", data.displayName);
                localStorage.setItem("useradmin", true);
            } else {
                localStorage.setItem("username", data.displayName);
                localStorage.setItem("useradmin", false);
            }
        })
    }, [user.email]);

    return {
        user,
        isLoading,
        authError,
        registerUser,
        login,
        logout
    }
}

export default useFirebase;