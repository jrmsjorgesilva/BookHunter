import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const Account = () => {
    const { user, logoutUser } = UserAuth();

    const navigate = useNavigate();

    console.log('user', user);
    console.log('logout ', logoutUser);

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigate('/');
        } catch (err) {
            console.log('Não foi possivel deslogar!', err.message);
        }
    };

    return (
        <section className="box-layout">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <>
                    <h4>
                        <FaUser /> &nbsp; Olá, {user.email}!
                    </h4>
                </>
                <>
                    <span>
                        <button
                            className="logout-btn"
                            type="submit"
                            onClick={() => handleLogout()}
                        >
                            <FaSignOutAlt /> &nbsp; Logout
                        </button>
                    </span>
                </>
            </div>
        </section>
    );
};

export default Account;
