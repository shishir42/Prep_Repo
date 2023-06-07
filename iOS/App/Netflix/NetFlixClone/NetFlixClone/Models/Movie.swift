//
//  Movie.swift
//  NetFlixClone
//
//  Created by shishir roy on 6/2/23.
//

import Foundation

struct TrendingMoviesResponse: Codable {
    let results: [Movie]
}

struct Movie: Codable {
    let id: Int
    let media_type: String?
    let original_name: String?
    let origin_title: String?
    let poster_path: String?
    let overview: String?
    let vote_count: Int
    let release_date: String?
    let vote_average: Double
}

/*
 adult = 0;
 "backdrop_path" = "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg";
 "genre_ids" =             (
     28,
     10752
 );
 id = 840326;
 "media_type" = movie;
 "original_language" = fi;
 "original_title" = Sisu;
 overview = "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.";
 popularity = "1972.58";
 "poster_path" = "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg";
 "release_date" = "2022-10-12";
 title = Sisu;
 video = 0;
 "vote_average" = "7.518";
 "vote_count" = 516;
 */
