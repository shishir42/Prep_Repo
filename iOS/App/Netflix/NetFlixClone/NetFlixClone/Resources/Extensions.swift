//
//  Extensions.swift
//  NetFlixClone
//
//  Created by shishir roy on 6/2/23.
//

import Foundation

extension String {
    func capitalizeFirstLetter() -> String {
        return self.prefix(1).uppercased() + self.lowercased().dropFirst()
    }
}
