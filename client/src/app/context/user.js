"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';


const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const login =  (user) => {
        setUser(user);
        
    }
    const logout = () => {
        setUser(null);
        
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context)
        throw new Error('useUserContext requires UserProvider');
    return context;
};

export { useUserContext, UserProvider };