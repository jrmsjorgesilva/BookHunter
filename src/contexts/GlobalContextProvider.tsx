import React from 'react';
import { AuthContextProvider } from './AuthContext';
import { ThemeContextProvider } from './ThemeContext';
import { LangContextProvider } from './LangContext';
import ErrorBoundary from './ErrorBoundary';

const GlobalContextProvider = ({ children }: any) => {
    return (
        <ErrorBoundary>
            {/* contexts */}
            <LangContextProvider>
                <ThemeContextProvider>
                    <AuthContextProvider>{children}</AuthContextProvider>
                </ThemeContextProvider>
            </LangContextProvider>
        </ErrorBoundary>
    );
};

export default GlobalContextProvider;
