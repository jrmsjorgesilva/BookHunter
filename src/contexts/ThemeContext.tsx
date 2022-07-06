import React, { useContext, useState, createContext } from 'react';

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: any) => {

    const [theme, setTheme] = useState(() => 'light');
    const [navColor, setNavColor] = useState(() => '#aabbcc');
    const [navTypoColor, setNavTypoColor] = useState(() => '#ffffff');
    const [btnColor, setBtnColor] = useState(() => '#bbccaa');
    const [textColor, setTextColor] = useState(() => '#bbccaa');

    const handleTheme = (newTheme: string): void => {
        // setColor(color);
    };

    const value = {
        handleTheme,
        theme,
        setTheme,
        navColor,
        setNavColor,
        navTypoColor,
        setNavTypoColor,
        btnColor,
        setBtnColor,
        textColor,
        setTextColor,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const UseTheme = () => {
    return useContext(ThemeContext);
};
