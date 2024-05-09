import { FormEvent } from "react";
import { TColor, TFont } from "../../../types";
import { applyColor, applyFont, ISettings, } from "../../../store/features/styleSettingsSlice";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

type TMyFunc = (e: FormEvent<HTMLFormElement>,
    type: "font" | "color",
    dispatch: ThunkDispatch<{
        styleSettings: ISettings;
    }, undefined, UnknownAction>
) => void;

export const handleChange: TMyFunc = (e, type, dispatch) => {
    if (type === "color") {
        const id = (e.target as HTMLInputElement).id as TColor;
        dispatch(applyColor({ color: id }))
    } else {
        const id = (e.target as HTMLInputElement).id as TFont;
        dispatch(applyFont({ font: id }))
    }
}