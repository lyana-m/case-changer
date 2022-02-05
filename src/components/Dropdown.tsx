import { useState } from "react";
import { cases } from "../helpers/cases";
import classes from "./Dropdown.module.css";

const Dropdown: React.FC<{ onSelect: (item: string) => void; isValid: boolean }> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const [setectedCase, setSelectedCase] = useState("");

    const openDropDownHandler = () => {
        setIsOpened(true);
    };

    const selectOptionHandler = (item: { key: string; value: string }) => {
        setSelectedCase(item.value);
        props.onSelect(item.key);
        setIsOpened(false);
    };

    return (
        <div tabIndex={2} className={isOpened ? classes.dropdown + " " + classes.dropdown_focused : classes.dropdown}>
            <div
                className={
                    props.isValid
                        ? classes.dropdown__body
                        : classes.dropdown__body + " " + classes.dropdown__body_invalid
                }
                onClick={openDropDownHandler}
            >
                <div
                    className={
                        setectedCase
                            ? classes.dropdown__placeholder
                            : classes.dropdown__placeholder + " " + classes.dropdown__placeholder_inactive
                    }
                >
                    {setectedCase ? setectedCase : "Выберите падеж"}
                </div>
                <input className={classes.dropdown__output} />
                <svg
                    className={classes.dropdown__arrow}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.8075 0.75L6 4.935L10.1925 0.75L11.25 1.8075L6 7.0575L0.75 1.8075L1.8075 0.75Z"
                        fill="black"
                        fillOpacity="0.87"
                    />
                </svg>
            </div>
            {isOpened && (
                <ul className={classes["option-list"]}>
                    {cases.map((item) => (
                        <li onClick={() => selectOptionHandler(item)} className={classes.option} key={item.value}>
                            <span className={classes["option_hover"]}></span>
                            {item.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
