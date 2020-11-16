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
    
    init(player: Player, maxWidth: Int, maxHeight: Int) {
        MAX_WIDTH = maxWidth
        MAX_HEIGHT = maxHeight
        cases = Array(repeating: Array(repeating: Case.empty, count: maxHeight), count: maxWidth)
        
        // Initializing sides bricks
        for i in 0...MAX_WIDTH - 1 {
            for j in 0...MAX_HEIGHT - 1 {
                if i == player.X && j == player.Y {
                    cases[i][j] = Case.player
                } else if i == 0 || i == MAX_WIDTH - 1 || j == 0 || j == MAX_HEIGHT - 1 {
                    cases[i][j] = Case.brick
                } else {
                    cases[i][j] = Case.empty
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
