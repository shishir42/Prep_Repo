//
//  ListView.swift
//  TodoList
//
//  Created by shishir roy on 3/24/23.
//

import SwiftUI

struct ListView: View {
//    @State var items: [ItemModel] = [
//        ItemModel(title: "This is the first item", isCompleted: false),
//        ItemModel(title: "This is the second item", isCompleted: true),
//        ItemModel(title: "This is the third item", isCompleted: false),
//        ItemModel(title: "This is the fourth item", isCompleted: true)
//    ]
    
    @EnvironmentObject var listViewModel: ListViewModel
    
    var body: some View {
        ZStack {
            if listViewModel.items.isEmpty {
//                Text("No items")
                NoItemsView()
                    .transition(AnyTransition.opacity
                        .animation(.easeIn))
            } else {
                List {
        //            ForEach(items){item in
        //                ListRowView(item: item )
        //            }
                      ForEach(listViewModel.items){item in
                            ListRowView(item: item )
                              .onTapGesture {
                                  withAnimation(.linear){
                                      listViewModel.updateItem(item: item)
                                  }
                              }
                      }
                      .onDelete(perform: listViewModel.deleteItem)
                      .onMove(perform: listViewModel.moveItem)
        //            .onDelete(perform: {IndexSet in
        //                items.remove(atOffsets: IndexSet)
        //            })
        //            .onDelete(perform: deleteItem)
        //            .onMove(perform: moveItem)
                    
                }
                .listStyle(PlainListStyle())
            }
        }
        .navigationTitle("Todo List 📝")
        .navigationBarItems(
            leading: EditButton(),
            trailing:
                NavigationLink("Add", destination: AddView())
        )
    }
    
//    func deleteItem(indexSet: IndexSet){
//        items.remove(atOffsets: indexSet)
//    }
//
//    func moveItem(from: IndexSet, to:Int){
//        items.move(fromOffsets: from, toOffset: to)
//    }
}

struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
            ListView()
        }
        .environmentObject(ListViewModel())
    }
}


