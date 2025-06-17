import React from 'react';
import EditCard from "../../molecules/cards/editCrad/EditCard";
import SaveButton from "../../atoms/buttons/SaveButton/SaveButton";
import SyncButton from "../../atoms/buttons/SyncButton/SyncButton";

const EditCards = () => {
    return (
        <div className="pt-10 grid grid-rows-2 gap-y-3 justify-center justify-content-between">
            <EditCard/>
            <div className="grid grid-cols-2 gap-x-20 mt-20">
                <SaveButton/>
                <SyncButton/>
            </div>
        </div>
    );
};

export default EditCards;