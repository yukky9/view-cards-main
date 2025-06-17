import React from 'react';
import GuestRegistrationForm from '../../organisms/guestRegistrationForm/GuestRegistrationForm';
import Header from '../../templates/Header';

const SecondPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100">
            <Header />

            <main className="flex-grow grid place-items-center p-4"> {/* Изменено на grid place-items-center */}
                <div className="w-full max-w-2xl mx-auto"> {/* Уменьшена максимальная ширина */}
                    <GuestRegistrationForm />
                </div>
            </main>

            <footer className="py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} EasyHotel.staff
            </footer>
        </div>
    );
};

export default SecondPage;