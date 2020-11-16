//
//  Block.swift
//  GoBobby
//
//  Created by Hugo Piat on 16/11/2020.
//

import Foundation

struct Block {
    let X: Int
    let Y: Int
    
    init(X: Int, Y: Int) {
        self.X = X
        self.Y = Y
    }
    
    func isAtPos(i: Int, j: Int) -> Bool {
        return X == i && Y == j
    }
}
