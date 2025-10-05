// ./Pages/RegistrationPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    // 💡 फ़ॉर्म इनपुट्स को मैनेज करने के लिए स्टेट
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // यहाँ रजिस्ट्रेशन लॉजिक (API कॉल) जाएगा
        console.log('Registering with:', { name, email, password });
        alert('Registration functionality goes here!');
    };

    return (
        <div className="font-serif bg-white min-h-screen flex flex-col items-center justify-center py-16">
            
            <div className="w-full max-w-sm px-4">
                
                {/* Title */}
                <h1 className="text-5xl font-extrabold text-center mb-6 text-[#2B1416]">
                    Create Account
                </h1>
                
                {/* Subtitle */}
                <p className="text-center text-gray-700 mb-8">
                    Please fill out the details below to create your BhashaBharat account:
                </p>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Full Name Field */}
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border-b border-gray-400 p-3 focus:outline-none focus:border-[#2B1416] text-lg"
                        />
                    </div>

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
                    
                    {/* Password Field */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password (Min. 8 characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength="8"
                            required
                            className="w-full border-b border-gray-400 p-3 focus:outline-none focus:border-[#2B1416] text-lg"
                        />
                    </div>

                    {/* Create Account Button */}
                    <button
                        type="submit"
                        className="w-full mt-8 py-3 text-white font-semibold tracking-widest bg-[#2B1416] hover:bg-[#3d1a1d] transition duration-300"
                    >
                        CREATE ACCOUNT
                    </button>
                </form>

                {/* Already have an account? Link */}
                <div className="text-center mt-6 text-sm">
                    <span className="text-gray-700">Already have an account? </span>
                    <Link to="/login" className="text-[#2B1416] underline hover:text-gray-900 font-semibold">
                        Login here
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

export default RegistrationPage;