// src/hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export function useDarkMode() {
    const getInitialMode = (): boolean => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) return storedTheme === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    };

    const [isDark, setIsDark] = useState<boolean>(getInitialMode);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleDarkMode = () => setIsDark((prev) => !prev);

    return { isDark, toggleDarkMode };
}
