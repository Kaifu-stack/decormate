import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import { useNav } from "../Navbar/NavContext";
import MobileHamburger from "./utility/MobileHamburger";
import { UserMenu } from './UserMenu';

export default function Navbar() {
    const { toggleMobile } = useNav();

    return (
        <>
            <header className="w-full min-h-[112px] mx-auto bg-gradient-to-r from-[#4121BF]/100 via-[#8C3ABF]/100 to-[#CC449A]/100 sticky top-0 left-0 right-0 z-[60]">

                {/* Desktop Layout - Large screens (lg and up) */}
                <div className="hidden lg:block h-[112px]">
                    {/* Top: Search Bar */}
                    <div className="absolute top-2 left-[150px] w-[723px] h-[41px]">
                        <SearchBar placeholder="Search your venue..." showCityButton />
                    </div>

                    {/* Logo - positioned absolutely at the left */}
                    <div className="absolute left-0 top-[-12px] h-[117px] flex items-center pl-[32px]">
                        <Logo className="h-full" />
                    </div>

                    <div className="absolute bottom-0 left-[150px] right-[50px] flex items-baseline justify-between h-[56px]">
                        {/* Center: DECORMATE text + NavLinks in same row */}
                        <div className="flex items-baseline h-full flex-1 gap-8 text-xl">
                            <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFE1CE]/90 to-white text-shadow-lg">
                                DECORMATE
                            </span>
                            <div className="flex gap-8">
                                <NavLinks />
                            </div>
                        </div>
                    </div>

                    {/* Right: UserMenu */}
                    <div className="absolute top-8 right-10 flex items-center gap-4">
                        <UserMenu className="flex" />
                    </div>
                </div>

                {/* Tablet Layout - Medium screens (md to lg) */}
                <div className="hidden md:block lg:hidden h-[112px]">
                    <div className="relative h-full px-4 py-2">
                        {/* Logo */}
                        <div className="absolute left-4 top-[-12px] h-[117px] flex items-center">
                            <Logo className="h-[80px]" />
                        </div>

                        {/* Search Bar */}
                        <div className="absolute top-2 left-[120px] right-[180px]">
                            <SearchBar placeholder="Search your venue..." showCityButton />
                        </div>

                        {/* DECORMATE + NavLinks */}
                        <div className="absolute bottom-0 left-[120px] right-[180px] flex items-baseline gap-6 h-[56px] text-lg">
                            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFE1CE]/90 to-white text-shadow-lg whitespace-nowrap">
                                DECORMATE
                            </span>
                            <div className="flex gap-4">
                                <NavLinks />
                            </div>
                        </div>

                        {/* Right: UserMenu */}
                        <div className="absolute top-8 right-4 flex items-center gap-4">
                            <UserMenu className="flex" />
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Small screens (below md) */}
                <div className="block md:hidden">
                    <div className="relative px-3 py-2 space-y-2">
                        {/* Row 1: Logo + DECORMATE + Hamburger */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Logo className="h-[45px]" />
                                <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFE1CE]/90 to-white text-shadow-lg">
                                    DECORMATE
                                </span>
                            </div>
                            <MobileHamburger className="block" onClick={toggleMobile} />
                        </div>

                        {/* Row 2: Search Bar + Login Button */}
                        <div className="flex items-center gap-2">
                            <div className="flex-1 min-w-0">
                                <SearchBar placeholder="Search..." showCityButton={false} />
                            </div>
                            <div className="flex-shrink-0">
                                <UserMenu className="block" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <MobileMenu />
            </header>
        </>
    );
}