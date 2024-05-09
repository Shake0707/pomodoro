import { FC } from "react";
import Main from "./Main/Main";
import ShortBr from "./ShortBr/ShortBr";
import LongBr from "./LongBr/LongBr";

const Pomodoro: FC = () => {
    return (
        <>
            <Main />
            <ShortBr />
            <LongBr />
        </>
    )
}

export default Pomodoro