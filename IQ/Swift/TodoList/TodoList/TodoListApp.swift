//
//  TodoListApp.swift
//  TodoList
//
//  Created by shishir roy on 3/24/23.
//

import SwiftUI

/*
 MVVM Architecture
 Model - data points
 View - UI
 ViewModel - manages model for view
 
 */

@main
struct TodoListApp: App {
    @StateObject var listViewModel : ListViewModel = ListViewModel()
    
    var body: some Scene {
        WindowGroup {
            NavigationView{
                ListView()
            }
            .navigationViewStyle(StackNavigationViewStyle())
            .environmentObject(listViewModel)
        }
    }
}
