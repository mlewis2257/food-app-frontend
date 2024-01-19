import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from '../../components/SignupForm/SignupForm';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-sm mx-auto my-10">
                <div className="text-center mb-6">
                    <h1 className="font-bold text-3xl text-gray-700">Welcome</h1>
                    <p className="text-gray-500">Please {isLogin ? 'Login' : 'Sign Up'}</p>
                </div>
                {isLogin ? <LoginForm /> : <SignupForm />}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="mt-4 text-indigo-500 hover:text-indigo-600 text-sm font-semibold"
                >
                    {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    )
}
