//
//  GameLogic.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation
import SpriteKit
import AudioToolbox

// TODO : fix reload bug

class GameLogic {
    
    var scene: GameScene
    var strikesNumber: Int = 0
    
    init(scene: GameScene) {
        self.scene = scene
    }
    
    func movePlayer(grid: inout Grid, player: Player, orientation: Orientation) {
        var diffX: Int = 0
        var diffY: Int = 0
        var level: LevelProtocol = GameScene.LEVELS[GameScene.LEVEL_NUMBER]
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
        let repo: Repository = Repository()
        let oldStrikesNumber: Int = repo.getStrikesNumber(label: "l\(GameScene.LEVEL_NUMBER + 1)")
        strikesNumber += 1
        self.scene.loadStrikesText(number: self.strikesNumber)
        self.scene.loadBestStrikesText(number: self.strikesNumber > oldStrikesNumber ? self.strikesNumber : oldStrikesNumber)
        let after: () -> Void = {
            if (level.grid.hasWon(player: player)) {
                // Storing data
                if oldStrikesNumber > self.strikesNumber || oldStrikesNumber == 0 {
                    repo.saveStrikesNumber(label: "l\(GameScene.LEVEL_NUMBER + 1)", number: self.strikesNumber)
                }
                if repo.getLevelMax() < GameScene.LEVEL_NUMBER {
                    repo.saveLevelMax(number: GameScene.LEVEL_NUMBER)
                }
                // Then switching level
                if GameScene.LEVEL_NUMBER < GameScene.LEVELS.count - 1 {
                    GameScene.LEVEL_NUMBER += 1
                } else {
                    GameScene.LEVEL_NUMBER = 0
                }
                level = GameScene.LEVELS[GameScene.LEVEL_NUMBER]
                self.strikesNumber = 0
                self.scene.loadScene()
                self.scene.loadLevelText()
                self.scene.loadStrikesText(number: self.strikesNumber)
                self.scene.loadBestStrikesText(number: level.strikesNumber)
            } else {
                AudioServicesPlayAlertSound(SystemSoundID(kSystemSoundID_Vibrate))
            }
        }
        scene.movePlayer(player: player, diffX: diffX, diffY: diffY, callback: after)
    }
}
