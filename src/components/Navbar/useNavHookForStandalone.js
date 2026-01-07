import React from "react";
import { useNav } from "./NavContext";

export function useNavHookForStandalone() {
    try {
        return useNav();
    } catch {
        // fallback if outside provider
        return { toggleMobile: () => { } };
    }
}
