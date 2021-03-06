//
//  L2.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L2 : LevelProtocol {
    var strikesNumber: Int
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        strikesNumber = Repository().getStrikesNumber(label: "l2")
        player = Player(X: 4, Y: 1, orientation: Orientation.up)
        blocks = [Block(X: 4, Y: 6), Block(X: 7, Y: 5), Block(X: 6, Y: 10), Block(X: 12, Y: 9)]
        end = Block(X: 11, Y: GameScene.MAX_HEIGHT - 1)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
