import { FC } from "react";
import classes from "./style.module.css";

const Title: FC = () => {
    return (
        <div className={classes.frame}>
            <h1>
                pomodoro
            </h1>
        </div>
    )
}

export default Title