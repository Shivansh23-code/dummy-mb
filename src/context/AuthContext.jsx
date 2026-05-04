import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Roles: Admin, Employee, Customer

    const[user, setUser] = useState({
        name: "Shivansh",
        role: "admin",
        isLoggedIn: true
    });

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{user, setUser, logout}}>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);