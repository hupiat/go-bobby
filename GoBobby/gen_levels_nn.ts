import { bundleResourceIO } from "@tensorflow/tfjs-react-native";
import { WallProtocol } from "./src/engine/IGridProtocol";

const modelJSON = require('./gen_levels_model/model.json');
const modelWeights = require('./gen_levels_model/weights.bin');

const tf = require("@tensorflow/tfjs");

const normalization = (i: number, data: number) => {
    Math.abs(Math.round(data * 10));
    if (i % 2 === 1 && data > 30) {
        return 30;
    }
    if (i % 2 === 1 && data > 13) {
        return 13;
    }
    if (data === 0) {
        return 1;
    }
    return data;
}

export async function generateWallsJSONFromGenerativeModel(exit: [number, number]): Promise<WallProtocol[]> {
    await tf.ready();
    const model = await tf.loadLayersModel((
        bundleResourceIO(modelJSON, modelWeights)
    ));

    const inputTensor = tf.tensor2d(exit, [1, 2]);

    const prediction = model.predict(inputTensor);

    const positions = (prediction as any).arraySync()[0];
    const roundedPositions = positions.map(normalization);

    const walls = [];
    for (let i = 0; i < roundedPositions.length; i += 2) {
        walls.push({
            position: [roundedPositions[i], roundedPositions[i + 1]],
            type: Math.random() < 0.5 ? 'brick' : 'ice'
        });
    }

    return walls as WallProtocol[]; 
}