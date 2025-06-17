import React, {useRef, useState} from 'react';
import { DownloadIcon, RefreshCwIcon, CalendarIcon, FileTextIcon, BarChart2Icon, UsersIcon, CreditCardIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';

interface Report {
    id: string;
    name: string;
    type: 'financial' | 'occupancy' | 'guests' | 'bookings';
    createdAt: string;
    period: string;
    format: 'PDF' | 'Excel' | 'CSV';
    size: string;
}

const ReportsPage = () => {
    const [dateRange, setDateRange] = useState<DateRange>({
        from: new Date(new Date().setDate(new Date().getDate() - 7)),
        to: new Date(),
    });
    const [reportType, setReportType] = useState<string>('all');
    const [isLoading, setIsLoading] = useState(false);
    const dateInputRef = useRef<HTMLInputElement>(null);

    // Mock data
    const reports: Report[] = [
        {
            id: '1',
            name: 'Финансовый отчет',
            type: 'financial',
            createdAt: format(new Date(), 'dd.MM.yyyy HH:mm'),
            period: `${format(dateRange.from || new Date(), 'dd.MM.yyyy')} - ${format(dateRange.to || new Date(), 'dd.MM.yyyy')}`,
            format: 'PDF',
            size: '2.4 MB',
        },
        {
            id: '2',
            name: 'Заполняемость номеров',
            type: 'occupancy',
            createdAt: format(new Date(new Date().setDate(new Date().getDate() - 1)), 'dd.MM.yyyy HH:mm'),
            period: `${format(dateRange.from || new Date(), 'dd.MM.yyyy')} - ${format(dateRange.to || new Date(), 'dd.MM.yyyy')}`,
            format: 'Excel',
            size: '1.8 MB',
        },
        {
            id: '3',
            name: 'Отчет по гостям',
            type: 'guests',
            createdAt: format(new Date(new Date().setDate(new Date().getDate() - 2)), 'dd.MM.yyyy HH:mm'),
            period: `${format(dateRange.from || new Date(), 'dd.MM.yyyy')} - ${format(dateRange.to || new Date(), 'dd.MM.yyyy')}`,
            format: 'CSV',
            size: '3.2 MB',
        },
    ];

    const stats = [
        { name: 'Заполняемость', value: '82%', change: '+5%', icon: BarChart2Icon },
        { name: 'Средний чек', value: '12,450 ₽', change: '-2%', icon: CreditCardIcon },
        { name: 'Новые гости', value: '124', change: '+15%', icon: UsersIcon },
        { name: 'Отмены', value: '8', change: '-3%', icon: FileTextIcon },
    ];
    const handleDateClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const handleGenerateReport = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert(`Отчет за период ${format(dateRange.from || new Date(), 'dd.MM.yyyy')} - ${format(dateRange.to || new Date(), 'dd.MM.yyyy')} сформирован`);
        }, 1500);
    };

    const handleDateSelect = (range: DateRange | undefined) => {
        if (range) {
            setDateRange(range);
        }
    };

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Отчеты</h1>
                <div className="grid grid-cols-2 gap-5">
                <button
                    onClick={() => window.location.href = '/main'}
                    className="bg-gray-200 font-kalam hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                >
                    Назад
                </button>
                <button
                    onClick={handleGenerateReport}
                    disabled={isLoading}
                    className="flex items-center px-4 py-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                    {isLoading ? (
                        <>
                            <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin"/>
                            Формирование...
                        </>
                    ) : (
                        <>
                            <FileTextIcon className="mr-2 h-4 w-4"/>
                            Сформировать отчет
                        </>
                    )}
                </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Период</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <CalendarIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                readOnly
                                value={`${format(dateRange.from || new Date(), 'dd.MM.yyyy')} - ${format(dateRange.to || new Date(), 'dd.MM.yyyy')}`}
                                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 bg-white"
                                onClick={handleDateClick}
                            />
                            <input
                                type="date-range"
                                id="dateRangePicker"
                                className="opacity-0 absolute inset-0"
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Тип отчета</label>
                        <select
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 bg-white"
                        >
                            <option value="all">Все отчеты</option>
                            <option value="financial">Финансовые</option>
                            <option value="occupancy">Заполняемость</option>
                            <option value="guests">Гости</option>
                            <option value="bookings">Бронирования</option>
                        </select>
                    </div>

                    <div className="flex items-end">
                        <button
                            onClick={() => {
                                setDateRange({
                                    from: new Date(new Date().setDate(new Date().getDate() - 7)),
                                    to: new Date(),
                                });
                                setReportType('all');
                            }}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Сбросить фильтры
                        </button>
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center">
                            <div className={`p-3 rounded-full ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-green-100' : index === 2 ? 'bg-purple-100' : 'bg-red-100'}`}>
                                <stat.icon className={`h-6 w-6 ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-green-600' : index === 2 ? 'text-purple-600' : 'text-red-600'}`} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                    {stat.change} с прошлого периода
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Reports Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">Доступные отчеты</h2>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                        <RefreshCwIcon className="h-4 w-4 mr-1" />
                        Обновить
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Название
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Тип
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Дата создания
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Период
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Формат
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Размер
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Действия
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {reports.map((report) => (
                            <tr key={report.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {report.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {report.type === 'financial' && 'Финансовый'}
                                    {report.type === 'occupancy' && 'Заполняемость'}
                                    {report.type === 'guests' && 'Гости'}
                                    {report.type === 'bookings' && 'Бронирования'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {report.createdAt}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {report.period}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {report.format}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {report.size}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 flex items-center">
                                        <DownloadIcon className="h-4 w-4 mr-1" />
                                        Скачать
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                        Показано <span className="font-medium">1</span> до <span className="font-medium">{reports.length}</span> из <span className="font-medium">{reports.length}</span> отчетов
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            Назад
                        </button>
                        <button className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            Вперед
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;