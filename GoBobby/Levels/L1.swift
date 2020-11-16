//
//  L1.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation

struct L1 : LevelProtocol {
    let grid: Grid
    let blocks: [Block]
    let end: Block
    let player: Player
    
    init(maxWidth: Int, maxHeight: Int) {
        player = Player(X: 10, Y: 10, orientation: Orientation.up)
        blocks = [Block(X: 10, Y: 15)]
        end = Block(X: 27, Y: maxHeight - 1)
        grid = Grid(player: player, maxWidth: maxWidth, maxHeight: maxHeight, blocks: blocks, end: end)
    }
}
