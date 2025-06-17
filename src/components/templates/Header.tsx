import React from 'react';
import logo from "../atoms/img/logo.png"

const Header = () => {
    return (
        <div>
            <nav className="bg-dark-blue border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="grid grid-cols-2 items-center">
                        <img src={logo} alt="Logo"/>
                        <span
                            className="text-lg font-kalam whitespace-nowrap text-white -ml-10">EasyHotel.staff</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;