import React, {useState} from 'react';
import CheckboxParams from '../../../atoms/checkbox/CheckboxParams';
import EditCardsModal from "../../../modals/editCardsModal/EditCardsModal";

const EditCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="grid grid-cols-2 gap-20 ">
            <img className="mx-auto rounded-lg bg-green-400 h-96 w-80" src="" alt="photo1"/>
            <div className="grid gap-5">
                <button onClick={openModal} type="button"
                        className=" h-12 px-5 py-2.5 text-sm font-bold text-black bg-ton-red-light hover:bg-dark-ton-red-light focus:ring-4 focus:outline-none focus:ring-red-500 rounded-lg text-center">Выбрать
                    фото
                </button>
                <CheckboxParams/>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                    <div className="bg-white rounded-lg shadow-lg p-5 z-10">
                        <div>
                            <div onClick={closeModal} className=" mb-4 flex justify-end items-start cursor-pointer">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                       stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Menu / Close_MD">
                                            <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                                                  stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <EditCardsModal/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditCard;