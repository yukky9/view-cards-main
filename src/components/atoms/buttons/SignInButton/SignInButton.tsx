import React from 'react';

const SignInButton = () => {
    const handleClick = () => {
        window.location.href = "/auth";
    }
    return (
        <button type="button" onClick={handleClick}
                className="text-white font-kalam text-xl w-5/12 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            Войти
        </button>
    );
};

export default SignInButton;