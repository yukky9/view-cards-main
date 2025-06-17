import React from 'react';
import ListSellers from "../../organisms/listSellers/ListSellers";
import Header from "../../templates/Header";

const GeneralPageAdmin = () => {
    return (
        <div>
            <Header/>
            <ListSellers/>
        </div>
    );
};

export default GeneralPageAdmin;