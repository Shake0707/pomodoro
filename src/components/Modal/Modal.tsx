import { FC, MouseEventHandler } from 'react';
import classes from "./style.module.css";
import ModalHeader from './Header/ModalHeader';
import ModalBody from './Body/ModalBody';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { toggleIsOpen, applySetting } from '../../store/features/styleSettingsSlice';
import { setTimer } from '../../store/features/timerSlice';

const Modal: FC = () => {
    const isOpen = useAppSelector(store => store.styleSettings.isOpen);
    const dispatch = useAppDispatch();

    const handleClick: MouseEventHandler<HTMLDivElement> = e => {
        if ((e.target as HTMLElement).className === classes.container) {
            dispatch(toggleIsOpen());
        }
    }

    const applySettingsBtn = () => {
        const pomodoro = localStorage.getItem("pomodoro") as string;
        const shortBreak = localStorage.getItem("shortBreak") as string;
        const longBreak = localStorage.getItem("longBreak") as string;

        dispatch(applySetting());
        dispatch(setTimer({
            newState: {
                pomodoro: {
                    seconds: pomodoro === "0" ? 1800 : +pomodoro,
                    isPause: true, myDeg: 360
                },
                shortBreak: {
                    seconds: shortBreak === "0" ? 600 : +shortBreak,
                    isPause: true, myDeg: 360
                },
                longBreak: {
                    seconds: longBreak === "0" ? 1500 : +longBreak,
                    isPause: true, myDeg: 360
                }
            }
        }));
    }

    return (
        <div className={classes.container} style={isOpen ? {
            opacity: 1,
            zIndex: 3,
        } : {}}
            onClick={handleClick}
        >
            <div className={classes.frame}>
                <ModalHeader />
                <div className={classes.headerLine}></div>
                <ModalBody />
                <button className={classes.btn} onClick={applySettingsBtn}>Apply</button>
            </div>
        </div>
    )
}

export default Modal