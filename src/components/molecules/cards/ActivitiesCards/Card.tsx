import React from 'react';
import MoveButton from '../../../atoms/buttons/MoveButton/MoveButton';

interface CardProps {
    imageSrc: string;
    title: string;
    targetPage: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, targetPage }) => {
    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-transform hover:scale-[1.02] w-full h-full flex flex-col">
            <img
                className="w-full h-80 object-cover"
                src={imageSrc}
                alt={title}
            />
            <div className="p-10 flex flex-col items-center flex-grow">
                <h2 className="text-2xl font-kalam font-medium text-gray-800 mb-8 text-center">{title}</h2>
                <div className="w-4/5">
                    <MoveButton targetPage={targetPage} />
                </div>
            </div>
        </div>
    );
};

export default Card;