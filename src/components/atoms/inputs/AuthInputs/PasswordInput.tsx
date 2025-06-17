import React from 'react';

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasError?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, hasError }) => {
    return (
        <input
            type="password"
            id="password"
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg font-kalam text-lg ${
                hasError ? 'border-red-500' : 'border-primary-1'
            }`}
            placeholder="Введите пароль..."
        />
    );
};

export default PasswordInput;