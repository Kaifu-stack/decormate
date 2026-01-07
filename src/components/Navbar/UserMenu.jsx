import React, { useState } from 'react';
import { useNav } from '../Navbar/NavContext';
import DropdownMenu from './DropDown';
import { LoginModal } from '../AuthModel/LoginModal';
import { SignupModal } from '../AuthModel/SignUpModal';

export function UserMenu({ className = '' }) {
    const [user, setUser] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogin = (userData) => {
        setUser(userData || { name: 'User' });
        setShowLoginModal(false);
        setShowSignupModal(false);
    };

    const logout = () => {
        setUser(null);
        setShowDropdown(false);
    };

    const switchToSignup = () => {
        setShowLoginModal(false);
        setShowSignupModal(true);
    };

    const switchToLogin = () => {
        setShowSignupModal(false);
        setShowLoginModal(true);
    };

    if (!user) {
        return (
            <div className={className}>
                <button
                    onClick={() => setShowLoginModal(true)}
                    className="px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-sm sm:text-lg hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg whitespace-nowrap"
                >
                    Login
                </button>
                <LoginModal
                    isOpen={showLoginModal}
                    onClose={() => setShowLoginModal(false)}
                    onSwitchToSignup={switchToSignup}
                    onLogin={handleLogin}
                />
                <SignupModal
                    isOpen={showSignupModal}
                    onClose={() => setShowSignupModal(false)}
                    onSwitchToLogin={switchToLogin}
                    onSignup={handleLogin}
                />
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                    {user.name?.[0] || 'U'}
                </div>
                <span className="hidden md:inline font-semibold text-white text-sm sm:text-base">{user.name}</span>
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors">
                        Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors">
                        My Bookings
                    </button>
                    <div className="my-2 border-t border-gray-200" />
                    <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}