//
//  L5.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L5 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 10, Y: 9, orientation: Orientation.up)
        blocks = [Block(X: 4, Y: 18), Block(X: 2, Y: 2), Block(X: 2, Y: 9), Block(X: 2, Y: 10),
                  Block(X: 4, Y: 9), Block(X: 7, Y: 2), Block(X: 9, Y: 8), Block(X: 11, Y: 11)]
        end = Block(X: 3, Y: 0)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
