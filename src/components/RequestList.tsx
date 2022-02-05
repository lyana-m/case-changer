import RequestItem from "./RequestItem";
import { Request } from "../models/request";
import classes from "./RequestList.module.css";

const RequestList: React.FC<{
    requests: Request[];
}> = (props) => {
    return (
        <ul className={classes["request-list"]}>
            {props.requests.map((request) => (
                <RequestItem
                    word={request.word}
                    wordCase={request.wordCase}
                    result={request.result}
                    key={request.word}
                />
            ))}
        </ul>
    );
};

export default RequestList;
