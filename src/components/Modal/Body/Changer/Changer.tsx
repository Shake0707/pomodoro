import { FC } from 'react'
import classes from "./style.module.css";
import src from "../../../../assets/complated.svg"

interface IPorps {
    name: string;
    id: string;
    defaultChecked: boolean;
    checkType: "font" | "color";
}

const Changer: FC<IPorps> = ({ defaultChecked, id, name, checkType }) => {
    return (
        <label className={classes.frame}>
            <input type="radio" name={name} id={id} defaultChecked={defaultChecked} />
            {
                checkType === "font" ? (
                    <span className={classes.font}>Aa</span>
                ) : (
                    <span className={classes.color}>
                        <img src={src} alt="" />
                    </span>
                )
            }
            <div></div>
        </label>
    )
}

export default Changer