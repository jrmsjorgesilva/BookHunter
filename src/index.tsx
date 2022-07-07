import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import GlobalContextProvider from './contexts/GlobalContextProvider';
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
            <GlobalContextProvider>
                <AppRouter />
            </GlobalContextProvider>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
