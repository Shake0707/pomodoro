interface IParams {
    url: string;
    params?: {
        volume: number;
    }
}

type TReturnType = [() => void];

type MyFunction = (params: IParams) => TReturnType;

export const useSound: MyFunction = ({ url, params }) => {
    const audio = new Audio(url);

    const play = () => {
        audio.play();
        audio.loop = false;
        audio.volume = params?.volume ? params.volume : 1;
    }

    return [play];
}