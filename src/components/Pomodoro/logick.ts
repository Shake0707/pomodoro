function converterNum(num: number): string | number {
    return num < 10 ? "0" + num : num;
}

export function convertToTime(seconds: number, type: "seconds" | "minutes"): string | number {
    const minutes = Math.floor(seconds / 60);
    const mySeconds = seconds - minutes * 60;

    return converterNum(type === "minutes" ? minutes : mySeconds);
}

export function btnTitle(seconds: number): string {
    if (seconds === 0) {
        return "restart"
    } else if (seconds > 0) {
        return "start"
    }
    return ""
}