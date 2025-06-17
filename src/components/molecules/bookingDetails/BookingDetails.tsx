import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../templates/Header';

const BookingDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cancelling, setCancelling] = useState(false);
    const [error, setError] = useState('');

    const handleCancel = async () => {
        if (!window.confirm('Вы уверены, что хотите отменить это действия?')) return;

        setCancelling(true);
        setError('');

        try {
            // Здесь должен быть API-запрос для отмены
            await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
            navigate('/firstcard', { state: { message: 'Действия успешно отменены' } });
        } catch (err) {
            setError('Не удалось отменить действия');
            console.error(err);
        } finally {
            setCancelling(false);
        }
    };

    // Моковые данные - замените на запрос к API
    const booking = {
        id: '1',
        guestName: 'Иванов Иван',
        guestEmail: 'ivanov@example.com',
        guestPhone: '+7 (123) 456-7890',
        roomNumber: '101',
        roomType: 'Стандарт',
        checkInDate: '2023-06-15',
        checkOutDate: '2023-06-20',
        adults: 2,
        children: 1,
        status: 'confirmed',
        totalAmount: 15000,
        paymentStatus: 'paid',
        specialRequests: 'Дополнительная кровать',
        createdAt: '2023-05-10'
    };

    return (
        <div>
            <Header/>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-kalam font-bold text-gray-800">Детали бронирования #{id}</h1>
                    <button
                        onClick={() => navigate('/firstcard')}
                        className="bg-gray-200 font-kalam hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                    >
                        Назад к списку
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                        <div>
                            <h2 className="text-xl font-kalam font-semibold mb-4">Информация о госте</h2>
                            <div className="space-y-3">
                                <p><span className="font-kalam font-medium">ФИО:</span> {booking.guestName}</p>
                                <p><span className="font-kalam font-medium">Email:</span> {booking.guestEmail}</p>
                                <p><span className="font-kalam font-medium">Телефон:</span> {booking.guestPhone}</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-kalam font-semibold mb-4">Информация о номере</h2>
                            <div className="space-y-3">
                                <p><span className="font-kalam font-medium">Номер:</span> {booking.roomNumber}</p>
                                <p><span className="font-kalam font-medium">Тип:</span> {booking.roomType}</p>
                                <p><span
                                    className="font-kalam font-medium">Даты:</span> {new Date(booking.checkInDate).toLocaleDateString()} - {new Date(booking.checkOutDate).toLocaleDateString()}
                                </p>
                                <p><span
                                    className="font-kalam font-medium">Гостей:</span> {booking.adults} взрослых, {booking.children} детей
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-kalam font-semibold mb-4">Статусы</h2>
                            <div className="space-y-3">
                                <p><span className="font-kalam font-medium">Статус брони:</span>
                                    <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                            booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                    }`}>
                  {booking.status === 'confirmed' ? 'Подтверждено' :
                      booking.status === 'pending' ? 'Ожидание' : 'Отменено'}
                </span>
                                </p>
                                <p><span className="font-kalam font-medium">Оплата:</span>
                                    <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                                        booking.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                  {booking.paymentStatus === 'paid' ? 'Оплачено' : 'Ожидает оплаты'}
                </span>
                                </p>
                                <p><span
                                    className="font-kalam font-medium">Создано:</span> {new Date(booking.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-kalam font-semibold mb-4">Финансы</h2>
                            <div className="space-y-3">
                                <p><span
                                    className="font-kalam font-medium">Сумма:</span> {booking.totalAmount.toLocaleString()} ₽
                                </p>
                                <p><span
                                    className="font-kalam font-medium">Особые пожелания:</span> {booking.specialRequests || 'Нет'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
                        <button
                            onClick={handleCancel}
                            disabled={cancelling}
                            className="bg-red-600 font-kalam hover:bg-red-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 flex items-center justify-center"
                        >
                            {cancelling ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Отмена...
                                </>
                            ) : 'Отменить действия'}
                        </button>
                        {error && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                                <p>{error}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <footer className="bg-white py-4 border-t">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Система управления бронированиями
                </div>
            </footer>
        </div>
    );
};

export default BookingDetails;