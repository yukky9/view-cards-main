import React from 'react';
import ListItems from "../../organisms/listItems/ListItems";
import Header from "../../templates/Header";
import Search from "../../organisms/search/Search";

const GeneralPageSeller = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <ListItems/>
        </div>
    );
};

export default GeneralPageSeller;