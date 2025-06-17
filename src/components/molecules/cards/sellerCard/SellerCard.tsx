import React, {useState} from 'react';
import StaticAndPhotoModal from "../../../modals/staticAndPhotoModal/StaticAndPhotoModal";

const SellerCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div onClick={openModal}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer">
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">Seller</h5>
                    </div>
                </div>
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
                            <StaticAndPhotoModal/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SellerCard;