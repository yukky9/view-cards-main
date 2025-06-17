import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../templates/Header';

interface Booking {
    id: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    roomNumber: string;
    roomType: string;
    checkInDate: string;
    checkOutDate: string;
    adults: number;
    children: number;
    status: string;
    specialRequests: string;
}

const EditBooking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [booking, setBooking] = useState<Booking>({
        id: '',
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        roomNumber: '',
        roomType: '',
        checkInDate: '',
        checkOutDate: '',
        adults: 1,
        children: 0,
        status: 'confirmed',
        specialRequests: ''
    });

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                setLoading(true);
                // Замените на реальный API-запрос
                const mockBooking = {
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
                    specialRequests: 'Дополнительная кровать'
                };
                setBooking(mockBooking);
            } catch (err) {
                setError('Не удалось загрузить данные бронирования');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooking();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBooking(prev => ({
            ...prev,
            [name]: name === 'adults' || name === 'children' ? parseInt(value) || 0 : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setError('');

        try {
            // Валидация
            if (!booking.guestName.trim()) {
                throw new Error('Укажите имя гостя');
            }
            if (!booking.checkInDate || !booking.checkOutDate) {
                throw new Error('Укажите даты проживания');
            }
            if (new Date(booking.checkOutDate) <= new Date(booking.checkInDate)) {
                throw new Error('Дата выезда должна быть позже даты заезда');
            }

            // Здесь должен быть API-запрос для сохранения
            console.log('Сохранение бронирования:', booking);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса

            navigate(`/bookings/${id}`, { state: { message: 'Бронирование успешно обновлено' } });
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Произошла ошибка при сохранении');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header/>
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-kalam font-bold text-gray-800">Редактирование бронирования #{id}</h1>
                    <button
                        onClick={() => navigate(`/bookings/${id}`)}
                        className="bg-gray-200 font-kalam hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                    >
                        Назад
                    </button>
                </div>

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Информация о госте */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-kalam font-semibold">Информация о госте</h2>

                            <div>
                                <label className="block font-kalam text-sm font-medium text-gray-700 mb-1">ФИО*</label>
                                <input
                                    type="text"
                                    name="guestName"
                                    value={booking.guestName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-kalam text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="guestEmail"
                                    value={booking.guestEmail}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    className="block font-kalam text-sm font-medium text-gray-700 mb-1">Телефон</label>
                                <input
                                    type="tel"
                                    name="guestPhone"
                                    value={booking.guestPhone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Информация о бронировании */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-kalam font-semibold">Детали бронирования</h2>

                            <div>
                                <label className="block font-kalam text-sm font-medium text-gray-700 mb-1">Номер
                                    комнаты*</label>
                                <input
                                    type="text"
                                    name="roomNumber"
                                    value={booking.roomNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-kalam text-sm font-medium text-gray-700 mb-1">Тип
                                    номера</label>
                                <select
                                    name="roomType"
                                    value={booking.roomType}
                                    onChange={handleChange}
                                    className="w-full font-kalam px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Стандарт">Стандарт</option>
                                    <option value="Комфорт">Комфорт</option>
                                    <option value="Люкс">Люкс</option>
                                    <option value="Делюкс">Делюкс</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block font-kalam text-sm font-medium text-gray-700 mb-1">Взрослые</label>
                                    <input
                                        type="number"
                                        name="adults"
                                        min="1"
                                        value={booking.adults}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block font-kalam text-sm font-medium text-gray-700 mb-1">Дети</label>
                                    <input
                                        type="number"
                                        name="children"
                                        min="0"
                                        value={booking.children}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Даты */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-kalam font-semibold">Даты проживания</h2>

                            <div>
                                <label className="block font-kalam text-sm font-medium text-gray-700 mb-1">Дата
                                    заезда*</label>
                                <input
                                    type="date"
                                    name="checkInDate"
                                    value={booking.checkInDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-kalam text-sm font-medium text-gray-700 mb-1">Дата
                                    выезда*</label>
                                <input
                                    type="date"
                                    name="checkOutDate"
                                    value={booking.checkOutDate}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Дополнительно */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-kalam font-semibold">Дополнительно</h2>

                            <div>
                                <label
                                    className="block font-kalam text-sm font-medium text-gray-700 mb-1">Статус</label>
                                <select
                                    name="status"
                                    value={booking.status}
                                    onChange={handleChange}
                                    className="w-full font-kalam px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="confirmed">Подтверждено</option>
                                    <option value="pending">Ожидание</option>
                                    <option value="cancelled">Отменено</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-kalam text-sm font-medium text-gray-700 mb-1">Особые
                                    пожелания</label>
                                <textarea
                                    name="specialRequests"
                                    value={booking.specialRequests}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => navigate(`/bookings/${id}`)}
                            disabled={saving}
                            className="bg-gray-200 font-kalam hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg disabled:opacity-50"
                        >
                            Отмена
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-gradient-to-r from-primary-1 to-primary-2 font-kalam hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50 flex items-center"
                        >
                            {saving ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Сохранение...
                                </>
                            ) : 'Сохранить изменения'}
                        </button>
                    </div>
                </form>
            </div>
            <footer className="bg-white py-4 border-t">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Система управления бронированиями
                </div>
            </footer>
        </div>
    );
};

export default EditBooking;