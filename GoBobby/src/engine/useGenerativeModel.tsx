import { useCallback } from "react";
import { IGridProtocol, GamePosition } from "./IGridProtocol";
import { generateWallsJSONFromGenerativeModel } from "../../gen_levels_nn";

export interface IGenerativeModel {
    loadGenerativeModel: () => Promise<IGridProtocol>;
}

export default function useGenerativeModel(): IGenerativeModel {

    const loadGenerativeModel = useCallback(async (): Promise<IGridProtocol> => {
        const generatePosition = (type: "x" | "y") => {
            // generation with normalization
            const pos = Math.round(Math.random() * 10);
            if (pos === 0) {
                return 1;
            }
            if (pos > 13 && type === "y") {
                return 13;
            }
            if (pos > 30 && type === "x") {
                return 30;
            }
            return pos;
        };

        const playerStart: [number, number] = [generatePosition("x"), generatePosition("y")];
        const exit: [number, number] = [generatePosition("x"), generatePosition("y")];

        const walls = await generateWallsJSONFromGenerativeModel(exit);
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