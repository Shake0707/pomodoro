import { FC, MouseEventHandler, useState } from 'react';
import classes from "./style.module.css";
import { usePress } from './logick';
import { TTimerSlice } from '../../../../../types';
import upp from "../../../../../assets/miniUpp.svg";
import down from "../../../../../assets/miniDown.svg";

interface IProps {
    title: 'pomodoro' | 'short break' | 'long break';
    type: TTimerSlice;
}

const Block: FC<IProps> = ({ title, type }) => {
    const [val, setVal] = useState<string>("0");
    const { handleChange } = usePress({ setVal, val });

    const handleUp: MouseEventHandler<HTMLImageElement> = () => {
        setVal(prev => {
            if (+prev === 60) return prev;
            return (+prev + 1).toString();
        });
    }

    const handleDown: MouseEventHandler<HTMLImageElement> = () => {
        setVal(prev => {
            if (+prev === 0) return prev;
            return (+prev - 1).toString();
        });
    }

    const handleCh = () => { };

    localStorage.setItem(type, JSON.stringify(+val * 60));

    return (
        <div className={classes.timesBlock}>
            <span>{title}</span>
            <label className={classes.content}>
                <input type="text" value={val} onKeyDown={handleChange} onChange={handleCh} />
                <div className={classes.images}>
                    <img src={upp} alt="" onClick={handleUp} />
                    <img src={down} alt="" onClick={handleDown} />
                </div>
            </label>
        </div>
    );
}

export default Block