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
    
    var player : SKSpriteNode?

    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let view = self.view as! SKView? {
            // Load the SKScene from 'GameScene.sks'
            if let scene = SKScene(fileNamed: "GameScene") {
                // Set the scale mode to scale to fit the window
                scene.scaleMode = .aspectFill
                
                // Present the scene
                view.presentScene(scene)
                
                // Loading nodes
                GameScene.loadScene(scene: scene)
                
                // Getting nodes
                player = scene.childNode(withName: "player") as? SKSpriteNode
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
        switch (gesture.direction) {
            case .up:
                GameLogic.movePlayer(grid: &GameScene.level.grid, player: GameScene.level.player, orientation: Orientation.up, node: player!)
            case .right:
                GameLogic.movePlayer(grid: &GameScene.level.grid, player: GameScene.level.player, orientation: Orientation.right, node: player!)
            case .left:
                GameLogic.movePlayer(grid: &GameScene.level.grid, player: GameScene.level.player, orientation: Orientation.left, node: player!)
            case .down:
                GameLogic.movePlayer(grid: &GameScene.level.grid, player: GameScene.level.player, orientation: Orientation.down, node: player!)
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
