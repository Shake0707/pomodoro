import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPomodoro, TColor, TFont } from "../../types";

export interface ISettings {
    pomodoro: IPomodoro;
    isOpen: boolean;
}

const initialState: ISettings = {
    isOpen: false,
    pomodoro: {
        styles: {
            color: "",
            font: ""
        }
    }
}

export const styleSettingsSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
        applyColor: (state, dispatch: PayloadAction<{ color: TColor }>) => {
            state.pomodoro.styles.color = dispatch.payload.color;
        },
        applyFont: (state, dispatch: PayloadAction<{ font: TFont }>) => {
            state.pomodoro.styles.font = dispatch.payload.font;
        },
        applySetting: (state) => {
            document.body.className = state.pomodoro.styles.color;
            document.querySelector(":root")!.className = state.pomodoro.styles.font;
            state.isOpen = false;
        }
    }
})

export default styleSettingsSlice.reducer;
export const { toggleIsOpen, applySetting, applyColor, applyFont } = styleSettingsSlice.actions;