import React from 'react';
import SignInButton from '../../atoms/buttons/SignInButton/SignInButton';
import banner from '../../atoms/img/banner.png';

const StartBanner = () => {
    return (
        <figure className="w-full max-w-screen-xl mx-auto transition-all duration-300">
            <div className="relative rounded-2xl overflow-hidden">
                <img
                    className="w-full h-auto object-cover"
                    src={banner}
                    alt="EasyHotel.staff"
                />
                <div className="absolute inset-0 bg-light-black"></div>
                <figcaption className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
                    <h1 className="font-kalam text-4xl md:text-6xl mb-3">EasyHotel.staff</h1>
                    <p className="font-kalam text-lg md:text-xl mb-8 md:mb-16">
                        Просто и удобно управлять отелем
                    </p>
                    <SignInButton />
                </figcaption>
            </div>
        </figure>
    );
};

export default StartBanner;