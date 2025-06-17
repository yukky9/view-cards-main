import React from 'react';
import RadioButton from "../../atoms/radioButton/RadioButton";
import ChoiceButton from "../../atoms/buttons/ChoiceButton/ChoiceButton";

const EditCardsModal = () => {
    return (
        <div className="grid">
            <div className="grid grid-cols-4 gap-10 -mb-28">
                <div className="grid grid-rows-2 gap-5 justify-items-center">
                    <img className="mx-auto rounded-md h-48 w-36 bg-green-400" src="" alt="photo1"/>
                    <RadioButton/>
                </div>
                <div className="grid grid-rows-2 gap-5 justify-items-center">
                    <img className="mx-auto rounded-md h-48 w-36 bg-green-400" src="" alt="photo1"/>
                    <RadioButton/>
                </div>
                <div className="grid grid-rows-2 gap-5 justify-items-center">
                    <img className="mx-auto rounded-md h-48 w-36 bg-green-400" src="" alt="photo1"/>
                    <RadioButton/>
                </div>
                <div className="grid grid-rows-2 gap-5 justify-items-center">
                    <img className="mx-auto rounded-md h-48 w-36 bg-green-400" src="" alt="photo1"/>
                    <RadioButton/>
                </div>
            </div>
            <ChoiceButton/>
        </div>
    );
};

export default EditCardsModal;