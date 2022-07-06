import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import './styles/css/main.css';

const App = () => {
    // environment variables
    console.log(
        '\n ENVIRONMENT-> ',
        process.env.ENVIRONMENT,
        '\n DEVELOPED_BY-> ',
        process.env.DEVELOPED_BY,
        '\n SOFTWARE_VERSION-> ',
        process.env.SOFTWARE_VERSION,
        '\n RELEASE_DATE-> ',
        process.env.RELEASE_DATE
    );

    return (
        <>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <AppRouter />
                </AuthContextProvider>
            </ThemeContextProvider>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
