//
//  L14.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L14 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 9, Y: 10, orientation: Orientation.right)
        blocks = [Block(X: 3, Y: 8), Block(X: 2, Y: 2), Block(X: 4, Y: 8), Block(X: 10, Y: 10),
                  Block(X: 1, Y: 17), Block(X: 1, Y: 18), Block(X: 1, Y: 14), Block(X: 1, Y: 13),
                  Block(X: 1, Y: 16), Block(X: 1, Y: 15), Block(X: 1, Y: 12), Block(X: 1, Y: 11),
                  Block(X: 6, Y: 17), Block(X: 4, Y: 9), Block(X: 7, Y: 13), Block(X: 12, Y: 14),
                  Block(X: 1, Y: 2), Block(X: 1, Y: 3), Block(X: 1, Y: 8), Block(X: 9, Y: 18),
                  Block(X: 3, Y: 8), Block(X: 11, Y: 11), Block(X: 1, Y: 4), Block(X: 12, Y: 1),]
        end = Block(X: 3, Y: 0)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
