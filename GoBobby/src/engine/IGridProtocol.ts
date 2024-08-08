import { useMemo } from 'react';
import {WallType} from '../graphics/Wall';

export type GamePosition = [number, number];
export type WallProtocol = {
  position: GamePosition;
  type: WallType;
};

export interface IGridProtocol {
  readonly name?: number;
  walls: WallProtocol[];
  removed: WallProtocol[];
  playerStart: GamePosition;
  exit: GamePosition;
}

export const LEVELS: IGridProtocol[] = [{
  playerStart: [10, 10],
  removed: [],
  walls: [],
  exit: [15, 10],
},
{
  playerStart: [10, 10],
  removed: [],
  walls: [{
    position: [11, 11],
    type: "brick"
  }, {
    position: [12, 12],
    type: "brick"
  }],
  exit: [17, 12],
},
{
  playerStart: [5, 3],
  removed: [],
  walls: [{
    position: [6, 1],
    type: "brick"
  }, {
    position: [6, 2],
    type: "brick"
  }, {
    position: [6, 3],
    type: "brick"
  }, {
    position: [1, 7],
    type: "brick"
  }],
  exit: [19, 6],
},
{
  playerStart: [7, 6],
  removed: [],
  walls: [{
    position: [6, 1],
    type: "brick"
  }, {
    position: [6, 2],
    type: "brick"
  }, {
    position: [6, 10],
    type: "brick"
  }, {
    position: [1, 7],
    type: "brick"
  }],
  exit: [19, 6],

  // GENERATED USING gen_levels.py and CHAT GPT
},
    {
        "name": 0,
        "playerStart": [
            25,
            6
        ],
        "exit": [
            28,
            12
        ],
        "walls": [
            {
                "position": [
                    26,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 1,
        "playerStart": [
            16,
            8
        ],
        "exit": [
            19,
            10
        ],
        "walls": [
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 2,
        "playerStart": [
            10,
            12
        ],
        "exit": [
            27,
            12
        ],
        "walls": [
            {
                "position": [
                    13,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 3,
        "playerStart": [
            19,
            11
        ],
        "exit": [
            3,
            6
        ],
        "walls": [
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 4,
        "playerStart": [
            8,
            0
        ],
        "exit": [
            23,
            6
        ],
        "walls": [
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 5,
        "playerStart": [
            20,
            1
        ],
        "exit": [
            26,
            12
        ],
        "walls": [
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 6,
        "playerStart": [
            13,
            2
        ],
        "exit": [
            22,
            1
        ],
        "walls": [
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 7,
        "playerStart": [
            22,
            4
        ],
        "exit": [
            17,
            0
        ],
        "walls": [
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 8,
        "playerStart": [
            29,
            3
        ],
        "exit": [
            11,
            7
        ],
        "walls": [
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 9,
        "playerStart": [
            30,
            0
        ],
        "exit": [
            26,
            12
        ],
        "walls": [
            {
                "position": [
                    29,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 10,
        "playerStart": [
            1,
            1
        ],
        "exit": [
            13,
            1
        ],
        "walls": [
            {
                "position": [
                    2,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 11,
        "playerStart": [
            8,
            2
        ],
        "exit": [
            4,
            10
        ],
        "walls": [
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 12,
        "playerStart": [
            3,
            12
        ],
        "exit": [
            26,
            11
        ],
        "walls": [
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 13,
        "playerStart": [
            23,
            9
        ],
        "exit": [
            16,
            10
        ],
        "walls": [
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 14,
        "playerStart": [
            7,
            12
        ],
        "exit": [
            7,
            13
        ],
        "walls": [
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 15,
        "playerStart": [
            22,
            1
        ],
        "exit": [
            17,
            2
        ],
        "walls": [
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    11
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 16,
        "playerStart": [
            29,
            7
        ],
        "exit": [
            6,
            12
        ],
        "walls": [
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 17,
        "playerStart": [
            12,
            7
        ],
        "exit": [
            5,
            8
        ],
        "walls": [
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 18,
        "playerStart": [
            5,
            12
        ],
        "exit": [
            18,
            7
        ],
        "walls": [
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 19,
        "playerStart": [
            21,
            4
        ],
        "exit": [
            12,
            7
        ],
        "walls": [
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 20,
        "playerStart": [
            12,
            9
        ],
        "exit": [
            10,
            13
        ],
        "walls": [
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    12
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 21,
        "playerStart": [
            22,
            3
        ],
        "exit": [
            17,
            0
        ],
        "walls": [
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 22,
        "playerStart": [
            28,
            13
        ],
        "exit": [
            7,
            10
        ],
        "walls": [
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 23,
        "playerStart": [
            11,
            0
        ],
        "exit": [
            23,
            0
        ],
        "walls": [
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    8
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 24,
        "playerStart": [
            27,
            7
        ],
        "exit": [
            27,
            2
        ],
        "walls": [
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 25,
        "playerStart": [
            14,
            5
        ],
        "exit": [
            19,
            8
        ],
        "walls": [
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 26,
        "playerStart": [
            30,
            11
        ],
        "exit": [
            23,
            4
        ],
        "walls": [
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 27,
        "playerStart": [
            19,
            4
        ],
        "exit": [
            14,
            9
        ],
        "walls": [
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 28,
        "playerStart": [
            17,
            13
        ],
        "exit": [
            4,
            8
        ],
        "walls": [
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 29,
        "playerStart": [
            13,
            1
        ],
        "exit": [
            9,
            2
        ],
        "walls": [
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 30,
        "playerStart": [
            2,
            8
        ],
        "exit": [
            30,
            3
        ],
        "walls": [
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 31,
        "playerStart": [
            24,
            9
        ],
        "exit": [
            8,
            1
        ],
        "walls": [
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 32,
        "playerStart": [
            28,
            12
        ],
        "exit": [
            1,
            5
        ],
        "walls": [
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 33,
        "playerStart": [
            23,
            3
        ],
        "exit": [
            14,
            1
        ],
        "walls": [
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 34,
        "playerStart": [
            24,
            13
        ],
        "exit": [
            8,
            9
        ],
        "walls": [
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 35,
        "playerStart": [
            13,
            8
        ],
        "exit": [
            25,
            8
        ],
        "walls": [
            {
                "position": [
                    16,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    7
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 36,
        "playerStart": [
            25,
            0
        ],
        "exit": [
            4,
            7
        ],
        "walls": [
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 37,
        "playerStart": [
            6,
            6
        ],
        "exit": [
            8,
            4
        ],
        "walls": [
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 38,
        "playerStart": [
            20,
            6
        ],
        "exit": [
            27,
            1
        ],
        "walls": [
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 39,
        "playerStart": [
            13,
            1
        ],
        "exit": [
            17,
            0
        ],
        "walls": [
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 40,
        "playerStart": [
            8,
            0
        ],
        "exit": [
            15,
            9
        ],
        "walls": [
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 41,
        "playerStart": [
            1,
            13
        ],
        "exit": [
            18,
            11
        ],
        "walls": [
            {
                "position": [
                    2,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 42,
        "playerStart": [
            30,
            5
        ],
        "exit": [
            19,
            9
        ],
        "walls": [
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 43,
        "playerStart": [
            4,
            12
        ],
        "exit": [
            0,
            10
        ],
        "walls": [
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 44,
        "playerStart": [
            30,
            1
        ],
        "exit": [
            22,
            11
        ],
        "walls": [
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    9
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 45,
        "playerStart": [
            12,
            5
        ],
        "exit": [
            7,
            12
        ],
        "walls": [
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 46,
        "playerStart": [
            20,
            5
        ],
        "exit": [
            28,
            13
        ],
        "walls": [
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 47,
        "playerStart": [
            2,
            2
        ],
        "exit": [
            22,
            11
        ],
        "walls": [
            {
                "position": [
                    4,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 48,
        "playerStart": [
            6,
            3
        ],
        "exit": [
            19,
            3
        ],
        "walls": [
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 49,
        "playerStart": [
            21,
            11
        ],
        "exit": [
            24,
            0
        ],
        "walls": [
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    2
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 50,
        "playerStart": [
            0,
            0
        ],
        "exit": [
            6,
            13
        ],
        "walls": [
            {
                "position": [
                    1,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 51,
        "playerStart": [
            2,
            1
        ],
        "exit": [
            20,
            10
        ],
        "walls": [
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 52,
        "playerStart": [
            13,
            1
        ],
        "exit": [
            19,
            2
        ],
        "walls": [
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 53,
        "playerStart": [
            12,
            3
        ],
        "exit": [
            25,
            0
        ],
        "walls": [
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 54,
        "playerStart": [
            22,
            0
        ],
        "exit": [
            4,
            0
        ],
        "walls": [
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 55,
        "playerStart": [
            13,
            2
        ],
        "exit": [
            29,
            5
        ],
        "walls": [
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 56,
        "playerStart": [
            0,
            6
        ],
        "exit": [
            15,
            6
        ],
        "walls": [
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 57,
        "playerStart": [
            20,
            4
        ],
        "exit": [
            23,
            7
        ],
        "walls": [
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 58,
        "playerStart": [
            21,
            1
        ],
        "exit": [
            13,
            11
        ],
        "walls": [
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 59,
        "playerStart": [
            0,
            5
        ],
        "exit": [
            25,
            13
        ],
        "walls": [
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 60,
        "playerStart": [
            3,
            8
        ],
        "exit": [
            12,
            11
        ],
        "walls": [
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 61,
        "playerStart": [
            28,
            7
        ],
        "exit": [
            2,
            1
        ],
        "walls": [
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    8
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 62,
        "playerStart": [
            24,
            2
        ],
        "exit": [
            5,
            1
        ],
        "walls": [
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 63,
        "playerStart": [
            20,
            4
        ],
        "exit": [
            9,
            5
        ],
        "walls": [
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 64,
        "playerStart": [
            23,
            5
        ],
        "exit": [
            24,
            9
        ],
        "walls": [
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 65,
        "playerStart": [
            16,
            11
        ],
        "exit": [
            11,
            2
        ],
        "walls": [
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 66,
        "playerStart": [
            4,
            9
        ],
        "exit": [
            5,
            12
        ],
        "walls": [
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 67,
        "playerStart": [
            28,
            6
        ],
        "exit": [
            16,
            9
        ],
        "walls": [
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 68,
        "playerStart": [
            5,
            9
        ],
        "exit": [
            17,
            11
        ],
        "walls": [
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    2
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 69,
        "playerStart": [
            26,
            3
        ],
        "exit": [
            15,
            0
        ],
        "walls": [
            {
                "position": [
                    24,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 70,
        "playerStart": [
            23,
            0
        ],
        "exit": [
            19,
            3
        ],
        "walls": [
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 71,
        "playerStart": [
            19,
            13
        ],
        "exit": [
            26,
            2
        ],
        "walls": [
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 72,
        "playerStart": [
            20,
            10
        ],
        "exit": [
            7,
            9
        ],
        "walls": [
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    1
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 73,
        "playerStart": [
            16,
            5
        ],
        "exit": [
            1,
            1
        ],
        "walls": [
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 74,
        "playerStart": [
            16,
            2
        ],
        "exit": [
            4,
            0
        ],
        "walls": [
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 75,
        "playerStart": [
            15,
            3
        ],
        "exit": [
            7,
            2
        ],
        "walls": [
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 76,
        "playerStart": [
            13,
            2
        ],
        "exit": [
            25,
            0
        ],
        "walls": [
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 77,
        "playerStart": [
            0,
            3
        ],
        "exit": [
            17,
            2
        ],
        "walls": [
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 78,
        "playerStart": [
            30,
            11
        ],
        "exit": [
            11,
            0
        ],
        "walls": [
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    2
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 79,
        "playerStart": [
            26,
            5
        ],
        "exit": [
            1,
            7
        ],
        "walls": [
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 80,
        "playerStart": [
            10,
            8
        ],
        "exit": [
            21,
            11
        ],
        "walls": [
            {
                "position": [
                    11,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 81,
        "playerStart": [
            23,
            8
        ],
        "exit": [
            23,
            11
        ],
        "walls": [
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 82,
        "playerStart": [
            11,
            1
        ],
        "exit": [
            9,
            9
        ],
        "walls": [
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 83,
        "playerStart": [
            11,
            7
        ],
        "exit": [
            10,
            9
        ],
        "walls": [
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 84,
        "playerStart": [
            2,
            5
        ],
        "exit": [
            0,
            11
        ],
        "walls": [
            {
                "position": [
                    1,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 85,
        "playerStart": [
            25,
            12
        ],
        "exit": [
            0,
            13
        ],
        "walls": [
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    1
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 86,
        "playerStart": [
            21,
            6
        ],
        "exit": [
            23,
            9
        ],
        "walls": [
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 87,
        "playerStart": [
            3,
            3
        ],
        "exit": [
            0,
            7
        ],
        "walls": [
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    8
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 88,
        "playerStart": [
            22,
            6
        ],
        "exit": [
            21,
            11
        ],
        "walls": [
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 89,
        "playerStart": [
            2,
            0
        ],
        "exit": [
            24,
            3
        ],
        "walls": [
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 90,
        "playerStart": [
            26,
            11
        ],
        "exit": [
            11,
            13
        ],
        "walls": [
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 91,
        "playerStart": [
            16,
            12
        ],
        "exit": [
            20,
            0
        ],
        "walls": [
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    3
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 92,
        "playerStart": [
            7,
            12
        ],
        "exit": [
            27,
            10
        ],
        "walls": [
            {
                "position": [
                    9,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    6
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 93,
        "playerStart": [
            19,
            2
        ],
        "exit": [
            4,
            10
        ],
        "walls": [
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    9
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 94,
        "playerStart": [
            9,
            5
        ],
        "exit": [
            1,
            5
        ],
        "walls": [
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 95,
        "playerStart": [
            18,
            13
        ],
        "exit": [
            22,
            8
        ],
        "walls": [
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 96,
        "playerStart": [
            15,
            6
        ],
        "exit": [
            10,
            6
        ],
        "walls": [
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    8,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    0
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 97,
        "playerStart": [
            19,
            6
        ],
        "exit": [
            22,
            10
        ],
        "walls": [
            {
                "position": [
                    21,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    22,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    0,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 98,
        "playerStart": [
            22,
            5
        ],
        "exit": [
            11,
            3
        ],
        "walls": [
            {
                "position": [
                    21,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    30,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    2,
                    1
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    28,
                    12
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    13,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    9
                ],
                "type": "brick"
            }
        ],
        "removed": []
    },
    {
        "name": 99,
        "playerStart": [
            2,
            10
        ],
        "exit": [
            28,
            8
        ],
        "walls": [
            {
                "position": [
                    4,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    3,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    5,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    4,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    6,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    9,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    10,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    11,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    14,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    16,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    17,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    25,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    24,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    26,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    11
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    10
                ],
                "type": "brick"
            },
            {
                "position": [
                    29,
                    9
                ],
                "type": "brick"
            },
            {
                "position": [
                    27,
                    8
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    7
                ],
                "type": "brick"
            },
            {
                "position": [
                    1,
                    0
                ],
                "type": "brick"
            },
            {
                "position": [
                    12,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    2
                ],
                "type": "brick"
            },
            {
                "position": [
                    18,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    20,
                    13
                ],
                "type": "brick"
            },
            {
                "position": [
                    23,
                    4
                ],
                "type": "brick"
            },
            {
                "position": [
                    19,
                    6
                ],
                "type": "brick"
            },
            {
                "position": [
                    7,
                    5
                ],
                "type": "brick"
            },
            {
                "position": [
                    15,
                    3
                ],
                "type": "brick"
            }
        ],
        "removed": []
    }
];