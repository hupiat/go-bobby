//
//  GameScene.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import SpriteKit
import GameplayKit

// TODO : work with CGPoint

class GameScene: SKScene {
    let PX_STANDARD: CGFloat = 24
    var grid: Grid
    
    required init?(coder aDecoder: NSCoder) {
        let screenSize = UIScreen.main.nativeBounds
        let maxWidth = Int(ceil(screenSize.width / PX_STANDARD))
        let maxHeight = Int(ceil(screenSize.height / PX_STANDARD))
        grid = Grid(playerX: 10, playerY: 10, maxWidth: maxWidth, maxHeight: maxHeight)
        
        super.init(coder: aDecoder)
        
        grid.iterate(callback: { i, j in
            if grid.cases[i][j] == Case.brick {
                let wall = SKSpriteNode(texture: SKTexture(imageNamed: "brick_wall.png"))
                wall.name = "wall \(i) \(j)"
                wall.position.x = CGFloat(i) * PX_STANDARD
                wall.position.y = CGFloat(j) * PX_STANDARD
                self.addChild(wall)
            }
        })
    }
}
