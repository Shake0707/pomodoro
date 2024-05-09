import { FC } from 'react'
import SetTimeBlock from './SetTime/SetTimeBlock'
import classes from "./style.module.css";
import SetFont from './SetFont/SetFont';
import SetColor from './SetColor/SetColor';

const ModalBody: FC = () => {
    return (
        <div className={classes.frame}>
            <SetTimeBlock />
            <div className={classes.horizantalRow}></div>
            <SetFont />
            <div className={classes.horizantalRow}></div>
            <SetColor />
        </div>
    );
}

export default ModalBody