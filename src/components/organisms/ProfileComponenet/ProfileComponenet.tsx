import React, { useState, useRef } from 'react';
import { Camera, Mail, Lock, User, Phone, Calendar, Save } from 'lucide-react';
import profileImage from '../../atoms/img/profile.png';

interface UserProfile {
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    avatar: string;
}


const ProfileComponenet = () => {
    const [profile, setProfile] = useState<UserProfile>({
        name: 'Иван Иванов',
        email: 'ivan.ivanov@example.com',
        phone: '+7 (999) 123-45-67',
        birthDate: '1990-05-15',
        avatar: profileImage
    });

    const [isEditing, setIsEditing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState({
        current: '',
        new: '',
        confirm: '',
    });

    const handleAvatarClick = () => {
        if (isEditing && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setProfile({ ...profile, avatar: event.target.result as string });
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPassword({ ...password, [name]: value });
    };

    const handleSave = () => {
        // Здесь будет логика сохранения данных
        setIsEditing(false);
        alert('Изменения сохранены!');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {/* Заголовок */}
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">Мой профиль</h1>
                        <button
                            onClick={() => window.location.href = '/main'}
                            className="bg-gray-200 font-kalam hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                        >
                            Назад
                        </button>
                    </div>

                    {/* Основное содержимое */}
                    <div className="px-6 py-4">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Аватар и фото */}
                            <div className="flex flex-col items-center">
                                <div
                                    className={`relative w-32 h-32 rounded-full overflow-hidden cursor-pointer ${isEditing ? 'ring-2 ring-blue-500' : ''}`}
                                    onClick={handleAvatarClick}
                                >
                                    <img src={profile.avatar}
                                         alt="Аватар пользователя"
                                         className="w-full h-full object-cover"
                                    />
                                    {isEditing && (
                                        <div
                                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                            <Camera className="text-white h-8 w-8"/>
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleAvatarChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                {isEditing && (
                                    <button
                                        className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                                        onClick={handleAvatarClick}
                                    >
                                        Изменить фото
                                    </button>
                                )}
                            </div>

                            {/* Информация о пользователе */}
                            <div className="flex-1 space-y-4">
                                {/* Имя */}
                                <div className="space-y-1">
                                    <label className="flex items-center text-sm font-medium text-gray-700">
                                        <User className="h-4 w-4 mr-2"/>
                                        Имя
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={profile.name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{profile.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="space-y-1">
                                    <label className="flex items-center text-sm font-medium text-gray-700">
                                        <Mail className="h-4 w-4 mr-2"/>
                                        Email
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={profile.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{profile.email}</p>
                                    )}
                                </div>

                                {/* Телефон */}
                                <div className="space-y-1">
                                    <label className="flex items-center text-sm font-medium text-gray-700">
                                        <Phone className="h-4 w-4 mr-2"/>
                                        Телефон
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={profile.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-900">{profile.phone}</p>
                                    )}
                                </div>

                                {/* Дата рождения */}
                                <div className="space-y-1">
                                    <label className="flex items-center text-sm font-medium text-gray-700">
                                        <Calendar className="h-4 w-4 mr-2"/>
                                        Дата рождения
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            name="birthDate"
                                            value={profile.birthDate}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-900">
                                            {new Date(profile.birthDate).toLocaleDateString('ru-RU')}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Смена пароля */}
                        {isEditing && (
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                    <Lock className="h-5 w-5 mr-2"/>
                                    Смена пароля
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Текущий
                                            пароль</label>
                                        <input
                                            type="password"
                                            name="current"
                                            value={password.current}
                                            onChange={handlePasswordChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Новый
                                            пароль</label>
                                        <input
                                            type="password"
                                            name="new"
                                            value={password.new}
                                            onChange={handlePasswordChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Подтвердите новый
                                            пароль</label>
                                        <input
                                            type="password"
                                            name="confirm"
                                            value={password.confirm}
                                            onChange={handlePasswordChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Кнопки действий */}
                        <div className="mt-8 flex justify-end space-x-3">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-1"
                                    >
                                        Отмена
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white font-medium hover:shadow-lg transition-all flex items-center"
                                    >
                                        <Save className="h-4 w-4 mr-2"/>
                                        Сохранить
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white font-medium hover:shadow-lg transition-all"
                                >
                                    Редактировать профиль
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponenet;