import React, { createContext, useState, useEffect } from 'react'; // using react's build in createContext to make globally available state variables in such a way to avoid prop drilling
import api from '../utilities/user-services';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // 'user' can hold group info and other details

    const fetchUserInfo = async () => {
        try {
            const response = await api.get('/userinfo/');
            if (response && response.data) {
                setUser(response.data);
                // Optionally, persist user info in localStorage for better UX on refresh
                localStorage.setItem('userInfo', JSON.stringify(response.data));
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
            // Clear user info from localStorage if fetch fails
            localStorage.removeItem('userInfo');
            setUser(null);
        }
    };

    useEffect(() => {
        // Check if accessToken exists in localStorage and fetch user info
        const accessToken = localStorage.getItem('accessToken');
        const userInfo = localStorage.getItem('userInfo')
        if (accessToken) {
            fetchUserInfo();
        }
    }, []);


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
