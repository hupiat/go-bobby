//
//  GameLogic.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation
import SpriteKit

struct GameLogic {
    
    static func movePlayer(grid: inout Grid, player: Player, orientation: Orientation, node: SKSpriteNode) {
        repeat {
            switch(orientation) {
                case .up:
                    player.Y += 1
                    node.position.y += CGFloat(Grid.CASE_PX)
                case .right:
                    player.X += 1
                    node.position.x += CGFloat(Grid.CASE_PX)
                case .left:
                    player.X -= 1
                    node.position.x -= CGFloat(Grid.CASE_PX)
                case .down:
                    player.Y -= 1
                    node.position.y -= CGFloat(Grid.CASE_PX)
            }
        } while grid.movePlayer(player: player, orientation: orientation)
    }
}
