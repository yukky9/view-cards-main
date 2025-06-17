import React, { useState } from 'react';
import AuthButton from '../../atoms/buttons/AuthButton/AuthButton';
import LoginInput from '../../atoms/inputs/AuthInputs/LoginInput';
import PasswordInput from '../../atoms/inputs/AuthInputs/PasswordInput';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        login: '',
        password: ''
    });
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {
            login: '',
            password: ''
        };
        let isValid = true;

        if (!login.trim()) {
            newErrors.login = 'Введите логин';
            isValid = false;
        } else if (login.length < 3) {
            newErrors.login = 'Логин слишком короткий';
            isValid = false;
        }

        if (!password.trim()) {
            newErrors.password = 'Введите пароль';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Пароль слишком короткий';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            // Здесь должна быть логика авторизации
            console.log('Вход:', { login, password });
            // Перенаправление после успешной авторизации
            navigate('/main');
        }
    };

    return (
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="login" className="block font-kalam mb-3 text-center text-lg font-medium text-gray-900">
                    Login
                </label>
                <LoginInput
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    hasError={!!errors.login}
                />
                {errors.login && (
                    <p className="mt-1 text-center text-sm text-red-600 font-kalam">
                        {errors.login}
                    </p>
                )}
            </div>
            <div className="mb-12">
                <label htmlFor="password" className="block font-kalam mb-3 text-center text-lg font-medium text-gray-900">
                    Password
                </label>
                <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    hasError={!!errors.password}
                />
                {errors.password && (
                    <p className="mt-1 text-center text-sm text-red-600 font-kalam">
                        {errors.password}
                    </p>
                )}
            </div>
            <div className="text-center">
                <AuthButton type="submit" />
            </div>
        </form>
    );
};

export default LoginForm;