import { useEffect, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme) {
            setTheme(theme);
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [theme]);

    return (
        <header className={classes.header}>
            <button onClick={toggleTheme}>{theme === "light" ? "Темная тема" : "Светлая тема"}</button>
            <button>Нашли ошибку?</button>
        </header>
    );
};

export default Header;
