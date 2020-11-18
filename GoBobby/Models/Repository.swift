//
//  Repository.swift
//  GoBobby
//
//  Created by Hugo Piat on 17/11/2020.
//

import Foundation

struct Repository {
    let LEVEL_MAX_KEY: String = "level_max"
    let defaults: UserDefaults = UserDefaults.standard
    
    func getStrikesNumber(label: String) -> Int {
        if let number = defaults.string(forKey: label) {
            return Int(number)!
        }
        return 0
    }
    
    func saveStrikesNumber(label: String, number: Int) -> Void {
        defaults.setValue(String(number), forKey: label)
    }
    
    func getLevelMax() -> Int {
        if let number = defaults.string(forKey: LEVEL_MAX_KEY) {
            return Int(number)!
        }
        return 0
    }
    
    func saveLevelMax(number: Int) -> Void {
        defaults.setValue(String(number), forKey: LEVEL_MAX_KEY)
    }
}
