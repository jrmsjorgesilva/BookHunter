import React, { useState } from 'react';
import { UseTheme } from '../contexts/ThemeContext';
import { HexColorPicker } from 'react-colorful';
import { FaCheckCircle } from 'react-icons/fa';

const ConfigApp = () => {
    // context
    const {
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
    }: any = UseTheme();

    return (
        <section className="section-config">
            <div>
                <h1 className="title">Configurações Globais</h1>
            </div>
            <div>
                <div className="container">
                    <label className="config-label" htmlFor="CordaNavegacao">
                        Cor da navegação
                        <HexColorPicker
                            color={navColor}
                            onChange={setNavColor}
                        />
                    </label>

                    <label className="config-label" htmlFor="CordasLetras">
                        Cor das letras
                        <HexColorPicker
                            color={navTypoColor}
                            onChange={setNavTypoColor}
                        />
                    </label>
                    <label className="config-label" htmlFor="CordosBotoes">
                        Cor dos botões
                        <HexColorPicker
                            color={btnColor}
                            onChange={setBtnColor}
                        />
                    </label>
                </div>

                <div className="container">
                    <label
                        className="config-label"
                        htmlFor="botoesTemasProntos"
                    >
                        <p>Temas Prontos</p>
                        <div>
                            <button className="btn-themes" onClick={() => setTheme('dark')}>
                                Dark
                                {theme === 'dark' ? (
                                    <FaCheckCircle
                                        style={{ margin: '-4px 5px' }}
                                    />
                                ) : (
                                    ''
                                )}
                            </button>
                            <button className="btn-themes" onClick={() => setTheme('light')}>
                                Light
                                {theme === 'light' ? (
                                    <FaCheckCircle
                                        style={{ margin: '-4px 5px' }}
                                    />
                                ) : (
                                    ''
                                )}
                            </button>
                            <button className="btn-themes" onClick={() => setTheme('bram stoker')}>
                                Bram Stoker
                                {theme === 'bram stoker' ? (
                                    <FaCheckCircle
                                        style={{ margin: '-4px 5px' }}
                                    />
                                ) : (
                                    ''
                                )}
                            </button>
                        </div>
                    </label>
                </div>
            </div>
        </section>
    );
};

export default ConfigApp;
