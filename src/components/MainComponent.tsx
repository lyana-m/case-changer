import MainForm from "./MainForm";
import RequestList from "./RequestList";
import { defineGender } from "../helpers/gender";
import { defineEnging } from "../helpers/ending";
import { Request } from "../models/request";

import classes from "./MainComponent.module.css";
import { useState } from "react";

const MainComponent = () => {
    const [requests, setRequests] = useState<Request[]>([]);

    const defineHandler = (item: { word: string; wordCase: string }) => {
        const gender = defineGender(item.word);
        const changedWord = defineEnging(item.word, gender, item.wordCase);
        setRequests([{ word: item.word, wordCase: item.wordCase, result: changedWord }, ...requests]);
    };

    return (
        <div className={classes["main-content"]}>
            <h2 className={classes["main-header"]}>Введите существительное в единственном числе</h2>
            <MainForm onDefine={defineHandler} />
            <RequestList requests={requests} />
        </div>
    );
};

export default MainComponent;
