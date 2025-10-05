// ./Pages/ForgotPasswordPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
    // 💡 ईमेल इनपुट को मैनेज करने के लिए स्टेट
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // यहाँ API कॉल लॉजिक जाएगा ताकि सर्वर ईमेल भेज सके
        console.log('Sending password reset link to:', email);
        alert(`If the email is registered, a password reset link has been sent to ${email}.`);
        // सक्सेस पर यूजर को किसी कन्फर्मेशन पेज पर रीडायरेक्ट किया जा सकता है
    };

    return (
        <div className="font-serif bg-white min-h-screen flex flex-col items-center justify-center py-16">
            
            <div className="w-full max-w-sm px-4">
                
                {/* Title */}
                <h1 className="text-5xl font-extrabold text-center mb-6 text-[#2B1416]">
                    Forgot Password
                </h1>
                
                {/* Subtitle */}
                <p className="text-center text-gray-700 mb-8">
                    Please enter your e-mail address below to receive a password reset link.
                </p>

                {/* Forgot Password Form */}
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
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-8 py-3 text-white font-semibold tracking-widest bg-[#2B1416] hover:bg-[#3d1a1d] transition duration-300"
                    >
                        SUBMIT
                    </button>
                </form>

                {/* Back to Login Link */}
                <div className="text-center mt-6 text-sm">
                    <Link to="/login" className="text-[#2B1416] underline hover:text-gray-900 font-semibold">
                        Back to Login
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

export default ForgotPasswordPage;