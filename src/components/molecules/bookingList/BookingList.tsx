import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Booking {
    id: string;
    guestName: string;
    roomNumber: string;
    roomType: string;
    checkInDate: string;
    checkOutDate: string;
    status: 'confirmed' | 'pending' | 'cancelled';
    totalAmount: number;
}

const BookingList = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState<'all' | 'current' | 'upcoming' | 'past'>('all');
    const [sortBy, setSortBy] = useState<'checkInDate' | 'guestName'>('checkInDate');
    const [cancellingId, setCancellingId] = useState<string | null>(null);
    const [error, setError] = useState('');

    const handleCancelBooking = async (id: string) => {
        if (!window.confirm('Вы уверены, что хотите отменить это бронирование?')) return;

        setCancellingId(id);
        setError('');

        try {
            // Здесь должен быть API-запрос для отмены
            await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса

            setBookings(bookings.map(booking =>
                booking.id === id ? { ...booking, status: 'cancelled' } : booking
            ));
        } catch (err) {
            setError('Не удалось отменить бронирование');
            console.error(err);
        } finally {
            setCancellingId(null);
        }
    };


    // Моковые данные - замените на реальные данные из API
    const [bookings, setBookings] = useState<Booking[]>([
        {
            id: '1',
            guestName: 'Иванов Иван',
            roomNumber: '101',
            roomType: 'Стандарт',
            checkInDate: '2023-06-15',
            checkOutDate: '2023-06-20',
            status: 'confirmed',
            totalAmount: 15000
        },
        {
            id: '2',
            guestName: 'Петрова Мария',
            roomNumber: '205',
            roomType: 'Люкс',
            checkInDate: '2023-06-18',
            checkOutDate: '2023-06-25',
            status: 'confirmed',
            totalAmount: 35000
        },
        {
            id: '3',
            guestName: 'Сидоров Алексей',
            roomNumber: '102',
            roomType: 'Стандарт',
            checkInDate: '2023-06-10',
            checkOutDate: '2023-06-12',
            status: 'pending',
            totalAmount: 8000
        }
    ]);

    // Фильтрация бронирований
    const filteredBookings = bookings.filter(booking => {
        const today = new Date();
        const checkIn = new Date(booking.checkInDate);
        const checkOut = new Date(booking.checkOutDate);

        if (filter === 'current') {
            return checkIn <= today && checkOut >= today;
        } else if (filter === 'upcoming') {
            return checkIn > today;
        } else if (filter === 'past') {
            return checkOut < today;
        }
        return true;
    });

    // Сортировка бронирований
    const sortedBookings = [...filteredBookings].sort((a, b) => {
        if (sortBy === 'checkInDate') {
            return new Date(a.checkInDate).getTime() - new Date(b.checkInDate).getTime();
        } else {
            return a.guestName.localeCompare(b.guestName);
        }
    });

    const handleViewDetails = (id: string) => {
        navigate(`/bookings/${id}`);
    };

    const handleEditBooking = (id: string) => {
        navigate(`/bookings/${id}/edit`);
    };

    const getStatusColor = (status: string) => {
        switch(status) {
            case 'confirmed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-kalam font-bold text-gray-800">Просмотр бронирований</h1>
                <div className="grid grid-cols-2 gap-5">
                    <button
                        onClick={() => navigate('/main')}
                        className="bg-gray-200 font-kalam hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                    >
                        Назад
                    </button>
                    <button
                        onClick={() => navigate('/mass-checkout')}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                    >
                        Массовое выселение
                    </button>
                </div>

            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex space-x-2">
                    <button
                            onClick={() => setFilter('all')}
                            className={`px-4 font-kalam py-2 rounded-lg ${filter === 'all' ? 'bg-gradient-to-r from-primary-1 to-primary-2 text-white' : 'bg-gray-200'}`}
                        >
                            Все
                        </button>
                        <button
                            onClick={() => setFilter('current')}
                            className={`px-4 py-2 font-kalam rounded-lg ${filter === 'current' ? 'bg-gradient-to-r from-primary-1 to-primary-2 text-white' : 'bg-gray-200'}`}
                        >
                            Текущие
                        </button>
                        <button
                            onClick={() => setFilter('upcoming')}
                            className={`px-4 py-2 font-kalam rounded-lg ${filter === 'upcoming' ? 'bg-gradient-to-r from-primary-1 to-primary-2 text-white' : 'bg-gray-200'}`}
                        >
                            Предстоящие
                        </button>
                        <button
                            onClick={() => setFilter('past')}
                            className={`px-4 py-2 font-kalam rounded-lg ${filter === 'past' ? 'bg-gradient-to-r from-primary-1 to-primary-2  text-white' : 'bg-gray-200'}`}
                        >
                            Завершенные
                        </button>
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="sort" className="mr-2 font-kalam text-gray-700">Сортировать:</label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'checkInDate' | 'guestName')}
                            className="border font-kalam rounded-lg px-3 py-2"
                        >
                            <option value="checkInDate">По дате заезда</option>
                            <option value="guestName">По имени гостя</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Гость</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Номер</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Даты</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сумма</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Действия</th>

                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {sortedBookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">{booking.guestName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-900 font-kalam">{booking.roomNumber}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-900">{booking.roomType}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-900 font-kalam">
                                        {new Date(booking.checkInDate).toLocaleDateString()} - {new Date(booking.checkOutDate).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status === 'confirmed' ? 'Подтверждено' :
                          booking.status === 'pending' ? 'Ожидание' : 'Отменено'}
                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-900 font-kalam">{booking.totalAmount.toLocaleString()} ₽
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => handleViewDetails(booking.id)}
                                        className="text-blue-600 font-kalam hover:text-blue-900 mr-3"
                                    >
                                        Подробнее
                                    </button>
                                    {booking.status !== 'cancelled' && (
                                        <>
                                            <button
                                                onClick={() => handleEditBooking(booking.id)}
                                                className="text-green-600 font-kalam hover:text-green-900 mr-3"
                                            >
                                                Редактировать
                                            </button>
                                            <button
                                                onClick={() => handleCancelBooking(booking.id)}
                                                disabled={cancellingId === booking.id}
                                                className="text-red-600 font-kalam hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {cancellingId === booking.id ? 'Отмена...' : 'Отменить'}
                                            </button>
                                            {error && (
                                                <div
                                                    className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                                                    <p>{error}</p>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                                    <button
                                        onClick={() => navigate(`/bookings/${booking.id}/checkout`)}
                                        className="text-red-600 hover:text-red-900 text-sm font-medium"
                                    >
                                        Выселить
                                    </button>
                                </td>
                            </tr>

                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;