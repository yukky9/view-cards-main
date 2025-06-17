import React from 'react';

const ItemsCard = () => {
    return (
        <div className="mx-auto mt-10">
            <div
                className="max-w-sm bg-white border-2 border-sienna-light rounded-lg shadow-sm">
                <a href="/editcard">
                    <img className="rounded-t-lg" src="" alt="photo1"/>
                </a>
                <div className="p-5">
                    <a href="/editcard">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Item 1</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>
    );
};

export default ItemsCard;