import React from 'react';

interface LoginInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasError?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({ value, onChange, hasError }) => {
    return (
        <input
            type="text"
            id="login"
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg font-kalam text-lg ${
                hasError ? 'border-red-500' : 'border-primary-1'
            }`}
            placeholder="Введите логин..."
        />
    );
};

export default LoginInput;