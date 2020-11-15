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
    let MAX_WIDTH = 20
    let MAX_HEIGHT = 30
    
    var grid: [[Case]] = []
    
    init(playerX: Int, playerY: Int) {
        // Initializing sides bricks
        for i in 0...MAX_WIDTH {
            grid[i] = []
            for j in 0...MAX_HEIGHT {
                if i == playerX && j == playerY {
                    grid[i][j] = Case.player
                } else if i == 0 || i == MAX_WIDTH - 1 || j == 0 || j == MAX_HEIGHT - 1 {
                    grid[i][j] = Case.brick
                } else {
                    grid[i][j] = Case.empty
                }
            }
        }
    }
    
    mutating func movePlayer(playerX: Int, playerY: Int) -> Bool {
        if grid[playerX][playerY] == Case.brick {
            return false
        } else {
            grid[playerX][playerY] = Case.player;
            // Removing old position
            for i in 0...MAX_WIDTH {
                for j in 0...MAX_HEIGHT {
                    if grid[i][j] == Case.player {
                        grid[i][j] = Case.empty
                        break
                    }
                }
            }
            return true
        }
    }
}
