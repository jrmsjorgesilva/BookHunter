import React, { useState, useContext, createContext } from 'react';

const LangContext = createContext({});

export const LangContextProvider = ({ children }: any) => {
    const [lang, setLang] = useState(() => 'pt-BR');

    const value = {
        lang,
        setLang,
    };

    return (
        <LangContext.Provider value={value}>{children}</LangContext.Provider>
    );
};

export const UseLang = () => {
    return useContext(LangContext);
};
