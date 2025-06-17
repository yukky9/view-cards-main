import React from 'react';

interface MoveButtonProps {
    targetPage: string;
}

const MoveButton: React.FC<MoveButtonProps> = ({ targetPage }) => {
    const handleClick = () => {
        window.location.href = `/${targetPage}`;
    };

    return (
        <button
            onClick={handleClick}
            className="font-kalam text-white text-xl w-full bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
            Перейти
        </button>
    );
};

export default MoveButton;