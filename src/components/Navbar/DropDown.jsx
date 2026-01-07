import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom"; //  For navigation links
import { useNav } from "./NavContext";
export default function DropdownMenu({ id, title, items = [] }) {
    const { openDropdown, setOpenDropdown } = useNav();
    const open = openDropdown === id;
    const ref = useRef();


    useEffect(() => {
        function onClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                // close if clicking outside
                if (open) setOpenDropdown(null);
            }
        }
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [open, setOpenDropdown]);


    return (
        <div ref={ref} className="relative">
            <button
                className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 transition-colors duration-200 ${open ? 'text-sky-300' : 'text-white'}`}
                onClick={() => setOpenDropdown(open ? null : id)}
                aria-expanded={open}
                aria-haspopup="true"
            >
                <span className="font-semibold">{title}</span>
                <svg
                    className={`w-3 h-3 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {open && (
                <div
                    role="menu"
                    className="absolute left-0 mt-2 w-48 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg z-50"
                >
                    <ul className="py-2">
                        {items.map((it) => (
                            <li key={it.name}>
                                <Link
                                    to={it.link}
                                    className="block px-4 py-2 hover:bg-white/20 transition-colors duration-200"
                                    role="menuitem"
                                    onClick={() => setOpenDropdown(null)}
                                >
                                    {it.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}