//
//  L4.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L4 : LevelProtocol {
    var strikesNumber: Int
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        strikesNumber = Repository().getStrikesNumber(label: "l4")
        player = Player(X: 3, Y: 9, orientation: Orientation.right)
        blocks = [Block(X: 10, Y: 18), Block(X: 4, Y: 2), Block(X: 7, Y: 9), Block(X: 2, Y: 9),
                  Block(X: 9, Y: 2), Block(X: 9, Y: 1), Block(X: 12, Y: 2), Block(X: 12, Y: 1)]
        end = Block(X: 11, Y: 0)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
