import React from 'react';

interface AuthButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ type = 'button', onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="font-kalam text-xl w-full bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white font-medium rounded-lg px-5 py-2.5 shadow-md hover:shadow-lg transition-all"
        >
            Войти
        </button>
    );
};

export default AuthButton;