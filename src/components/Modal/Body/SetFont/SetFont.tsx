import { FC } from 'react';
import classes from "./style.module.css";
import Changer from '../Changer/Changer';
import { handleChange } from '../setStyesLogick';
import { useAppDispatch } from '../../../../store/store';

const SetFont: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={classes.frame}>
            <p className={classes.title}>font</p>
            <form className={classes.changers_frame} onChange={e => handleChange(e, 'font', dispatch)}>
                <Changer defaultChecked={true} id='' name='font' checkType='font' />
                <Changer defaultChecked={false} id='roboto' name='font' checkType='font' />
                <Changer defaultChecked={false} id='space' name='font' checkType='font' />
            </form>
        </div>
    )
}

export default SetFont