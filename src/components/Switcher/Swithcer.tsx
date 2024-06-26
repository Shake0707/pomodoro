import { FC, FormEventHandler } from 'react';
import classes from "./style.module.css";
import { useAppDispatch, useAppSelector } from '../../store/store';
import { toggleMode } from '../../store/features/pomodoroModeSlice';
import { TMode } from '../../types';
import { setTimer } from '../../store/features/timerSlice';
import { useSound } from '../../hooks/useSound';
import switchSound from "../../assets/sounds/switch.mp3";

const Swithcer: FC = () => {
    const mode = useAppSelector(state => state.mode.mode);
    const dispatch = useAppDispatch();
    const [play] = useSound({ url: switchSound, params: { volume: 0.5 } });


    const handleChange: FormEventHandler<HTMLFormElement> = e => {
        const pomodoroSecs = localStorage.getItem("pomodoro") as string;
        const shortBrSecs = localStorage.getItem("shortBreak") as string;
        const longBrSecs = localStorage.getItem("longBreak") as string;

        const id = ((e.target as HTMLInputElement).id as TMode)
        dispatch(toggleMode({ mode: id }));
        play();
        dispatch(setTimer({
            newState: {
                pomodoro: {
                    seconds: pomodoroSecs === "0" ? 1800 : +pomodoroSecs,
                    isPause: true, myDeg: 360
                },
                shortBreak: {
                    seconds: shortBrSecs === "0" ? 600 : +shortBrSecs,
                    isPause: true, myDeg: 360
                },
                longBreak: {
                    seconds: longBrSecs === "0" ? 1500 : +longBrSecs,
                    isPause: true, myDeg: 360
                }
            }
        }));
    }

    return (
        <div className={classes.container}>
            <form className={classes.frame} onChange={handleChange}>
                <label className={classes.labels}>
                    <input type="radio" name='switcher' id='pomdoro' defaultChecked={mode === 'pomdoro' ? true : false} />
                    <p>pomodoro</p>
                </label>
                <label className={classes.labels}>
                    <input type="radio" name='switcher' id='short break' defaultChecked={mode === 'short break' ? true : false} />
                    <p>short break</p>
                </label>
                <label className={classes.labels}>
                    <input type="radio" name='switcher' id='long break' defaultChecked={mode === 'long break' ? true : false} />
                    <p>long break</p>
                </label>
            </form>
        </div>
    )
}

export default Swithcer