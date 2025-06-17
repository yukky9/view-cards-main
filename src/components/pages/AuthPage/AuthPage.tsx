import React from 'react';
import AuthComponent from '../../organisms/authComponent/AuthComponent';
import Header from '../../templates/Header';

const AuthPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header/>
            <main className="flex-grow flex items-center justify-center p-4">
                <AuthComponent/>
            </main>
            <footer className="py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} EasyHotel.staff
            </footer>
        </div>
    );
};

export default AuthPage;