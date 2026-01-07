import { useState } from "react";
import { X, User, Mail, Phone, MapPin } from "lucide-react";



// Signup Modal Component
export function SignupModal({ isOpen, onClose, onSwitchToLogin }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: 'India',
        phone: '',
        city: '',
        state: ''
    });

    if (!isOpen) return null;

    const handleSubmit = () => {
        console.log('Signing up with:', formData);
        // Handle signup logic here
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="bg-black/50"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full h-full bg-white overflow-hidden flex ">
                {/* Rest of your modal content */}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <X size={24} className="text-gray-600" />
                </button>

                {/* Left Side - Image */}
                <div className="hidden md:block w-1/2 relative">
                    <img
                        src="https://res.cloudinary.com/dpdghfjqn/image/upload/v1767808094/wedding_mb7rjg.png"
                        alt="Wedding couple"
                        className="w-full h-full object-cover"
                    />
                </div>


                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                    <div className="max-w-md mx-auto w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                            sign up with your email
                        </h2>

                        <div className="space-y-4">
                            {/* Name Input */}
                            <div className="relative">
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="Name"
                                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 text-gray-700"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                                    <User size={16} className="text-white" />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="Email"
                                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 text-gray-700"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                                    <Mail size={16} className="text-white" />
                                </div>
                            </div>

                            {/* Country and Phone Row */}
                            <div className="flex gap-4">
                                <div className="w-1/3">
                                    <select
                                        value={formData.country}
                                        onChange={(e) => handleChange('country', e.target.value)}
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 text-gray-700 bg-white"
                                    >
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>Canada</option>
                                        <option>Australia</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 text-gray-700"
                                    />
                                </div>
                            </div>

                            {/* City and State Row */}
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => handleChange('city', e.target.value)}
                                        placeholder="City"
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 text-gray-700"
                                    />
                                </div>
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={formData.state}
                                        onChange={(e) => handleChange('state', e.target.value)}
                                        placeholder="State"
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500 text-gray-700"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        <MapPin size={20} className="text-purple-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Terms and Privacy */}
                            <p className="text-sm text-gray-600 mt-6">
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

                            {/* Sign Up Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg transition-colors shadow-lg mt-6"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">Or</span>
                            </div>
                        </div>

                        {/* Social Login Options */}
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-6 h-6" />
                                <span className="text-gray-700 font-medium">Sign in with Facebook</span>
                            </button>
                            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                                <span className="text-gray-700 font-medium">Sign in with Google</span>
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="text-center text-gray-600 mt-6">
                            Already have an account?{' '}
                            <button
                                onClick={onSwitchToLogin}
                                className="text-purple-600 font-semibold hover:underline"
                            >
                                Log In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}