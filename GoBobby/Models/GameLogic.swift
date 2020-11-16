//
//  GameLogic.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation
import SpriteKit

public struct GameLogic {
    
    var scene: SKScene
    
    init(scene: SKScene) {
        self.scene = scene
    }
    
    func movePlayer(grid: inout Grid, player: Player, orientation: Orientation) {
        player.orientation = orientation
        while grid.movePlayer(player: player, orientation: orientation) {
            switch (orientation) {
                case .up:
                    player.Y += 1
                case .right:
                    player.X += 1
                case .left:
                    player.X -= 1
                case .down:
                    player.Y -= 1
            }
        }
        GameScene.loadPlayer(scene: scene, player: player)
    }
}
