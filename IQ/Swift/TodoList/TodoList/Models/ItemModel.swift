//
//  ItemModel.swift
//  TodoList
//
//  Created by shishir roy on 3/24/23.
//

import Foundation

//Immutable struct

struct ItemModel: Identifiable, Codable {
//    let id: String = UUID().uuidString
    let id: String
    let title: String
    let isCompleted: Bool
    
    init(id: String = UUID().uuidString, title: String, isCompleted: Bool) {
        self.id = id
        self.title = title
        self.isCompleted = isCompleted
    }
    
    func updateCompletion() -> ItemModel {
        return ItemModel(id: id, title: title, isCompleted: !isCompleted)
    }
    
}
