import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITimers } from "../../types";

export type TMyType = "pomodoro" | "shortBreak" | "longBreak";

interface IInitialState {
    timers: ITimers;
}

const initialState: IInitialState = {
    timers: {
        pomodoro: {
            isPause: true,
            seconds: 1800,
            myDeg: 360
        },
        shortBreak: {
            isPause: true,
            seconds: 600,
            myDeg: 360
        },
        longBreak: {
            isPause: true,
            seconds: 1800,
            myDeg: 360
        }
    }
}

export const timerSlice = createSlice({
    name: "timerSlice",
    initialState,
    reducers: {
        setTimer: (state, dispatch: PayloadAction<{ newState: ITimers }>) => {
            state.timers = dispatch.payload.newState;
        },
        toggleIsPause: (state, dispatch: PayloadAction<{ type: TMyType }>) => {
            state.timers[dispatch.payload.type].isPause = !state.timers[dispatch.payload.type].isPause;
        },
        increment: (state, dispatch: PayloadAction<{ type: TMyType }>) => {
            state.timers[dispatch.payload.type].seconds = state.timers[dispatch.payload.type].seconds - 1;
        },
        changeDeg: (state, dispatch: PayloadAction<{ type: TMyType }>) => {
            const localNum = localStorage.getItem(dispatch.payload.type) as string;
            let defaultSecunds = "1800";
            switch (dispatch.type) {
                case "shortBreak":
                    defaultSecunds = "600"
                    break;
                case "longBreak":
                    defaultSecunds = "1500"
                    break;
                default:
                    defaultSecunds = "1800";
                    break;
            }
            let gradus = 360 / +(localNum === "0" ? defaultSecunds : localNum);

            if (!state.timers[dispatch.payload.type].isPause) {
                state.timers[dispatch.payload.type].myDeg -= gradus;
            }
        }
    }
})

export default timerSlice.reducer;
export const { setTimer, toggleIsPause, increment, changeDeg } = timerSlice.actions;