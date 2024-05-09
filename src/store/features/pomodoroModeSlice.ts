import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMode } from "../../types";

export interface IStateMode {
    mode: TMode;
}

const initialState: IStateMode = {
    mode: "pomdoro"
}

export const pomodorModeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state, dispatch: PayloadAction<{ mode: TMode }>) => {
            state.mode = dispatch.payload.mode;
        }
    }
})

export default pomodorModeSlice.reducer;
export const { toggleMode } = pomodorModeSlice.actions;