//
//  GameScene.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene {
    // Multiplicator is needed instead of screen scale
    static let SCALE_MULTIPLICATOR: CGFloat = 2.2
    static let SCREEN_SIZE: CGRect = UIScreen.main.bounds
    static let MAX_WIDTH: Int = Int(floor(SCREEN_SIZE.width * SCALE_MULTIPLICATOR / CGFloat(Grid.CASE_PX)))
    static let MAX_HEIGHT: Int = Int(floor(SCREEN_SIZE.height * SCALE_MULTIPLICATOR / CGFloat(Grid.CASE_PX)))
    static var level: LevelProtocol = L1()
    
    static func loadScene(scene: SKScene) {
        level.grid.iterate(callback: { i, j in
            if level.grid.cases[i][j] == Case.brick {
                let wall = SKSpriteNode(texture: SKTexture(imageNamed: "brick_wall.png"))
                wall.name = "wall \(i) \(j)"
                wall.position.x = CGFloat(i) * CGFloat(Grid.CASE_PX)
                wall.position.y = CGFloat(j) * CGFloat(Grid.CASE_PX)
                scene.addChild(wall)
            } else if level.grid.cases[i][j] == Case.player {
                let playerNode = SKSpriteNode(texture: SKTexture(imageNamed: "player_\(level.player.orientation).png"))
                playerNode.name = "player"
                playerNode.position.x = CGFloat(level.player.X) * CGFloat(Grid.CASE_PX)
                playerNode.position.y = CGFloat(level.player.Y) * CGFloat(Grid.CASE_PX)
                scene.addChild(playerNode)
            }
        })
    }
}
