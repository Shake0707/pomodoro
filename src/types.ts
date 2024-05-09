export type TColor = "" | "cyan" | "purple";
export type TFont = "" | "roboto" | "space";

export interface IPomodoro {
    styles: {
        color: TColor;
        font: TFont;
    }
}

interface ITimer {
    seconds: number;
    isPause: boolean;
    myDeg: number;
}

export interface ITimers {
    pomodoro: ITimer;
    shortBreak: ITimer;
    longBreak: ITimer;
}

export type TMode = "pomdoro" | "short break" | "long break";
export type TTimerSlice = "pomodoro" | "shortBreak" | "longBreak";