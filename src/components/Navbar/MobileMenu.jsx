import React from "react";
import { Link } from "react-router-dom";
import { useNav } from "./NavContext";

const navItems = [
    {
        id: 'venues',
        name: 'Venues',
        link: '/venues',
        submenu: [
            { name: 'Wedding Halls', link: '/venues/wedding' },
            { name: 'Banquet', link: '/venues/banquet' }
        ]
    },
    {
        id: 'decor',
        name: 'Decorations',
        link: '/decorations',
        submenu: [
            { name: 'Floral', link: '/decorations/floral' },
            { name: 'Lights', link: '/decorations/lights' }
        ]
    },
    {
        id: 'vendors',
        name: 'Vendors',
        link: '/vendors',
        submenu: [
            { name: 'Photographers', link: '/vendors/photographers' },
            { name: 'Makeup Artists', link: '/vendors/makeup' }
        ]
    },
    {
        id: 'catering',
        name: 'Catering Service',
        link: '/catering'
    },
    {
        id: 'chef',
        name: 'Chef Service',
        link: '/chef'
    }
];

export default function MobileMenu() {
    const { mobileOpen, setMobileOpen } = useNav();

    return (
        <div
            className={`md:hidden fixed inset-0 z-[70] transform ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out`}
        >
            {/* Backdrop overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar menu */}
            <aside className="absolute right-0 w-80 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl overflow-y-auto">
                {/* Header with close button */}
                <div className="sticky top-0 bg-gradient-to-r from-[#4121BF] via-[#8C3ABF] to-[#CC449A] p-4 flex items-center justify-between border-b border-white/10">
                    <h2 className="text-white text-xl font-bold">Menu</h2>
                    <button
                        className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation items */}
                <nav className="p-4">
                    <div className="flex flex-col gap-1">
                        {navItems.map(item => (
                            <div
                                key={item.id}
                                className="border-b border-white/5 pb-3 mb-3 last:border-b-0"
                            >
                                <Link
                                    to={item.link}
                                    className="block py-2 px-3 text-lg font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.name}
                                </Link>

                                {/* Submenu items */}
                                {item.submenu && (
                                    <div className="pl-4 mt-2 space-y-1">
                                        {item.submenu.map(subItem => (
                                            <Link
                                                key={subItem.name}
                                                to={subItem.link}
                                                className="block py-2 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            </aside>
        </div>
    );
}