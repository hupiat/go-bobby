//
//  L6.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

public struct L6 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 1, Y: 1, orientation: Orientation.down)
        blocks = [Block(X: 10, Y: 3), Block(X: 2, Y: 2), Block(X: 1, Y: 8), Block(X: 10, Y: 10),
                  Block(X: 3, Y: 9), Block(X: 7, Y: 2), Block(X: 9, Y: 8), Block(X: 9, Y: 11),
                  Block(X: 3, Y: 8), Block(X: 11, Y: 11)]
        end = Block(X: 0, Y: 3)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
