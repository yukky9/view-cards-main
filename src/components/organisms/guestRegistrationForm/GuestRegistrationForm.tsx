import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestRegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        documentNumber: '',
        documentType: 'passport',
        arrivalDate: '',
        departureDate: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'Обязательное поле';
        if (!formData.lastName.trim()) newErrors.lastName = 'Обязательное поле';
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Некорректный email';
        if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) newErrors.phone = 'Некорректный телефон';
        if (!formData.documentNumber.trim()) newErrors.documentNumber = 'Обязательное поле';
        if (!formData.arrivalDate) newErrors.arrivalDate = 'Укажите дату заезда';
        if (!formData.departureDate) newErrors.departureDate = 'Укажите дату выезда';
        if (formData.arrivalDate && formData.departureDate &&
            new Date(formData.departureDate) <= new Date(formData.arrivalDate)) {
            newErrors.departureDate = 'Дата выезда должна быть позже даты заезда';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Отправка данных на сервер
            console.log('Данные гостя:', formData);
            navigate('/registration-success');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 border border-primary-1">
            <h2 className="text-4xl font-kalam font-bold text-center mb-6 bg-gradient-to-r from-primary-1 via-primary-2 to-secondary text-transparent bg-clip-text">
                Регистрация гостя
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Личная информация */}
                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Имя*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-dark-grey'}`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Фамилия*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-dark-grey'}`}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-dark-grey'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Телефон*</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+7 (___) ___-____"
                            className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-dark-grey'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                    </div>

                    {/* Документы */}
                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Тип документа</label>
                        <select
                            name="documentType"
                            value={formData.documentType}
                            onChange={handleChange}
                            className="w-full font-kalam px-3 py-2 border border-dark-grey rounded-md"
                        >
                            <option value="passport">Паспорт</option>
                            <option value="international-passport">Загранпаспорт</option>
                            <option value="driver-license">Водительские права</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Номер документа*</label>
                        <input
                            type="text"
                            name="documentNumber"
                            value={formData.documentNumber}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md ${errors.documentNumber ? 'border-red-500' : 'border-dark-grey'}`}
                        />
                        {errors.documentNumber && <p className="text-red-500 text-xs">{errors.documentNumber}</p>}
                    </div>

                    {/* Даты проживания */}
                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Дата заезда*</label>
                        <input
                            type="date"
                            name="arrivalDate"
                            value={formData.arrivalDate}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md ${errors.arrivalDate ? 'border-red-500' : 'border-dark-grey'}`}
                        />
                        {errors.arrivalDate && <p className="text-red-500 text-xs">{errors.arrivalDate}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="block font-kalam text-sm font-medium text-gray-700">Дата выезда*</label>
                        <input
                            type="date"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={handleChange}
                            className={`w-full px-3 py-2 border rounded-md ${errors.departureDate ? 'border-red-500' : 'border-dark-grey'}`}
                        />
                        {errors.departureDate && <p className="text-red-500 text-xs">{errors.departureDate}</p>}
                    </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 font-kalam border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Назад
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 font-kalam text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-center"
                    >
                        Зарегистрировать
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GuestRegistrationForm;