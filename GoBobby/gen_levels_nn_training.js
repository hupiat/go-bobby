const tf = require("@tensorflow/tfjs");
require("tfjs-node-save");
const fs = require('fs');
const LEVELS = require("./50_logical_levels.json");

const MODEL_PATH = "file://./gen_levels_model/model.json";

// Déterminer le nombre maximal de murs dans les niveaux
const maxWalls = Math.max(...LEVELS.map(level => level.walls.length));
const outputSize = maxWalls * 2; // Chaque mur a 2 coordonnées (x, y)

const MODEL_OPTIONS = {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log?.loss}`)
    }
};

async function createOrLoadModel() {
    let model;
    if (fs.existsSync('./gen_levels_model/model.json')) {
        console.log('Loading existing model...');
        model = await tf.loadLayersModel(MODEL_PATH);
    } else {
        console.log('Creating new model...');
        model = tf.sequential({
            layers: [
              tf.layers.dense({inputShape: [2], units: 128, activation: 'relu'}),
              tf.layers.dense({units: outputSize, activation: 'linear'}), // Sortie de taille fixe
            ]
        });
    }
    model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
    return model;
}

async function processData() {
    const model = await createOrLoadModel();

    for (const level of LEVELS) {
        const exitTensor = tf.tensor2d([level.exit], [1, 2]);

        // Préparer les cibles : murs avec padding (remplissage) pour atteindre la taille fixe
        const wallPositions = level.walls.flatMap(wall => wall.position);
        const paddedWallPositions = [...wallPositions, ...new Array(outputSize - wallPositions.length).fill(0)];
        const outputTensor = tf.tensor2d([paddedWallPositions], [1, outputSize]);

        console.log('Player Start Shape:', exitTensor.shape);
        console.log('Output Shape:', outputTensor.shape);

        // Entraîner le modèle avec les positions remplies
        await model.fit(exitTensor, outputTensor, MODEL_OPTIONS);
    }

    // Sauvegarder le modèle mis à jour
    await model.save("file://./gen_levels_model");
    console.log('Model updated and saved.');
}

processData().catch(console.error);