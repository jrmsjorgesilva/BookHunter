import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import SearchApi from '../components/SearchApi';
import NotFound from '../components/NotFound';
import SearchBooks from '../components/SearchBooks';
import ConfigApp from '../components/ConfigApp';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import SignIn from '../components/SignIn';
import Account from '../components/Account';
import ProtectedRoute from './ProtectedRoute';
import { UserAuth } from '../contexts/AuthContext';

const AppRouter = () => {
    const { user } = UserAuth();

    return (
        <Router>
            {user && <Nav />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <ProtectedRoute>
                            <SearchApi />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/searchbooks"
                    element={
                        <ProtectedRoute>
                            <SearchBooks />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configurations"
                    element={
                        <ProtectedRoute>
                            <ConfigApp />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/account"
                    element={
                        <ProtectedRoute>
                            <Account />
                        </ProtectedRoute>
                    }
                />
                <Route path="/search/:id" />
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
