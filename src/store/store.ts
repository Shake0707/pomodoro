import { configureStore } from "@reduxjs/toolkit";
import { styleSettingsSlice } from "./features/styleSettingsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { timerSlice } from "./features/timerSlice";
import { pomodorModeSlice } from "./features/pomodoroModeSlice";

export const store = configureStore({
    reducer: {
        styleSettings: styleSettingsSlice.reducer,
        timer: timerSlice.reducer,
        mode: pomodorModeSlice.reducer
    }
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;