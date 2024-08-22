const tf = require("@tensorflow/tfjs");
const fs = require("fs");
require("tfjs-node-save");

// Charger le modèle
async function generateWallsJSON() {
    const model = await tf.loadLayersModel('file://./gen_levels_model/model.json');

    // Exemple de tenseur d'entrée (à remplacer par vos données réelles)
    const inputTensor = tf.tensor2d([1, 1], [1, 2]);

    // Effectuer la prédiction
    const prediction = model.predict(inputTensor);

    // Obtenir les positions du tenseur et arrondir les valeurs
    const positions = prediction.arraySync()[0]; // Obtenir la première prédiction sous forme de tableau
    const roundedPositions = positions.map(value => Math.round(value * 10)); // Arrondir les valeurs

    // Diviser les positions en paires (x, y)
    const walls = [];
    for (let i = 0; i < roundedPositions.length; i += 2) {
        walls.push({
            position: [roundedPositions[i], roundedPositions[i + 1]],
            type: Math.random() < 0.5 ? 'brick' : 'ice'
        });
    }

    // Créer le fichier JSON
    const outputJson = JSON.stringify(walls, null, 4);
    fs.writeFileSync("generated_walls.json", outputJson);

    console.log("JSON file generated: generated_walls.json");
}

generateWallsJSON().catch(console.error);