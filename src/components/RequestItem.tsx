import classes from "./RequestItem.module.css";
import { Request } from "../models/request";
import { cases } from "../helpers/cases";

const RequestItem: React.FC<Request> = (props) => {
    const rusWordCase = cases.find((item) => item.key === props.wordCase);
    return (
        <li className={classes.request}>
            <span>{props.word}</span>
            <span>{rusWordCase!.value}</span>
            <span>{props.result}</span>
        </li>
    );
};

export default RequestItem;
