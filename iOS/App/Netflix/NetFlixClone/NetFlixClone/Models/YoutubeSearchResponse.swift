//
//  YoutubeSearchResponse.swift
//  NetFlixClone
//
//  Created by shishir roy on 6/7/23.
//

import Foundation

struct YoutubeSearchResponse: Codable {
    let items: [VideoElement]
}

struct VideoElement: Codable {
    let id: IdVideoElement
}

struct IdVideoElement: Codable {
    let kind: String
    let videoId: String
}
