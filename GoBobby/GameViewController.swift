//
//  GameViewController.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import UIKit
import SpriteKit
import GameplayKit

class GameViewController: UIViewController {
    
    var scene: SKScene?
    var gameLogic: GameLogic?

    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let view = self.view as! SKView? {
            // Load the SKScene from 'GameScene.sks'
            if let scene = SKScene(fileNamed: "GameScene") {
                self.scene = scene
                GameScene.view = view
                // Set the scale mode to scale to fit the window
                scene.scaleMode = .aspectFill
                
                // Present the scene
                view.presentScene(scene)
                gameLogic = GameLogic(scene: scene)
                
                // Loading nodes
                GameScene.loadScene(scene: scene)
                GameScene.loadLevelText()
            }
            
            view.ignoresSiblingOrder = true
            
            // Adding swipe recognizer
            let swipeLeft = UISwipeGestureRecognizer(target: self, action: #selector(handleGesture))
            swipeLeft.direction = .left
            self.view.addGestureRecognizer(swipeLeft)

            let swipeRight = UISwipeGestureRecognizer(target: self, action: #selector(handleGesture))
            swipeRight.direction = .right
            self.view.addGestureRecognizer(swipeRight)

            let swipeUp = UISwipeGestureRecognizer(target: self, action: #selector(handleGesture))
            swipeUp.direction = .up
            self.view.addGestureRecognizer(swipeUp)

            let swipeDown = UISwipeGestureRecognizer(target: self, action: #selector(handleGesture))
            swipeDown.direction = .down
            self.view.addGestureRecognizer(swipeDown)
            
            // Development options
            view.showsFPS = true
            view.showsNodeCount = true
        }
    }
    
    @objc func handleGesture(gesture: UISwipeGestureRecognizer) throws -> Void {
        var level: LevelProtocol = GameScene.level[GameScene.levelNumber]
        switch (gesture.direction) {
            case .up:
                gameLogic?.movePlayer(grid: &level.grid, player: level.player, orientation: Orientation.up)
            case .right:
                gameLogic?.movePlayer(grid: &level.grid, player: level.player, orientation: Orientation.right)
            case .left:
                gameLogic?.movePlayer(grid: &level.grid, player: level.player, orientation: Orientation.left)
            case .down:
                gameLogic?.movePlayer(grid: &level.grid, player: level.player, orientation: Orientation.down)
            default:
                throw Errors.Unhandled
        }
    }

    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        if UIDevice.current.userInterfaceIdiom == .phone {
            return .allButUpsideDown
        } else {
            return .all
        }
    }

    override var prefersStatusBarHidden: Bool {
        return true
    }
}
