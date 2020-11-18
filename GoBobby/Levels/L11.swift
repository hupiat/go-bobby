//
//  L11.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L11 : LevelProtocol {
    var strikesNumber: Int
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        strikesNumber = Repository().getStrikesNumber(label: "l11")
        player = Player(X: 7, Y: 5, orientation: Orientation.down)
        blocks = [Block(X: 5, Y: 10), Block(X: 12, Y: 9), Block(X: 1, Y: 12), Block(X: 1, Y: 10),
                  Block(X: 4, Y: 9), Block(X: 7, Y: 18), Block(X: 1, Y: 8), Block(X: 1, Y: 14),
                  Block(X: 10, Y: 10), Block(X: 10, Y: 9), Block(X: 7, Y: 9), Block(X: 4, Y: 17), Block(X: 11, Y: 14),]
        end = Block(X: 13, Y: 13)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
