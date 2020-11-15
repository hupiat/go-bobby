//
//  GameScene.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene {
    let grid = Grid(playerX: 10, playerY: 10)
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        let wall = SKSpriteNode(texture: SKTexture(imageNamed: "brick_wall.png"))
        wall.name = "wall"
        wall.position.x = 10
        wall.position.y = 10
        wall.zPosition = 1
        self.addChild(wall)
        
        let wall2 = SKSpriteNode(texture: SKTexture(imageNamed: "brick_wall.png"))
        wall.name = "wall2"
        wall.position.x = 20
        wall.position.y = 20
        wall.zPosition = 1
        self.addChild(wall2)
    }
}
