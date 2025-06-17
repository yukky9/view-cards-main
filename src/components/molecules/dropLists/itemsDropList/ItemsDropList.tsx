import React, {useState} from 'react';
import ListSellersCards from "../../../molecules/listSellersCards/ListSellersCards";

const ItemsDropList = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleDropdown = ({index}: { index: any }) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const cards = [
        { title: 'Item 1', content: <ListSellersCards/> },
        { title: 'Item 2', content: <ListSellersCards/> },
        { title: 'Item 3', content: <ListSellersCards/> },
    ];

    return (
        <div className="max-w-7xl mx-auto mt-10">
            {cards.map((card, index) => (
                <div className="bg-white shadow-md rounded-lg mb-4" key={index}>
                    <div
                        className="p-4 cursor-pointer bg-tan text-black rounded-lg grid grid-cols-2"
                        onClick={() => toggleDropdown({index: index})}>
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="justify-items-end"
                                type="button"><svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                                                   xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                   viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                    </div>
                    {openIndex === index && (
                        <div className="p-4 bg-tan-light rounded-b-lg">
                            <p>{card.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemsDropList;