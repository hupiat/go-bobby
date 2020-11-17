//
//  GameLogic.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation
import SpriteKit

public struct GameLogic {
    
    var scene: GameScene
    
    init(scene: GameScene) {
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
        let switchLevel: () -> Void = {
            if (GameScene.LEVELS[GameScene.LEVEL_NUMBER].grid.hasWon(player: player)) {
                GameScene.LEVEL_NUMBER += 1
                scene.loadScene()
                scene.loadLevelText()
            }
        }
        scene.movePlayer(player: player, diffX: diffX, diffY: diffY, callback: switchLevel)
    }
}
