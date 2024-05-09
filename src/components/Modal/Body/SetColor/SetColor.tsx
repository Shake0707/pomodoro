import { FC } from 'react';
import classes from "./style.module.css";
import Changer from '../Changer/Changer';
import { handleChange } from '../setStyesLogick';
import { useAppDispatch } from '../../../../store/store';

const SetColor: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={classes.frame}>
            <p className={classes.title}>color</p>
            <form className={classes.colorChangers} onChange={e => handleChange(e, 'color', dispatch)}>
                <Changer checkType='color' defaultChecked={true} id='' name='color' />
                <Changer checkType='color' defaultChecked={false} id='cyan' name='color' />
                <Changer checkType='color' defaultChecked={false} id='purple' name='color' />
            </form>
        </div>
    )
}

export default SetColor