import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
    return (
        <Link
            to="/"
            className={`flex items-center ${className}`}
            aria-label="Homepage"
        >
            <img
                src="https://res.cloudinary.com/dpdghfjqn/image/upload/v1767808103/Design_tskdqd.png"
                alt="Decormate Logo"
                className="w-auto object-contain"
                style={{ height: '100%' }}
                loading="eager"
            />
        </Link>
    );
}