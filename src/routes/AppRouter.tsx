import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import SearchApi from '../components/SearchApi';
import NotFound from '../components/NotFound';
import SearchBooks from '../components/SearchBooks';
import ConfigApp from '../components/ConfigApp';
import SignUp from '../components/SignUp';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<SearchApi />} />
                <Route path="/searchbooks" element={<SearchBooks />} />
                <Route path="/configurations" element={<ConfigApp />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/search/:id" />
                <Route element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
