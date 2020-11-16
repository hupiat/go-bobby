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
        var diffX: Int = 0
        var diffY: Int = 0
        player.orientation = orientation
        while grid.movePlayer(player: player, orientation: orientation) {
            switch (orientation) {
                case .up:
                    player.Y += 1
                    diffY += 1
                case .right:
                    player.X += 1
                    diffX += 1
                case .left:
                    player.X -= 1
                    diffX += 1
                case .down:
                    player.Y -= 1
                    diffY += 1
            }
        }
        GameScene.movePlayer(scene: scene, player: player, diffX: diffX, diffY: diffY)
        if (grid.hasWon(player: player)) {
            NSLog("Won !")
        }
    }
}
