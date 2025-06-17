import React from 'react';
import ItemsCard from "../../molecules/cards/itemsCard/ItemsCard";

const ListItems = () => {
    return (
        <div className="grid grid-cols-4 gap-x-5 pl-32 pr-32">
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
            <ItemsCard/>
        </div>
    );
};

export default ListItems;