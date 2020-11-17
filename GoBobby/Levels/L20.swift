//
//  L20.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

public struct L20 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 1, Y: 18, orientation: Orientation.up)
        blocks = [Block(X: 1, Y: 2), Block(X: 1, Y: 8), Block(X: 1, Y: 7), Block(X: 1, Y: 3),
                  Block(X: 5, Y: 9), Block(X: 3, Y: 3), Block(X: 1, Y: 8), Block(X: 1, Y: 10),
                  Block(X: 7, Y: 10), Block(X: 10, Y: 9), Block(X: 7, Y: 9), Block(X: 4, Y: 4),
                  Block(X: 12, Y: 14), Block(X: 7, Y: 18), Block(X: 9, Y: 13),
                  Block(X: 5, Y: 14), Block(X: 6, Y: 18), Block(X: 7, Y: 13), Block(X: 12, Y: 8),
                  Block(X: 4, Y: 14), Block(X: 7, Y: 18), Block(X: 6, Y: 13),
                  Block(X: 7, Y: 8), Block(X: 9, Y: 3), Block(X: 9, Y: 10), Block(X: 9, Y: 11),
                  Block(X: 1, Y: 5), Block(X: 4, Y: 3), Block(X: 3, Y: 7), Block(X: 7, Y: 2),
                  Block(X: 7, Y: 5), Block(X: 7, Y: 3), Block(X: 7, Y: 7), Block(X: 7, Y: 2),
                  Block(X: 1, Y: 2), Block(X: 9, Y: 7), Block(X: 10, Y: 3)]
        end = Block(X: 11, Y: 0)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
