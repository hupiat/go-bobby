//
//  L17.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

public struct L17 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 11, Y: 17, orientation: Orientation.left)
        blocks = [Block(X: 6, Y: 5), Block(X: 2, Y: 2), Block(X: 11, Y: 8), Block(X: 11, Y: 10),
                  Block(X: 1, Y: 17), Block(X: 7, Y: 18), Block(X: 10, Y: 11), Block(X: 9, Y: 13),
                  Block(X: 7, Y: 8), Block(X: 7, Y: 3), Block(X: 7, Y: 3), Block(X: 9, Y: 11),
                  Block(X: 1, Y: 5), Block(X: 4, Y: 3), Block(X: 10, Y: 6), Block(X: 7, Y: 2),
                  Block(X: 1, Y: 2), Block(X: 9, Y: 7), Block(X: 1, Y: 11), Block(X: 14, Y: 3),
                  Block(X: 3, Y: 8), Block(X: 13, Y: 2), Block(X: 9, Y: 11), Block(X: 13, Y: 8),
                  Block(X: 5, Y: 1), Block(X: 1, Y: 18), Block(X: 8, Y: 18), Block(X: 8, Y: 17), Block(X: 8, Y: 8),
                  Block(X: 1, Y: 14), Block(X: 4, Y: 14), Block(X: 2, Y: 11), Block(X: 9, Y: 13)]
        end = Block(X: 0, Y: 4)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
