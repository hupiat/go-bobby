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
      tf.layers.dense({inputShape: [2], units: LEVELS.length, activation: 'relu'}),
      tf.layers.dense({units: 2, activation: 'softmax'}),
    ]
});
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});


// Processing training data
async function processData() {
    for (const level of LEVELS) {
        const playerStartTensor = tf.tensor2d([level.playerStart], [1, 2]);
        const exitTensor = tf.tensor2d([level.exit], [1, 2]);

        console.log('Player Start Shape:', playerStartTensor.shape);
        console.log('Exit Shape:', exitTensor.shape);
        
        // Training on playerStart and exit
        await model.fit(playerStartTensor, exitTensor, MODEL_OPTIONS);

        const brick_walls = [], ice_walls = [];
        for (const wall of level.walls) {
            if (wall.type === "brick") {
                brick_walls.push(wall.position);
            } else {
                ice_walls.push(wall.position);
            }
        }

        if (brick_walls.length > 0) {
            const brickWallsTensor = tf.tensor2d(brick_walls, [brick_walls.length, 2]);
            const brickInputTensor = tf.tensor2d(new Array(brick_walls.length).fill([1, 1]), [brick_walls.length, 2]);

            console.log('Brick Walls Shape:', brickWallsTensor.shape);
            console.log('Brick Input Shape:', brickInputTensor.shape);

            await model.fit(brickInputTensor, brickWallsTensor, MODEL_OPTIONS);
        }

        if (ice_walls.length > 0) {
            const iceWallsTensor = tf.tensor2d(ice_walls, [ice_walls.length, 2]);
            const iceInputTensor = tf.tensor2d(new Array(ice_walls.length).fill([0.5, 0.5]), [ice_walls.length, 2]);

            console.log('Ice Walls Shape:', iceWallsTensor.shape);
            console.log('Ice Input Shape:', iceInputTensor.shape);

            await model.fit(iceInputTensor, iceWallsTensor, MODEL_OPTIONS);
        }

        const winnableTensor = UNSOLVABLE_LEVELS.includes(level.name) 
            ? tf.tensor2d([[0, 0]], [1, 2])
            : tf.tensor2d([[1, 1]], [1, 2]);


        await model.fit(playerStartTensor, winnableTensor, MODEL_OPTIONS);
    }
}

processData().then(() => model.save("file://./gen_levels_model")).catch(console.error);