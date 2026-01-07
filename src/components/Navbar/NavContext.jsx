import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

/* -------------------- Nav Context -------------------- */
const NavContext = createContext();

export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useNav must be used within a NavProvider');
    }
    return context;
};

export function NavProvider({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobile = () => setMobileOpen(v => !v);

    const closeAll = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    // Close on Escape key
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') closeAll();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const value = {
        mobileOpen,
        toggleMobile,
        setMobileOpen,
        openDropdown,
        setOpenDropdown,
        closeAll
    };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}