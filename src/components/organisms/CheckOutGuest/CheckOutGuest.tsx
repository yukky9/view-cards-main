import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Guest {
    id: string;
    name: string;
    roomNumber: string;
    roomType: string;
    checkInDate: string;
    checkOutDate: string;
    isChecked?: boolean;
}

const GuestCheckout = () => {
    const { bookingId } = useParams();
    const navigate = useNavigate();
    const [mode, setMode] = useState<'single' | 'multi'>(bookingId ? 'single' : 'multi');
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [guests, setGuests] = useState<Guest[]>([]);
    const [notes, setNotes] = useState('');

    // Загрузка данных
    useEffect(() => {
        const fetchGuests = async () => {
            try {
                setLoading(true);
                // Моковые данные - заменить на API-запрос
                const mockData: Guest[] = [
                    {
                        id: '1',
                        name: 'Иванов Иван',
                        roomNumber: '101',
                        roomType: 'Стандарт',
                        checkInDate: '2023-06-15',
                        checkOutDate: '2023-06-20'
                    },
                    {
                        id: '2',
                        name: 'Петрова Мария',
                        roomNumber: '205',
                        roomType: 'Люкс',
                        checkInDate: '2023-06-18',
                        checkOutDate: '2023-06-25'
                    },
                    {
                        id: '3',
                        name: 'Сидоров Алексей',
                        roomNumber: '102',
                        roomType: 'Стандарт',
                        checkInDate: '2023-06-10',
                        checkOutDate: '2023-06-12'
                    }
                ];

                if (mode === 'single' && bookingId) {
                    const singleGuest = mockData.find(g => g.id === bookingId);
                    if (singleGuest) {
                        setGuests([singleGuest]);
                    } else {
                        setError('Гость не найден');
                    }
                } else {
                    setGuests(mockData.map(g => ({ ...g, isChecked: false })));
                }
            } catch (err) {
                setError('Ошибка загрузки данных гостей');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchGuests();
    }, [bookingId, mode]);

    const selectedCount = guests.filter(g => g.isChecked).length;

    const handleToggleGuest = (id: string) => {
        setGuests(guests.map(guest =>
            guest.id === id ? { ...guest, isChecked: !guest.isChecked } : guest
        ));
    };

    const handleToggleAll = () => {
        const allChecked = guests.every(g => g.isChecked);
        setGuests(guests.map(g => ({ ...g, isChecked: !allChecked })));
    };

    const handleCheckOut = async () => {
        const guestsToCheckout = mode === 'single'
            ? [bookingId]
            : guests.filter(g => g.isChecked).map(g => g.id);

        if (guestsToCheckout.length === 0) {
            setError('Выберите хотя бы одного гостя');
            return;
        }

        if (!window.confirm(`Подтверждаете выселение ${guestsToCheckout.length} ${guestsToCheckout.length === 1 ? 'гостя' : 'гостей'}?`)) {
            return;
        }

        setProcessing(true);
        setError('');

        try {
            // Здесь должен быть реальный API-запрос
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Выселение:', {
                guestIds: guestsToCheckout,
                notes: mode === 'single' ? notes : null
            });

            setSuccess(true);
            setTimeout(() => navigate('/bookings'), 2000);
        } catch (err) {
            setError('Ошибка при выселении');
            console.error(err);
        } finally {
            setProcessing(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (success) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                        {mode === 'single' ? 'Гость успешно выселен' : 'Выселение выполнено!'}
                    </h3>
                    <p className="mt-1 text-gray-500">Перенаправление на страницу бронирований...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {mode === 'single' ? 'Выселение гостя' : 'Массовое выселение'}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {mode === 'single'
                            ? 'Подтвердите выселение гостя из системы'
                            : 'Выберите гостей для выселения'}
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="px-4 py-5 sm:p-6">
                    {mode === 'multi' ? (
                        <>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                                            <input
                                                type="checkbox"
                                                checked={guests.length > 0 && guests.every(g => g.isChecked)}
                                                onChange={handleToggleAll}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Гость</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Номер</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Тип</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата выезда</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {guests.map((guest) => (
                                        <tr key={guest.id} className={guest.isChecked ? 'bg-blue-50' : undefined}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    checked={!!guest.isChecked}
                                                    onChange={() => handleToggleGuest(guest.id)}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {guest.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {guest.roomNumber}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {guest.roomType}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {guest.checkOutDate}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 text-sm text-gray-500">
                                Выбрано: <span className="font-medium">{selectedCount}</span> из <span className="font-medium">{guests.length}</span>
                            </div>
                        </>
                    ) : (
                        guests.length > 0 && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Гость</h4>
                                        <p className="mt-1 text-sm text-gray-900">{guests[0].name}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Номер</h4>
                                        <p className="mt-1 text-sm text-gray-900">{guests[0].roomNumber} ({guests[0].roomType})</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Дата заезда</h4>
                                        <p className="mt-1 text-sm text-gray-900">{guests[0].checkInDate}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500">Дата выезда</h4>
                                        <p className="mt-1 text-sm text-gray-900">{guests[0].checkOutDate}</p>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                        Примечания
                                    </label>
                                    <textarea
                                        id="notes"
                                        rows={3}
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Дополнительная информация..."
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className="px-4 py-4 bg-gray-50 flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        disabled={processing}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        Назад
                    </button>
                    <button
                        onClick={handleCheckOut}
                        disabled={processing || (mode === 'multi' && selectedCount === 0)}
                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                            processing || (mode === 'multi' && selectedCount === 0)
                                ? 'bg-red-400 cursor-not-allowed'
                                : 'bg-red-600 hover:bg-red-700'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50`}
                    >
                        {processing ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Обработка...
                            </>
                        ) : mode === 'single' ? (
                            'Подтвердить выселение'
                        ) : (
                            `Выселить (${selectedCount})`
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestCheckout;