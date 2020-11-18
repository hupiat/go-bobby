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
    static var LEVEL_NUMBER = 0
    static var LEVELS: [LevelProtocol] = [L1(), L2(), L3(), L4(), L5(), L6(), L7(), L8(), L9(), L10(), L11(), L12(), L13(), L14(), L15(), L16(), L17(), L18(), L19(), L20()]
    
    var gameLogic: GameLogic?
    let levelText: UIButton = UIButton(type: .roundedRect)
    let strikesText: UIButton = UIButton(type: .roundedRect)
    let bestStrikesText: UIButton = UIButton(type: .roundedRect)
    let reloadButton: UIButton = UIButton(type: .roundedRect)
    
    func injectLogic(gameLogic: GameLogic) {
        self.gameLogic = gameLogic
    }
    
    func loadScene() -> Void {
        self.removeAllChildren()
        let level: LevelProtocol = GameScene.LEVELS[GameScene.LEVEL_NUMBER]
        level.grid.iterate(callback: { i, j in
            if level.grid.cases[i][j] == Case.brick {
                let wall = SKSpriteNode(texture: SKTexture(imageNamed: "brick_wall.png"))
                wall.name = "wall \(i) \(j)"
                wall.position.x = CGFloat(i) * CGFloat(Grid.CASE_PX)
                wall.position.y = CGFloat(j) * CGFloat(Grid.CASE_PX)
                self.addChild(wall)
            } else if level.grid.cases[i][j] == Case.player {
                level.player.X = level.grid.start.pos.X
                level.player.Y = level.grid.start.pos.Y
                level.player.orientation = level.grid.start.orientation
                loadPlayer(player: level.player)
            }
        })
    }
    
    func loadPlayer(player: Player) -> Void {
        let playerNode = SKSpriteNode(texture: SKTexture(imageNamed: "player_\(player.orientation).png"))
        playerNode.name = "player"
        playerNode.position.x = CGFloat(player.X) * CGFloat(Grid.CASE_PX)
        playerNode.position.y = CGFloat(player.Y) * CGFloat(Grid.CASE_PX)
        self.addChild(playerNode)
    }
    
    func loadLevelText() -> Void {
        levelText.frame = CGRect(x: 5, y: 5, width: 40, height: 40)
        levelText.backgroundColor = UIColor.blue
        levelText.layer.cornerRadius = 20
        levelText.setTitle(String(GameScene.LEVEL_NUMBER + 1), for: .normal)
        levelText.setTitleColor(UIColor.white, for: .normal)
        self.view?.addSubview(levelText)
    }
    
    func loadStrikesText(number: Int) -> Void {
        strikesText.frame = CGRect(x: 110, y: 5, width: 40, height: 40)
        strikesText.backgroundColor = UIColor.darkGray
        strikesText.layer.cornerRadius = 20
        strikesText.setTitle(String(number), for: .normal)
        strikesText.setTitleColor(UIColor.white, for: .normal)
        self.view?.addSubview(strikesText)
    }
    
    func loadBestStrikesText(number: Int) -> Void {
        bestStrikesText.frame = CGRect(x: 170, y: 5, width: 40, height: 40)
        bestStrikesText.backgroundColor = UIColor.systemGreen
        bestStrikesText.layer.cornerRadius = 20
        bestStrikesText.setTitle(String(number), for: .normal)
        bestStrikesText.setTitleColor(UIColor.white, for: .normal)
        self.view?.addSubview(bestStrikesText)
    }
    
    func loadReloadButton() -> Void {
        let reloadImage: UIImage = UIImage(named: "reload.png")!
        reloadButton.frame = CGRect(x: 275, y: 10, width: 30, height: 30)
        reloadButton.setImage(reloadImage, for: .normal)
        reloadButton.addTarget(gameLogic, action: #selector(gameLogic?.reload), for: .touchUpInside)
        self.view?.addSubview(reloadButton)
    }
    
    func movePlayer(player: Player, diffX: Int, diffY: Int, callback: @escaping () -> Void) -> Void {
        let animAcceleration: Double = 0.05
        let playerNode: SKSpriteNode = self.scene?.childNode(withName: "player") as! SKSpriteNode
        playerNode.texture = SKTexture(imageNamed: "player_\(player.orientation).png")
        if (diffX != 0) {
            let moveX: SKAction = SKAction.moveTo(x: CGFloat(player.X) * CGFloat(Grid.CASE_PX), duration: Double(diffX) * animAcceleration)
            playerNode.run(moveX, completion: callback)
        }
        if (diffY != 0) {
            let moveY: SKAction = SKAction.moveTo(y: CGFloat(player.Y) * CGFloat(Grid.CASE_PX), duration: Double(diffY) * animAcceleration)
            playerNode.run(moveY, completion: callback)
        }
    }
}
