//
//  L1.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation

struct L1 : LevelProtocol {
    var grid: Grid
    var player: Player
    let blocks: [Block]
    let end: Block
    
    init() {
        player = Player(X: 10, Y: 10, orientation: Orientation.up)
        blocks = [Block(X: 10, Y: 15)]
        end = Block(X: 12, Y: 19)
        grid = Grid(player: player, blocks: blocks, end: end)
    }
}
