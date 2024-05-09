import { Dispatch, KeyboardEventHandler, SetStateAction } from "react";

interface IParams {
    setVal: Dispatch<SetStateAction<string>>;
    val: string;
}

interface IReturnType {
    handleChange: KeyboardEventHandler<HTMLInputElement>;
}

type TMyFunc = (params: IParams) => IReturnType;

export const usePress: TMyFunc = ({ setVal, val }) => {
    const handleChange: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === "Backspace") {
            if (!val[1]) {
                setVal("0");
                return;
            }
            setVal(val.slice(0, val.length - 1));
            return;
        }
        if (val.length >= 2) {
            e.preventDefault();
            return;
        }
        if (!+e.key && e.key !== "0") {
            e.preventDefault();
            return;
        }

        if (val[0] === "0") {
            setVal(e.key);
            return;
        }
        setVal(prev => {
            return +prev + e.key;
        });
    }

    return { handleChange };
}