import React from 'react';
import StartBanner from '../../organisms/banner/StartBanner';
import Header from '../../templates/Header';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow flex items-center justify-center p-4">
                <StartBanner/>
            </main>
            <footer className="py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} EasyHotel.staff
            </footer>
        </div>
    );
};

export default HomePage;