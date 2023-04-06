//
//  ListViewModel.swift
//  TodoList
//
//  Created by shishir roy on 3/24/23.
//

import Foundation

class ListViewModel: ObservableObject{
    @Published var items: [ItemModel] = [] {
        //Computed properties
        didSet {
            saveItems()
        }
    }
    let itemsKey: String = "items_list"
    
    init(){
       getItems()
    }
    
    func getItems() {
//        let newItems = [
//            ItemModel(title: "This is the first item", isCompleted: false),
//            ItemModel(title: "This is the second item", isCompleted: true),
//            ItemModel(title: "This is the third item", isCompleted: false),
//            ItemModel(title: "This is the fourth item", isCompleted: true)
//        ]
//
//        items.append(contentsOf: newItems)
//        guard let data = UserDefaults.standard.data(forKey: itemsKey) else { return }
//        guard let savedItems = try? JSONDecoder().decode([ItemModel].self, from: data) else {return}
        
        guard
            let data = UserDefaults.standard.data(forKey: itemsKey),
            let savedItems = try? JSONDecoder().decode([ItemModel].self, from: data)
        else { return }
        
        self.items = savedItems
    }
    
    func deleteItem(indexSet: IndexSet){
        items.remove(atOffsets: indexSet)
//        saveItems()
    }
    
    func moveItem(from: IndexSet, to:Int){
        items.move(fromOffsets: from, toOffset: to)
//        saveItems()
    }
    
    func addItem(title: String){
        let newItem = ItemModel(title: title, isCompleted: false);
        items.append(newItem);
    }
    
    func updateItem(item: ItemModel){
        //Option1
//        if let index = items.firstIndex(where: {(existingItem) -> Bool in
//            return existingItem.id == item.id
//        }){
//            // run the code
//        }
        
        if let index = items.firstIndex(where: { $0.id == item.id }) {
//            items[index] = ItemModel(title: item.title, isCompleted: !item.isCompleted)
            items[index] = item.updateCompletion()
        }
    }
    
    func saveItems() {
        if let encodedData = try? JSONEncoder().encode(items) {
            UserDefaults.standard.set(encodedData, forKey: itemsKey)
        }
    }
}
