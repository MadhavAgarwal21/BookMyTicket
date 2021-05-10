import React, { useContext, useState, useEffect, createContext } from "react"
import { auth } from "../firebase"

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function isInitialized() {
        return auth.onAuthStateChanged(function (user) {

            if (user) {
                return true
            }
            else {
                return false
            }
        });
    }

    // function getCurrentUsername() {
    //     return auth.currentUser && auth.currentUser.displayName
    // }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user)
    //         setLoading(false)
    //     })

    //     return unsubscribe
    // }, [])

    const value = {
        login,
        signup,
        logout,
        isInitialized,
        // getCurrentUsername,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}