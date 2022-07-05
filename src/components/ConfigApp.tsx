import React, { useState } from 'react';
import { UseTheme } from '../contexts/ThemeContext';
import { HexColorPicker } from 'react-colorful';

const ConfigApp = () => {
    const { handleTheme, color, setColor, themeDark }: any = UseTheme();

    return (
        <section className='section-config'>
            <div>
                <h1 className="title">Configurações Globais</h1>
            </div>
            <div>
                <div className="container">
                    <label className='config-label' htmlFor=''>
                        Barra de navegação
                        <HexColorPicker color={color} onChange={setColor} />
                    </label>

                    <label className='config-label' htmlFor=''>
                        Barra de navegação
                        <HexColorPicker />
                    </label>

                    <label className='config-label' htmlFor=''>
                        Barra de navegação
                        <HexColorPicker />
                    </label>
                </div>
            </div>
        </section>
    );
};

export default ConfigApp;
