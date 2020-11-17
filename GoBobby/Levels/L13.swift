//
//  L13.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

public struct L13 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 7, Y: 11, orientation: Orientation.down)
        blocks = [Block(X: 1, Y: 2), Block(X: 5, Y: 5), Block(X: 12, Y: 7), Block(X: 12, Y: 17),
                  Block(X: 1, Y: 12), Block(X: 1, Y: 11), Block(X: 1, Y: 14), Block(X: 10, Y: 10),
                  Block(X: 10, Y: 9), Block(X: 13, Y: 9), Block(X: 4, Y: 17), Block(X: 12, Y: 14),]
        end = Block(X: 0, Y: 13)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
