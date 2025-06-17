import React from 'react';
import logo from "../atoms/img/logo.png"

const Header = () => {
    return (
        <div>
            <nav className="bg-dark-khaki border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="grid grid-cols-2 items-center">
                        <img src={logo} className="h-12 w-8" alt="Logo"/>
                        <span
                            className="text-2xl font-semibold whitespace-nowrap">Дятел</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;