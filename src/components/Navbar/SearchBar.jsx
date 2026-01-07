import React, { useState, useEffect } from "react";
import useDebouncedValue from "../../components/Navbar/UtilityHooks";
import { Search, MapPin, X } from "lucide-react";

export default function SearchBar({ placeholder = "Search", showCityButton = false }) {
    const [q, setQ] = useState("");
    const [address, setAddress] = useState("");
    const [coords, setCoords] = useState(null);
    const [showMap, setShowMap] = useState(false);

    const debounced = useDebouncedValue(q, 350);

    useEffect(() => {
        if (!debounced) return;
        // fetchSuggestions(debounced)
    }, [debounced]);

    // 📍 Get live location → address
    const getLiveLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                setCoords({ latitude, longitude });

                // Reverse geocoding using OpenStreetMap
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                );
                const data = await res.json();

                const readableAddress =
                    data.address.city ||
                    data.address.town ||
                    data.address.village ||
                    data.address.state;

                setAddress(readableAddress || "Your location");
                setShowMap(true);
            },
            () => alert("Please allow location access")
        );
    };

    return (
        <>
            {/* SEARCH BAR */}
            <div className="flex items-center gap-2 w-full">
                <div className="relative flex-1 min-w-0">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder={placeholder}
                        className="w-full pl-4 pr-12 sm:pr-24 py-2 sm:py-3 rounded-full bg-white/85 placeholder:text-black/70 text-black text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-400"
                    />

                    <button className="hidden md:block absolute right-1 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 font-semibold">
                        Find
                    </button>
                </div>

                {/* 📍 CITY BUTTON */}
                {showCityButton && (
                    <button
                        onClick={getLiveLocation}
                        className="px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-white/85 font-semibold flex items-center gap-2"
                    >
                        <MapPin className="w-4 h-4 text-red-600" />
                        <span className="hidden sm:inline">
                            {address || "City"}
                        </span>
                    </button>
                )}
            </div>

            {/* 🗺️ MAP MODAL */}
            {showMap && coords && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl w-[90%] max-w-2xl overflow-hidden relative">
                        <button
                            onClick={() => setShowMap(false)}
                            className="absolute top-3 right-3 bg-white rounded-full p-1 shadow"
                        >
                            <X size={18} />
                        </button>

                        <div className="p-4 font-semibold text-gray-800">
                            📍 {address}
                        </div>

                        <iframe
                            title="map"
                            width="100%"
                            height="400"
                            src={`https://www.openstreetmap.org/export/embed.html?bbox=${coords.longitude - 0.01}%2C${coords.latitude - 0.01}%2C${coords.longitude + 0.01}%2C${coords.latitude + 0.01}&layer=mapnik&marker=${coords.latitude}%2C${coords.longitude}`}
                            style={{ border: 0 }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
