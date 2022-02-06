import { Fragment, useRef } from "react";
import classes from "./Feedback.module.css";
import ReactDOM from "react-dom";

const BackDrop: React.FC<{ onConfirm: () => void }> = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Modal: React.FC<{ onConfirm: () => void }> = (props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredEmail = emailRef.current?.value;
        const enteredText = textRef.current?.value;

        fetch("https://react-max-fa58c-default-rtdb.europe-west1.firebasedatabase.app/errors.json", {
            method: "POST",
            body: JSON.stringify({ email: enteredEmail, message: enteredText }),
        });
        props.onConfirm();

        if (emailRef.current) {
            emailRef.current.value = "";
        }

        if (textRef.current) {
            textRef.current.value = "";
        }
    };

    return (
        <div className={classes.modal}>
            <form onSubmit={submitHandler} className={classes["feedback-form"]}>
                <input className={classes["feedback-field"]} ref={emailRef} type="email" placeholder="Введите E-mail" />
                <textarea
                    className={classes["feedback-field"]}
                    ref={textRef}
                    rows={5}
                    placeholder="Опишите ошибку"
                ></textarea>
                <button type="submit" className="button">
                    Отправить
                </button>
            </form>
        </div>
    );
};

const Feedback: React.FC<{ onConfirm: () => void }> = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.body)}
            {ReactDOM.createPortal(<Modal onConfirm={props.onConfirm} />, document.body)}
        </Fragment>
    );
};
export default Feedback;
