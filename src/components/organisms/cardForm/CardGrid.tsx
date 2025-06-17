import React from 'react';
import imgCard1 from '../../atoms/img/img-card-1.png';
import imgCard2 from '../../atoms/img/img-card-2.png';
import imgCard3 from '../../atoms/img/img-card-3.png';
import Card from '../../molecules/cards/ActivitiesCards/Card';

const CardGrid = () => {
    const cardsData = [
        {
            imageSrc: imgCard1,
            title: 'Просмотр броней',
            targetPage: 'firstcard',
        },
        {
            imageSrc: imgCard2,
            title: 'Регистрация гостя',
            targetPage: 'secondcard',
        },
        {
            imageSrc: imgCard3,
            title: 'Отчёты',
            targetPage: 'thirdcard',
        }
    ];

    return (
        <div className="w-full px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        targetPage={card.targetPage}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;