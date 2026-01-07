import React from "react";
import { useNav } from "../NavContext";

/**
 * MobileHamburger
 * Small responsive toggle for mobile menu.
 */
export default function MobileHamburger() {
    const { toggleMobile } = useNav();

    return (
        <button
            className="md:hidden p-2 rounded hover:bg-white/10"
            onClick={toggleMobile}
            aria-label="Open menu"
        >
            {/* Simple hamburger icon */}
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
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    );
}
