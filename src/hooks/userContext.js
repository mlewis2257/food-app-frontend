import React, { createContext, useState } from 'react'; // using react's build in createContext to make globally available state variables in such a way to avoid prop drilling

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // 'user' can hold group info and other details

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
