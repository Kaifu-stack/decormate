import React from "react";

export default function HeroSection() {
    return (
        <section
            className="relative w-full h-[800px] md:h-[800px] sm:h-[600px] mt-0 bg-cover bg-top brightness-110 saturate-80"
            style={{
                backgroundImage: `url("https://res.cloudinary.com/dpdghfjqn/image/upload/v1767808099/backg_gli8ye.png")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {/* Content container (absolute positioning) */}
            <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-10 py-8 gap-8 lg:gap-0">
                {/* Left Card */}
                <div className="bg-black/30 px-6 sm:px-10 py-8 sm:py-15 rounded-full max-w-md text-white w-full lg:w-auto">
                    <h2 className="text-xl sm:text-2xl font-extrabold mb-3">
                        Why waste time on 10 different calls?
                    </h2>
                    <p className="text-white/90 mb-8 text-sm sm:text-base">
                        "One app. One booking. Everything managed."
                    </p>
                    <div className="flex items-center bg-white/40 rounded-full overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 bg-transparent text-white placeholder-white/80 px-4 py-2 outline-none text-sm sm:text-base"
                        />
                        <button className="shadow-2xl bg-blue-400 px-4 sm:px-6 py-2 text-black font-extrabold rounded-full opacity-80 text-xs sm:text-base whitespace-nowrap">
                            FIND YOURS
                        </button>
                    </div>
                </div>

                {/* Right Card - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block absolute top-50 right-10 z-10">
                    <div className="bg-black/30 px-10 py-15 rounded-full max-w-md text-white top-60">
                        <h2 className="text-2xl font-extrabold mb-3">
                            Planning stress giving you headaches?
                        </h2>
                        <p className="text-white/90 mb-8">
                            "Relax — we handle all Event Planning from start to finish."
                        </p>
                        <div className="flex items-center bg-white/40 rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Your City"
                                className="flex-1 bg-transparent text-white placeholder-white/80 px-4 py-2 outline-none"
                            />
                            <button className="bg-blue-400 px-6 py-2 font-extrabold text-black rounded-full opacity-80">
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Center Decoration - Star Shape with Text Inside */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-32">
                <div className="relative w-64 h-64">
                    {/* Star SVG Background with Glass Effect */}
                    <svg width="550" height="500" viewBox="0 0 250 250" className="absolute top-0 left-1/2 -translate-x-1/2">
                        <defs>
                            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
                                <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
                                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
                            </linearGradient>
                            <filter id="blur">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                            </filter>
                        </defs>
                        <polygon
                            points="125,25 145,90 215,90 160,130 180,195 125,155 70,195 90,130 35,90 105,90"
                            fill="url(#starGradient)"
                            stroke="rgba(255, 255, 255, 0.3)"
                            strokeWidth="0"
                            filter="url(#blur)"
                            className="drop-shadow-2xl"
                            style={{ backdropFilter: 'blur(10px)' }}
                        />
                    </svg>

                    {/* Text Content Inside Star */}
                    <div className="absolute lg:py-50 lg:px-10 flex items-center justify-center">
                        <div className="text-center px-8">
                            <div className="text-xl text-amber-800 font-serif italic drop-shadow">
                                Celebrate in Style,
                            </div>
                            <div className="text-xl italic text-amber-800 font-serif drop-shadow">
                                We Set the Vibe.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-500/50 to-transparent"></div>
        </section>
    );
}