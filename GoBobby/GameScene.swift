//
//  GameScene.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene {
    var grid: Grid
    let SCALE_MULTIPLICATOR: CGFloat = 2.2
    
    required init?(coder aDecoder: NSCoder) {
        let screenSize = UIScreen.main.bounds
        // Multiplicator is needed instead of screen scale
        let maxWidth = Int(floor(screenSize.width * SCALE_MULTIPLICATOR / CGFloat(Grid.CASE_PX)))
        let maxHeight = Int(floor(screenSize.height * SCALE_MULTIPLICATOR / CGFloat(Grid.CASE_PX)))
        grid = Grid(playerX: 10, playerY: 10, maxWidth: maxWidth, maxHeight: maxHeight)
        
        super.init(coder: aDecoder)
        
        grid.iterate(callback: { i, j in
            if grid.cases[i][j] == Case.brick {
                let wall = SKSpriteNode(texture: SKTexture(imageNamed: "brick_wall.png"))
                wall.name = "wall \(i) \(j)"
                wall.position.x = CGFloat(i) * CGFloat(Grid.CASE_PX)
                wall.position.y = CGFloat(j) * CGFloat(Grid.CASE_PX)
                self.addChild(wall)
            }
        })
    }
}
