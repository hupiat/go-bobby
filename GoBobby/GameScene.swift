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
    static let SCALE_MULTIPLICATOR_WIDTH: CGFloat = 2.2
    static let SCALE_MULTIPLICATOR_HEIGHT: CGFloat = 2
    static let SCREEN_SIZE: CGRect = UIScreen.main.bounds
    static let MAX_WIDTH: Int = Int(floor(SCREEN_SIZE.width * SCALE_MULTIPLICATOR_WIDTH / CGFloat(Grid.CASE_PX)))
    static let MAX_HEIGHT: Int = Int(floor(SCREEN_SIZE.height * SCALE_MULTIPLICATOR_HEIGHT / CGFloat(Grid.CASE_PX)))
    static var levelNumber = 0
    static var level: [LevelProtocol] = [L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1(), L1()]
    
    static let levelText: UITextView = UITextView(frame: CGRect(x: 5, y: 5, width: 40, height: 40))
    static var view: SKView? = nil
    
    static func loadScene(scene: SKScene) -> Void {
        scene.removeAllChildren()
        level[levelNumber].grid.iterate(callback: { i, j in
            if level[levelNumber].grid.cases[i][j] == Case.brick {
                let wall = SKSpriteNode(texture: SKTexture(imageNamed: "brick_wall.png"))
                wall.name = "wall \(i) \(j)"
                wall.position.x = CGFloat(i) * CGFloat(Grid.CASE_PX)
                wall.position.y = CGFloat(j) * CGFloat(Grid.CASE_PX)
                scene.addChild(wall)
            } else if level[levelNumber].grid.cases[i][j] == Case.player {
                loadPlayer(scene: scene, player: level[levelNumber].player)
            }
        })
    }
    
    static func loadPlayer(scene: SKScene, player: Player) -> Void {
        let playerNode = SKSpriteNode(texture: SKTexture(imageNamed: "player_\(player.orientation).png"))
        playerNode.name = "player"
        playerNode.position.x = CGFloat(player.X) * CGFloat(Grid.CASE_PX)
        playerNode.position.y = CGFloat(player.Y) * CGFloat(Grid.CASE_PX)
        scene.addChild(playerNode)
    }
    
    static func loadLevelText() -> Void {
        levelText.textColor = UIColor.white
        levelText.backgroundColor = UIColor.blue
        levelText.textAlignment = .center
        levelText.layer.cornerRadius = 20
        levelText.usesStandardTextScaling = true
        levelText.text = String(levelNumber + 1)
        view!.addSubview(levelText)
    }
    
    static func movePlayer(scene: SKScene, player: Player, diffX: Int, diffY: Int) -> Void {
        let animAcceleration: Double = 0.05
        let playerNode: SKSpriteNode = scene.childNode(withName: "player") as! SKSpriteNode
        playerNode.texture = SKTexture(imageNamed: "player_\(player.orientation).png")
        let completion: () -> Void = {
            if (level[levelNumber].grid.hasWon(player: player)) {
                GameScene.levelNumber += 1
                GameScene.loadScene(scene: scene)
                GameScene.loadLevelText()
            }
        }
        if (diffX != 0) {
            let moveX: SKAction = SKAction.moveTo(x: CGFloat(player.X) * CGFloat(Grid.CASE_PX), duration: Double(diffX) * animAcceleration)
            playerNode.run(moveX, completion: completion)
        }
        if (diffY != 0) {
            let moveY: SKAction = SKAction.moveTo(y: CGFloat(player.Y) * CGFloat(Grid.CASE_PX), duration: Double(diffY) * animAcceleration)
            playerNode.run(moveY, completion: completion)
        }
    }
}
