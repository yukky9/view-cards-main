import React from 'react';
import ChangeButton from "../../atoms/buttons/ChangeButton/ChangeButton";
import CancelButton from "../../atoms/buttons/CancelButton/CancelButton";
import Checkbox from "../../atoms/checkbox/Checkbox";

const StaticAndPhotoModal = () => {
    return (
        <div className="grid">
            <div className="grid grid-cols-4 gap-10 -mb-10">
                <div className="grid grid-rows-2 gap-7 justify-items-center">
                    <img className="rounded-md h-48 w-36 bg-green-400" alt='photo1'/>
                    <Checkbox/>
                </div>
                <div className="grid grid-rows-2 gap-7 justify-items-center">
                    <img className="rounded-md h-48 w-36 bg-green-400" alt='photo2'/>
                    <Checkbox/>
                </div>
                <div className="grid grid-rows-2 gap-7 justify-items-center">
                    <img className="rounded-md h-48 w-36 bg-green-400" alt='photo3'/>
                    <Checkbox/>
                </div>
                <div className="grid grid-rows-2 gap-7 justify-items-center">
                    <img className="rounded-md h-48 w-36 bg-green-400" alt='photo4'/>
                    <Checkbox/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10 -mt-20">
                <ChangeButton/>
                <CancelButton/>
            </div>
        </div>
    );
};

export default StaticAndPhotoModal;