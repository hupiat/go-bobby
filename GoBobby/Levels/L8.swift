//
//  L8.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L8 : LevelProtocol {
    var strikesNumber: Int
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        strikesNumber = Repository().getStrikesNumber(label: "l8")
        player = Player(X: 10, Y: 1, orientation: Orientation.right)
        blocks = [Block(X: 3, Y: 3), Block(X: 2, Y: 2), Block(X: 11, Y: 8), Block(X: 11, Y: 10),
                  Block(X: 1, Y: 17), Block(X: 7, Y: 18), Block(X: 10, Y: 11), Block(X: 9, Y: 13),
                  Block(X: 12, Y: 4), Block(X: 7, Y: 2), Block(X: 9, Y: 8), Block(X: 9, Y: 11),
                  Block(X: 1, Y: 4), Block(X: 4, Y: 9), Block(X: 3, Y: 12), Block(X: 8, Y: 11),
                  Block(X: 3, Y: 4), Block(X: 7, Y: 2), Block(X: 9, Y: 7), Block(X: 9, Y: 11), Block(X: 2, Y: 18),
                  Block(X: 3, Y: 8), Block(X: 11, Y: 11), Block(X: 9, Y: 12), Block(X: 1, Y: 4)]
        end = Block(X: 3, Y: 19)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
