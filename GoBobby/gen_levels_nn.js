const tf = require("@tensorflow/tfjs");
require("tfjs-node-save");
const LEVELS = require("./50_logical_levels.json");

// @see gen_levels.py

// Labels :
// 
// - playerStart
// - exit
// - walls 

// Pre-processing data

const UNSOLVABLE_LEVELS = [22, 34, 43, 44, 49]

// Defining model

const MODEL_OPTIONS = {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log?.loss}`)
    }
};

const model = tf.sequential({
    layers: [
      tf.layers.dense({inputShape: [3], units: 32, activation: 'relu'}),
      tf.layers.dense({units: 100, activation: 'softmax'}),
    ]
});
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});


// Processing training data
async function processData() {
    for (const level of LEVELS) {
        await model.fit({"playerStart": tf.tensor1d(level.playerStart)}, {"exit": tf.tensor1d(level.exit)}, MODEL_OPTIONS);
        for (const wall of level.walls) {
            await model.fit({"wallType": tf.tensor1d([wall.type === "brick" ? 1 : 0])}, {"wallPosition": tf.tensor1d(wall.position)}, MODEL_OPTIONS);
        }
        if (UNSOLVABLE_LEVELS.includes(level.name)) {
            await model.fit({ "winnable": tf.tensor1d([0]) }, {"name": tf.tensor1d([level.name])}, MODEL_OPTIONS);
        } else {
            await model.fit({ "winnable": tf.tensor1d([1]) }, {"name": tf.tensor1d([level.name])}, MODEL_OPTIONS);
        }
    }
}

processData().then(() => model.save("file://./gen_levels_model")).catch(console.error);