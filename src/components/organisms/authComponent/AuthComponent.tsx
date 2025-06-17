import React from 'react';
import banner2 from '../../atoms/img/banner2.png';
import LoginForm from '../../molecules/loginForm/LoginForm';

const AuthComponent = () => {
    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                {/* Баннер - скрыт на мобильных */}
                <div className="hidden lg:block w-full max-w-md h-[700px]"> {/* Фиксированная высота */}
                    <img
                        src={banner2}
                        alt="Login Banner"
                        className="w-full h-full object-cover rounded-l-lg" /* Изменил на object-cover */
                    />
                </div>

                {/* Форма входа с такой же высотой */}
                <div className="w-full max-w-lg bg-white rounded-r-lg shadow-md p-8 h-[700px] flex flex-col justify-center"> {/* Такая же высота + flex centering */}
                    <h1 className="text-6xl font-kalam font-bold text-center mb-24 bg-gradient-to-r from-primary-1 via-primary-2 to-secondary inline-block text-transparent bg-clip-text">
                        Вход
                    </h1>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
};

export default AuthComponent;