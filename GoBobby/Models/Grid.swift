//
//  Grid.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import Foundation

public enum Case: Int {
    case empty
    case brick
    case player
    case end
}

public struct Grid {
    static let CASE_PX: Int = 48
    
    var cases: [[Case]]
    var blocks: [Block]
    var end: Block
    
    init(player: Player, blocks: [Block], end: Block) {
        cases = Array(repeating: Array(repeating: Case.empty, count: GameScene.MAX_HEIGHT), count: GameScene.MAX_WIDTH)
        self.blocks = blocks
        self.end = end
        for i in 0...GameScene.MAX_WIDTH - 1 {
            for j in 0...GameScene.MAX_HEIGHT - 1 {
                if end.isAtPos(i: i, j: j) {
                    // Setting up end pos
                    cases[i][j] = Case.end
                } else if player.isAtPos(i: i, j: j) {
                    // Initializing player
                    cases[i][j] = Case.player
                } else if i == 0 || i == GameScene.MAX_WIDTH - 1 || j == 0 || j == GameScene.MAX_HEIGHT - 1 {
                    // Initializing sides bricks
                    cases[i][j] = Case.brick
                } else if (hasBlock(x: i, y: j)) {
                    // Initializing other bricks
                    cases[i][j] = Case.brick
                }
            }
        }
    }
    
    func iterate(callback: (Int, Int) -> ()) -> Void {
        for i in 0...GameScene.MAX_WIDTH - 1 {
            for j in 0...GameScene.MAX_HEIGHT - 1 {
                callback(i, j)
            }
        }
    }
    
    func iterateThenBreak(callback: (Int, Int) -> Bool) -> Void {
        for i in 0...GameScene.MAX_WIDTH - 1 {
            for j in 0...GameScene.MAX_HEIGHT - 1 {
                if (callback(i, j)) {
                    break
                }
            }
        }
    }
    
    func hasBlock(x: Int, y: Int) -> Bool {
        var hasBlock: Bool = false
        iterateThenBreak(callback: {i, j in
            for block in blocks {
                if block.isAtPos(i: x, j: y) {
                    hasBlock = true
                    return true
                }
            }
            return false
        })
        return hasBlock
    }
    
    func hasWon(player: Player) -> Bool {
        return cases[player.X][player.Y] == Case.end
    }
    
    mutating func movePlayer(player: Player, orientation: Orientation) -> Bool {
        if (hasWon(player: player)) {
            return false
        }
        switch (orientation) {
            case .up:
                if cases[player.X][player.Y + 1] == Case.brick {
                    return false
                }
            case .right:
                if cases[player.X + 1][player.Y] == Case.brick {
                    return false
                }
            case .left:
                if cases[player.X - 1][player.Y] == Case.brick {
                    return false
                }
            case .down:
                if cases[player.X][player.Y - 1] == Case.brick {
                    return false
                }
        }
        cases[player.X][player.Y] = Case.player;
        // Removing old position
        for i in 0...GameScene.MAX_WIDTH - 1 {
            for j in 0...GameScene.MAX_HEIGHT - 1 {
                if cases[i][j] == Case.player {
                    cases[i][j] = Case.empty
                    break
                }
            }
        }
        return true
    }
}
