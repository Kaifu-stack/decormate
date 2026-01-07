import React from "react";
import { NavProvider } from "../NavContext";

export default function NavProviderWrapper({ children }) {
    return <NavProvider>{children}</NavProvider>;
}
