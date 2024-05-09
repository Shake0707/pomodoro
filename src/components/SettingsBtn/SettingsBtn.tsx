import { FC, MouseEventHandler } from 'react'
import classes from "./style.module.css";
import { useAppDispatch } from '../../store/store';
import { toggleIsOpen } from '../../store/features/styleSettingsSlice';

const SettingsBtn: FC = () => {
    const dispatch = useAppDispatch();
    const hanldeClick: MouseEventHandler<HTMLImageElement> = () => {
        dispatch(toggleIsOpen());
    }

    return (
        <div className={classes.frame}>
            <img src="/shape.svg" alt="" onClick={hanldeClick} />
        </div>
    )
}

export default SettingsBtn;