import { FC, MouseEventHandler, useEffect } from 'react'
import classes from "../style.module.css";
import { useAppSelector } from '../../../store/store';
import { convertToTime } from '../logick';
import { useDispatch } from 'react-redux';
import { changeDeg, increment, setTimer, toggleIsPause } from '../../../store/features/timerSlice';
import { useSound } from '../../../hooks/useSound';
import soundComplated from "../../../assets/sounds/complated.mp3";
import soundStart from "../../../assets/sounds/start.mp3";

let myInterval: number;

const LongBr: FC = () => {
    const mode = useAppSelector(state => state.mode.mode);
    const timers = useAppSelector(state => state.timer.timers);
    const { isPause, seconds, myDeg } = timers.longBreak;
    const dispatch = useDispatch();
    const [play] = useSound({ url: soundComplated });
    const [start] = useSound({ url: soundStart });

    useEffect(() => {
        if (!isPause) {
            myInterval = setInterval(() => {
                dispatch(increment({ type: 'longBreak' }));
            }, 1000)
        } else {
            clearInterval(myInterval);
        }
        if (seconds === 0) {
            clearInterval(myInterval);
        }
    }, [isPause]);

    useEffect(() => {
        if (seconds === 0) {
            clearInterval(myInterval);
            play();
            setTimeout(() => {
                dispatch(setTimer({
                    newState: {
                        ...timers, longBreak: {
                            isPause: true,
                            myDeg: 360,
                            seconds: 1800
                        }
                    }
                }));
            }, 1000);
        }
        dispatch(changeDeg({ type: "longBreak" }));
    }, [seconds]);

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        dispatch(toggleIsPause({ type: "longBreak" }));
        start();
    }

    return (
        <div className={classes.container}
            style={{
                display: mode === 'long break' ? "block" : "none"
            }}
            onClick={handleClick}
        >
            <div className={classes.frame}>
                <div className={classes.progress}
                    style={{
                        backgroundImage: `conic-gradient(var(--color) ${myDeg}deg, transparent 0deg)`
                    }}
                >
                    <div className={classes.progress_text}>
                        <div>
                            <span>{convertToTime(seconds, 'minutes')}</span>
                            :
                            <span>{convertToTime(seconds, 'seconds')}</span>
                        </div>
                        <p style={{ fontSize: 16 }}>{isPause ? "start" : "pause"}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LongBr