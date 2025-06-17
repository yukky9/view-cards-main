import React from 'react';

const ChangeButton = () => {
    return (
        <button type="button"
                className="h-14 px-5 py-2.5 text-sm font-bold text-black bg-ton-red hover:bg-dark-ton-red focus:ring-4 focus:outline-none focus:ring-red-500 rounded-lg text-center">Поменять
            фото <br/> (для всех карточек)</button>
    );
};

export default ChangeButton;