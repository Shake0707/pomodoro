import { FC } from 'react';
import classes from "./style.module.css";
import Block from './Blocks/Block';

const SetTimeBlock: FC = () => {
    return (
        <>
            <h1 className={classes.title}>TIME (MINUTES)</h1>
            <div className={classes.frame}>
                <Block title='pomodoro' type='pomodoro' />
                <Block title='short break' type='shortBreak' />
                <Block title='long break' type='longBreak' />
            </div>
        </>
    )
}

export default SetTimeBlock