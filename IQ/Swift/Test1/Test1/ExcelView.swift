//
//  ExcelView.swift
//  Test1
//
//  Created by shishir roy on 3/18/23.
//

import SwiftUI

struct ExcelView: View {
    let rows = 5
    let columns = 3
    @State var data = Array(repeating: Array(repeating: "", count: 3), count: 5)
    @FocusState private var focusedCell: IndexPath?
    
    var body: some View {
        VStack(spacing: 0) {
            HStack(spacing: 0) {
                ForEach(0..<columns) { column in
                    Text("Column \(column+1)")
                        .padding(.horizontal, 10)
                        .frame(maxWidth: .infinity, maxHeight: .infinity)
                        .background(Color.gray)
                }
            }
            ScrollView {
                VStack(spacing: 0) {
                    ForEach(0..<rows, id: \.self) { row in
                        HStack(spacing: 0) {
                            ForEach(0..<columns, id: \.self) { column in
                                TextField("", text: Binding(
                                    get: { data[row][column] },
                                    set: { newValue in
                                        data[row][column] = newValue
                                    }
                                ))
                                .textFieldStyle(ExcelTextFieldStyle(isFocused: focusedCell == IndexPath(row: row, column: column)))
                                .frame(maxWidth: .infinity, maxHeight: .infinity)
                                .padding(.horizontal, 10)
                                .multilineTextAlignment(.trailing)
                                .onTapGesture {
                                    focusedCell = IndexPath(row: row, column: column)
                                }
                                .navigationTitle("Excel View")
                                .navigationBarTitleDisplayMode(.inline)
                            }
                        }
                    }
                }
            }
        }
        .onAppear {
            UITableView.appearance().backgroundColor = .clear
            UITableViewCell.appearance().backgroundColor = .clear
        }
    }
}

struct ExcelTextFieldStyle: TextFieldStyle {
    var isFocused: Bool
    
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .background(
                RoundedRectangle(cornerRadius: 4)
                    .stroke(isFocused ? Color.blue : Color.secondary, lineWidth: 1)
            )
    }
}

extension IndexPath {
    init(row: Int, column: Int) {
        self.init(row: row, section: column)
    }
}


struct ExcelView_Previews: PreviewProvider {
    static var previews: some View {
        ExcelView()
    }
}
