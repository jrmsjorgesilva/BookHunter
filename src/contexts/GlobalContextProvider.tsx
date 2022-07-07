import React from 'react';
import { AuthContextProvider } from './AuthContext';
import { ThemeContextProvider } from './ThemeContext';
import { LangContextProvider } from './LangContext';

const GlobalContextProvider = ({ children }: any) => {
    return (
        <LangContextProvider>
            <ThemeContextProvider>
                <AuthContextProvider>{children}</AuthContextProvider>
            </ThemeContextProvider>
        </LangContextProvider>
    );
};

export default GlobalContextProvider;
