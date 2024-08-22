import { useCallback } from "react";
import { IGridProtocol, GamePosition } from "./IGridProtocol";
import { generateWallsJSONFromGenerativeModel } from "../../gen_levels_nn";

export interface IGenerativeModel {
    loadGenerativeModel: () => Promise<IGridProtocol>;
}

export default function useGenerativeModel(): IGenerativeModel {

    const loadGenerativeModel = useCallback(async (): Promise<IGridProtocol> => {
        const generatePosition = () => Math.round(Math.random() * 10);

        const playerStart = [generatePosition(), generatePosition()];
        const exit = [generatePosition(), generatePosition()];

        const walls = await generateWallsJSONFromGenerativeModel();
        return {
            name: -1,
            playerStart: playerStart as GamePosition,
            exit: exit as GamePosition,
            removed: [],
            walls
        }
    }, []);

    return { loadGenerativeModel }
}