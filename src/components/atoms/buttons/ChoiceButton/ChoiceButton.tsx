import React from 'react';

const ChoiceButton = () => {
    const handleClick = () => {
        window.location.href = "/editcard";
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="h-12 px-5 py-2.5 text-sm font-bold text-black bg-ton-red hover:bg-dark-ton-red focus:ring-4 focus:outline-none focus:ring-red-500 rounded-lg text-center">
            Выбрать
        </button>
    );
};

export default ChoiceButton;
