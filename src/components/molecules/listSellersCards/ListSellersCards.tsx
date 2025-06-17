import React from 'react';
import SellerCard from "../../molecules/cards/sellerCard/SellerCard";

const ListSellersCards = () => {
    return (
        <div className='grid grid-cols-4 gap-5'>
            <SellerCard/>
            <SellerCard/>
            <SellerCard/>
            <SellerCard/>
        </div>
    );
};

export default ListSellersCards;