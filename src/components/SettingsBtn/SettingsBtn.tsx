import { FC, MouseEventHandler } from 'react'
import classes from "./style.module.css";
import { useAppDispatch } from '../../store/store';
import { toggleIsOpen } from '../../store/features/styleSettingsSlice';
import shape from "../../assets/shape.svg";

const SettingsBtn: FC = () => {
    const dispatch = useAppDispatch();
    const hanldeClick: MouseEventHandler<HTMLImageElement> = () => {
        dispatch(toggleIsOpen());
    }

    return (
        <div className={classes.frame}>
            <img src={shape} alt="" onClick={hanldeClick} />
        </div>
    )
}

export default SettingsBtn;