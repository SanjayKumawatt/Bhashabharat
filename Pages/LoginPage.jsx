// ./Pages/LoginPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    // 💡 फ़ॉर्म इनपुट्स को मैनेज करने के लिए स्टेट
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // यहाँ ऑथेंटिकेशन लॉजिक (API कॉल) जाएगा
        console.log('Logging in with:', { email, password });
        alert('Login functionality goes here!');
    };

    return (
        <div className="font-serif bg-white min-h-screen flex flex-col items-center justify-center py-16">
            
            <div className="w-full max-w-sm px-4">
                
                {/* Title */}
                <h1 className="text-5xl font-extrabold text-center mb-6 text-[#2B1416]">
                    Login
                </h1>
                
                {/* Subtitle */}
                <p className="text-center text-gray-700 mb-8">
                    Please enter your e-mail and password:
                </p>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* E-mail Field */}
                    <div>
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border-b border-gray-400 p-3 focus:outline-none focus:border-[#2B1416] text-lg"
                        />
                    </div>
                    
                    {/* Password Field with Forgot Password Link */}
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border-b border-gray-400 p-3 focus:outline-none focus:border-[#2B1416] text-lg"
                        />
                        {/* Forgot Password Link */}
                        <Link 
                            to="/account/forgot-password" 
                            className="absolute right-0 top-3 text-sm text-gray-600 hover:text-[#2B1416] hover:underline transition"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full mt-8 py-3 text-white font-semibold tracking-widest bg-[#2B1416] hover:bg-[#3d1a1d] transition duration-300"
                    >
                        LOGIN
                    </button>
                </form>

                {/* Create Account Link */}
                <div className="text-center mt-6 text-sm">
                    <span className="text-gray-700">New customer? </span>
                    <Link to="/account/register" className="text-[#2B1416] underline hover:text-gray-900 font-semibold">
                        Create an account
                    </Link>
                </div>
            </div>
            
            {/* Floating Loyalty Points Button */}
            <div className="fixed bottom-4 left-4 z-40">
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg">
                    Loyalty Points
                </button>
            </div>
        </div>
    );
};

export default LoginPage;