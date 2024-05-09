import { FC, MouseEventHandler } from 'react'
import classes from "./style.module.css";
import { useAppDispatch } from '../../../store/store';
import { toggleIsOpen } from '../../../store/features/styleSettingsSlice';

const ModalHeader: FC = () => {
    const dispatch = useAppDispatch();

    const hanldeClick: MouseEventHandler<HTMLDivElement> = () => {
        dispatch(toggleIsOpen());
    }
    
    return (
        <div className={classes.frame}>
            <h1>Settings</h1>
            <div onClick={hanldeClick}>
                <img src="/x.svg" alt="" />
            </div>
        </div>
    )
}

export default ModalHeader