import React, { useState } from 'react';
import { X, Mail, Phone } from 'lucide-react';
import weddingImage from '../../assets/wedding.png';


// Login Modal Component
export function LoginModal({ isOpen, onClose, onSwitchToSignup, onLogin }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const identifier = loginMethod === 'email' ? email : phone;
        console.log(`Requesting OTP for login via ${loginMethod}:`, identifier);

        // Simulate OTP verification success
        if (identifier) {
            const userData = {
                email: loginMethod === 'email' ? email : null,
                phone: loginMethod === 'phone' ? phone : null,
                name: loginMethod === 'email' ? email.split('@')[0] : phone
            };

            if (onLogin) {
                onLogin(userData);
            }
        }
    };

    return (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Close modal"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                {/* Left Side - Image */}
                <div className="hidden md:block md:w-1/2 relative flex-shrink-0">
                    <img
                        src="https://res.cloudinary.com/dpdghfjqn/image/upload/v1767808094/wedding_mb7rjg.png"
                        alt="Wedding couple"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                        Log in to your account
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                        Don't have an account?{' '}
                        <button
                            onClick={onSwitchToSignup}
                            className="text-purple-600 font-semibold hover:underline"
                        >
                            FREE SIGN UP
                        </button>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Toggle between Email and Phone */}
                        <div className="flex gap-2 mb-4">
                            <button
                                type="button"
                                onClick={() => setLoginMethod('email')}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${loginMethod === 'email'
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Email
                            </button>
                            <button
                                type="button"
                                onClick={() => setLoginMethod('phone')}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${loginMethod === 'phone'
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Phone
                            </button>
                        </div>

                        {/* Email Input */}
                        {loginMethod === 'email' && (
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Mail size={20} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="shahbaz@example.com"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700"
                                    required
                                />
                            </div>
                        )}

                        {/* Phone Input */}
                        {loginMethod === 'phone' && (
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Phone size={20} />
                                </div>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+91 98765 43210"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 text-gray-700"
                                    required
                                />
                            </div>
                        )}

                        {/* Terms and Privacy */}
                        <p className="text-xs sm:text-sm text-gray-600">
                            By continuing, you agree to Decormate's{' '}
                            <a href="#" className="text-purple-600 hover:underline">
                                Terms of Use
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-purple-600 hover:underline">
                                Privacy Policy
                            </a>
                            .
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-base sm:text-lg rounded-lg transition-colors shadow-lg"
                        >
                            Request OTP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}