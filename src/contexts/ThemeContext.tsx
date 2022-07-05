import React, { useContext, useState, useEffect, createContext } from 'react';

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: any) => {
    const [themeDark, setThemeDark] = useState(() => 'white');

    const handleTheme = (color: string) => {
        console.log(color);
    };

    const value = {
        handleTheme,
        themeDark,
        setThemeDark,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const UseTheme = () => {
    return useContext(ThemeContext);
};
