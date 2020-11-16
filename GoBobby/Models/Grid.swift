//
//  Grid.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import Foundation

enum Case: Int {
    case empty
    case brick
    case player
}

struct Grid {
    static let CASE_PX: Int = 24
    
    let MAX_WIDTH: Int
    let MAX_HEIGHT: Int
    
    var cases: [[Case]]
    
    init(player: Player, maxWidth: Int, maxHeight: Int, blocks: [Block], end: Block) {
        MAX_WIDTH = maxWidth
        MAX_HEIGHT = maxHeight
        cases = Array(repeating: Array(repeating: Case.empty, count: maxHeight), count: maxWidth)
        
        for i in 0...MAX_WIDTH - 1 {
            for j in 0...MAX_HEIGHT - 1 {
                if end.isAtPos(i: i, j: j) {
                    // Setting up end pos
                    cases[i][j] = Case.empty
                } else if player.isAtPos(i: i, j: j) {
                    // Initializing player
                    cases[i][j] = Case.player
                } else if i == 0 || i == MAX_WIDTH - 1 || j == 0 || j == MAX_HEIGHT - 1 {
                    // Initializing sides bricks
                    cases[i][j] = Case.brick
                } else {
                    // Initializing other bricks
                    var hasBlock: Bool = false
                    for block in blocks {
                        if block.isAtPos(i: i, j: j) {
                            cases[i][j] = Case.brick
                            hasBlock = true
                            break
                        }
                    }
                    if (!hasBlock) {
                        cases[i][j] = Case.empty
                    }
                }
            }
        }
    }
    
    func iterate(callback: (Int, Int) -> ()) -> Void {
        for i in 0...MAX_WIDTH - 1 {
            for j in 0...MAX_HEIGHT - 1 {
                callback(i, j)
            }
        }
    }
    
    mutating func movePlayer(player: Player) -> Bool {
        if cases[player.X][player.Y] == Case.brick {
            return false
        } else {
            cases[player.X][player.Y] = Case.player;
            // Removing old position
            for i in 0...MAX_WIDTH - 1 {
                for j in 0...MAX_HEIGHT - 1 {
                    if cases[i][j] == Case.player {
                        cases[i][j] = Case.empty
                        break
                    }
                }
            }
            return true
        }
    }
}
