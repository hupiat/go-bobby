//
//  L3.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct L3 : LevelProtocol {
    var strikesNumber: Int
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        strikesNumber = Repository().getStrikesNumber(label: "l3")
        player = Player(X: 6, Y: 11, orientation: Orientation.down)
        blocks = [Block(X: 6, Y: 10), Block(X: 6, Y: 12), Block(X: 6, Y: 13), Block(X: 6, Y: 14), Block(X: 12, Y: 14)]
        end = Block(X: 7, Y: GameScene.MAX_HEIGHT - 1)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
