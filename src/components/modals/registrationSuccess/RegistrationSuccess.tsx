import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../templates/Header';
import successImage from '../../atoms/img/success.png';

const RegistrationSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
            <Header />

            <main className="flex-grow grid place-items-center p-4">
                <div className="w-full max-w-md mx-auto text-center">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <img
                            src={successImage}
                            alt="Успешная регистрация"
                            className="w-20 h-20 mx-auto mb-6"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Регистрация завершена успешно!</h2>
                        <p className="text-gray-600 mb-6">
                            Гость успешно зарегистрирован в системе. Данные сохранены.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => navigate('/main')}
                                className="px-5 py-2.5 text-white font-kalam bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 mb-2 me-2 font-medium rounded-lg text-center"
                            >
                                На главную
                            </button>
                            <button onClick={() => navigate('/secondcard')}
                                className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
<span
    className="relative font-kalam font-medium px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-lg group-hover:bg-transparent">
Добавить ещё гостя
</span>
                            </button>

                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} EasyHotel.staff
            </footer>
        </div>
    );
};

export default RegistrationSuccess;