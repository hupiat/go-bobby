//
//  L12.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

public struct L12 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 2, Y: 2, orientation: Orientation.up)
        blocks = [Block(X: 8, Y: 2), Block(X: 10, Y: 8), Block(X: 4, Y: 7), Block(X: 9, Y: 17),
                  Block(X: 5, Y: 9), Block(X: 3, Y: 18), Block(X: 1, Y: 8), Block(X: 1, Y: 14),
                  Block(X: 10, Y: 10), Block(X: 10, Y: 9), Block(X: 7, Y: 9), Block(X: 4, Y: 17), Block(X: 12, Y: 14),]
        end = Block(X: 13, Y: 18)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
