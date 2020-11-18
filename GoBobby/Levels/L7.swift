//
//  L7.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L7 : LevelProtocol {
    var strikesNumber: Int
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        strikesNumber = Repository().getStrikesNumber(label: "l7")
        player = Player(X: 10, Y: 9, orientation: Orientation.left)
        blocks = [Block(X: 3, Y: 3), Block(X: 2, Y: 2), Block(X: 11, Y: 8), Block(X: 10, Y: 10),
                  Block(X: 1, Y: 17), Block(X: 7, Y: 18), Block(X: 9, Y: 18), Block(X: 9, Y: 13),
                  Block(X: 2, Y: 11), Block(X: 7, Y: 2), Block(X: 9, Y: 8), Block(X: 9, Y: 11),
                  Block(X: 3, Y: 8), Block(X: 11, Y: 11), Block(X: 1, Y: 4)]
        end = Block(X: 10, Y: 19)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
