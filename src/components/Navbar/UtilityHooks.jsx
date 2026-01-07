import React from 'react'
import { useState, useEffect } from 'react';
export default function useDebouncedValue(value, delay = 300) {
    const [v, setV] = useState(value);
    useEffect(() => {
        const id = setTimeout(() => setV(value), delay);
        return () => clearTimeout(id);
    }, [value, delay]);
    return v;
}