import React from 'react';
import ProfileComponenet from '../../organisms/ProfileComponenet/ProfileComponenet';
import Header from '../../templates/Header';

const ProfilePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
                    <ProfileComponenet />
            </main>
            <footer className="py-4 text-center text-gray-500 text-sm bg-white border-t">
                © {new Date().getFullYear()} EasyHotel.staff
            </footer>
        </div>
    );
};

export default ProfilePage;