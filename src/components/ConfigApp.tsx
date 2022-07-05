import React, { useState } from 'react';
import { UseTheme } from '../contexts/ThemeContext';
import { HexColorPicker } from 'react-colorful';

const ConfigApp = () => {
    const { handleTheme, themeDark }: any = UseTheme();
    const [color, setColor] = useState(() => '#aabbcc');

    return (
        <>
            <div>
                <h1 className="title">Configurações globais</h1>
            </div>
            <div className='container'>
                <HexColorPicker color={color} onChange={setColor} />
                <button
                    className="submit-btn"
                    onClick={() => handleTheme('magenta')}
                >
                    magenta
                </button>
            </div>
        </>
    );
};

export default ConfigApp;
