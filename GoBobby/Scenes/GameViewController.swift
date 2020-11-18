//
//  GameViewController.swift
//  GoBobby
//
//  Created by Hugo Piat on 15/11/2020.
//

import UIKit
import SpriteKit
import GameplayKit
import AVFoundation

class GameViewController: UIViewController {
    
    var scene: GameScene?
    var gameLogic: GameLogic?
    var player: AVAudioPlayer?

    override func viewDidLoad() -> Void {
        super.viewDidLoad()
        
        if let view = self.view as! SKView? {
            // Load the SKScene from 'GameScene.sks'
            if let scene = SKScene(fileNamed: "GameScene") {
                self.scene = scene as? GameScene
                // Set the scale mode to scale to fit the window
                scene.scaleMode = .aspectFill
                
                // Present the scene
                view.presentScene(scene)
                gameLogic = GameLogic(scene: self.scene!)
                self.scene?.injectLogic(gameLogic: gameLogic!)
                
                do {
                    try self.playSound()
                } catch _ {
                    NSLog("Cannot play sound")
                }
                
                // Loading nodes
                self.scene?.loadScene()
                self.scene?.loadLevelText()
                self.scene?.loadStrikesText(number: 0)
                self.scene?.loadBestStrikesText(number: GameScene.LEVELS[GameScene.LEVEL_NUMBER].strikesNumber)
                self.scene?.loadReloadButton()
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
        var level: LevelProtocol = GameScene.LEVELS[GameScene.LEVEL_NUMBER]
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
    
    func playSound() throws -> Void {
        guard let url = Bundle.main.url(forResource: "background_music", withExtension: "mp3") else { return }

        do {
            try AVAudioSession.sharedInstance().setCategory(.playback, mode: .default)
            try AVAudioSession.sharedInstance().setActive(true)

            // The following line is required for the player to work on iOS 11 
            player = try AVAudioPlayer(contentsOf: url, fileTypeHint: AVFileType.mp3.rawValue)

            guard let player = player else { return }
            
            // Play in loop
            player.numberOfLoops = -1
            player.play()
        } catch _ {
            throw Errors.Runtime
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
