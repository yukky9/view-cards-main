import React from 'react';
import BookingList from '../../molecules/bookingList/BookingList';
import Header from '../../templates/Header';

const FirstCardPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8">
                    <BookingList />
            </main>

            <footer className="bg-white py-4 border-t">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Система управления бронированиями
                </div>
            </footer>
        </div>
    );
};

export default FirstCardPage;