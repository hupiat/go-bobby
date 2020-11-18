//
//  L9.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L9 : LevelProtocol {
    var strikesNumber: Int
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        strikesNumber = Repository().getStrikesNumber(label: "l9")
        player = Player(X: 10, Y: 17, orientation: Orientation.down)
        blocks = [Block(X: 6, Y: 6), Block(X: 2, Y: 2), Block(X: 11, Y: 8), Block(X: 11, Y: 10),
                  Block(X: 1, Y: 17), Block(X: 7, Y: 18), Block(X: 10, Y: 11), Block(X: 9, Y: 13),
                  Block(X: 7, Y: 8), Block(X: 7, Y: 9), Block(X: 7, Y: 10), Block(X: 9, Y: 11),
                  Block(X: 1, Y: 4), Block(X: 4, Y: 9), Block(X: 3, Y: 12), Block(X: 8, Y: 11),
                  Block(X: 3, Y: 4), Block(X: 7, Y: 2), Block(X: 9, Y: 7), Block(X: 9, Y: 11),
                  Block(X: 3, Y: 8), Block(X: 11, Y: 11), Block(X: 9, Y: 12), Block(X: 1, Y: 4),
                  Block(X: 12, Y: 8), Block(X: 12, Y: 9), Block(X: 5, Y: 1)]
        end = Block(X: 6, Y: 0)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
