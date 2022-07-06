import React, { useContext, useState, createContext } from 'react';

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: any) => {
    const [themeDark, setThemeDark] = useState(() => 'white');
    const [color, setColor] = useState(() => '#aabbcc');

    const handleTheme = (color: string) => {
        console.log(color);
        setColor(color);
        console.log(color);
    };

    const value = {
        handleTheme,
        themeDark,
        setThemeDark,
        color,
        setColor
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const UseTheme = () => {
    return useContext(ThemeContext);
};
