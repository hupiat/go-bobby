import { bundleResourceIO } from "@tensorflow/tfjs-react-native";
import { WallProtocol } from "./src/engine/IGridProtocol";

const modelJSON = require('./gen_levels_model/model.json');
const modelWeights = require('./gen_levels_model/weights.bin');

const tf = require("@tensorflow/tfjs");

export async function generateWallsJSONFromGenerativeModel(): Promise<WallProtocol[]> {
    await tf.ready();
    const model = await tf.loadLayersModel((
        bundleResourceIO(modelJSON, modelWeights)
    ));

    const inputTensor = tf.tensor2d([1, 1], [1, 2]);

    const prediction = model.predict(inputTensor);

    const positions = (prediction as any).arraySync()[0];
    const roundedPositions = positions.map((value: number) => 
        // normalization
        Math.round(value * 10));

    const walls = [];
    for (let i = 0; i < roundedPositions.length; i += 2) {
        walls.push({
            position: [roundedPositions[i], roundedPositions[i + 1]],
            type: Math.random() < 0.5 ? 'brick' : 'ice'
        });
    }

    return walls as WallProtocol[]; 
}