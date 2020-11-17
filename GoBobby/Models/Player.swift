//
//  Player.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation

enum Orientation {
    case up
    case left
    case right
    case down
}

class Player {
    var X: Int
    var Y: Int
    var orientation: Orientation
    
    init(X: Int, Y: Int, orientation: Orientation) {
        self.X = X
        self.Y = Y
        self.orientation = orientation
    }
    
    func isAtPos(i: Int, j: Int) -> Bool {
        return X == i && Y == j
    }
}
