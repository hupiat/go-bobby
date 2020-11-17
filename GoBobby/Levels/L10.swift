//
//  L10.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

public struct L10 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 5, Y: 17, orientation: Orientation.left)
        blocks = [Block(X: 5, Y: 10), Block(X: 12, Y: 9), Block(X: 12, Y: 12), Block(X: 2, Y: 10),
                  Block(X: 4, Y: 9), Block(X: 7, Y: 2), Block(X: 9, Y: 8), Block(X: 10, Y: 14)]
        end = Block(X: 0, Y: 13)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
