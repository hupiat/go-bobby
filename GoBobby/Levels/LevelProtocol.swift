//
//  LevelProtocol.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation

protocol LevelProtocol {
    var grid: Grid { get set }
    var player: Player { get set }
    var blocks: [Block] { get }
    var end: Block { get }
}
