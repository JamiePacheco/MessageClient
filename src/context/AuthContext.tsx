import {User} from "../interfaces/User";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

export interface AuthContextType {
    user : User | null;
    setUser : (user : User) => void;
    logout : () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({children} : {children : ReactNode}) {
    const [user, setUserState] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUserState(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        setUser(null);
        // TODO handle clearing jwt from cookies
    }

    const setUser = (newUser : User | null) => {
        setUserState(newUser);
        if (newUser) {
            localStorage.setItem("user", JSON.stringify(newUser));
        } else {
            localStorage.removeItem("user");
        }
    };

    return (
        <AuthContext.Provider value={{user, setUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook for using Auth Provider
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error ("useAuth must be used within AuthProvider")
    return context;
}