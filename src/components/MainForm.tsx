import { useState } from "react";
import Dropdown from "./Dropdown";

import classes from "./MainForm.module.css";

const MainForm: React.FC<{ onDefine: (item: { word: string; wordCase: string }) => void }> = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isEnteredValueValid, setIsEnteredValueValid] = useState(true);
    const [caseName, setCaseName] = useState("");
    const [isCaseNameValid, setIsCaseNameValid] = useState(true);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const selectHandler = (item: string) => {
        setCaseName(item);
        setIsCaseNameValid(true);
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (!enteredValue && !caseName) {
            setIsEnteredValueValid(false);
            setIsCaseNameValid(false);
            return;
        }

        if (!enteredValue) {
            setIsEnteredValueValid(false);
            return;
        }

        setIsEnteredValueValid(true);

        if (!caseName) {
            setIsCaseNameValid(false);
            return;
        }

        setIsCaseNameValid(true);

        props.onDefine({ word: enteredValue, wordCase: caseName });
        setEnteredValue("");
    };

    return (
        <form className={classes["main-form"]} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <label
                    className={
                        isEnteredValueValid
                            ? classes["control-container"]
                            : classes["control-container"] + " " + classes["control-container_invalid"]
                    }
                >
                    <input type="text" value={enteredValue} onChange={changeHandler} tabIndex={1} />
                    {!enteredValue && <span className={classes.placeholder}>Введите слово</span>}
                </label>
                <Dropdown onSelect={selectHandler} isValid={isCaseNameValid} />
            </div>

            <button className={classes.button} type="submit">
                Применить
            </button>
        </form>
    );
};

export default MainForm;
