import React from 'react';
import { NavLink } from 'react-router-dom';
import DropdownMenu from "../Navbar/DropDown"; // adjust path as needed

const navItems = [
    { id: 'venues', name: 'Venues', link: '/venues', submenu: [{ name: 'Wedding Halls', link: '/venues/wedding' }, { name: 'Banquet', link: '/venues/banquet' }] },
    { id: 'decor', name: 'Decorations', link: '/decorations', submenu: [{ name: 'Floral', link: '/decorations/floral' }, { name: 'Lights', link: '/decorations/lights' }] },
    { id: 'vendors', name: 'Vendors', link: '/vendors', submenu: [{ name: 'Photographers', link: '/vendors/photographers' }, { name: 'Makeup Artists', link: '/vendors/makeup' }] },
    { id: 'catering', name: 'Catering Service', link: '/catering', submenu: [] },
    { id: 'chef', name: 'Chef Service', link: '/chef', submenu: [] }
];


export default function NavLinks({ className = '' }) {
    return (
        <nav className={`flex items-center gap-6 ${className}`} aria-label="Primary navigation">
            {navItems.map(item =>
                item.submenu ? (
                    <DropdownMenu key={item.id} id={item.id} title={item.name} items={item.submenu} />
                ) : (
                    <NavLink
                        key={item.id}
                        to={item.link}
                        className={({ isActive }) =>
                            `relative px-4 py-2 rounded-lg text-lg font-extrabold transition-all duration-200
    ${isActive
                                ? 'text-white after:content-[""] after:block after:h-1 after:bg-white after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2'
                                : 'text-white/70 hover:text-white'}`
                        }
                    >
                        {item.name}
                    </NavLink>
                )
            )}
        </nav>
    );
}