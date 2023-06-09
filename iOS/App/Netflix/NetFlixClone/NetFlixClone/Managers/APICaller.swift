//
//  APICaller.swift
//  NetFlixClone
//
//  Created by shishir roy on 6/1/23.
//

import Foundation

struct Constants {
    static let API_KEY = "7091e8a49ac1fad66297ecceac8f1081"
    static let baseURL = "https://api.themoviedb.org"
    static let YoutubeAPI_KEY = "AIzaSyBUA5wIi_zTlNp5J3-75SOaWF-xmc4GGv4"
    static let YoutubebaseURL = "https://youtube.googleapis.com/youtube/v3/search?"
}

enum APIError: Error {
    case failedTogetData
}

class APICaller {
    static let shared = APICaller()
    
//    func getTrendingMovies(completion: @escaping (String) -> Void) {
    func getTrendingMovies(completion: @escaping (Result<[Title], Error>) -> Void) {
        guard let url = URL(string: "\(Constants.baseURL)/3/trending/movie/day?language=en-US&api_key=\(Constants.API_KEY)") else {return}
        let task = URLSession.shared.dataTask(with: URLRequest(url:url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
//                let result = try JSONSerialization.jsonObject(with: data, options: .fragmentsAllowed)
//                print(result)
                
                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
//                print(result.results[0].id)
                completion(.success(result.results))
                
            }catch {
//                completion(.failure(error))
//                print(error.localizedDescription)
                completion(.failure(APIError.failedTogetData))
            }
        }
        
        task.resume()
    }
    
    func getTrendingTvs(completion: @escaping (Result<[Title], Error>) -> Void) {
        guard let url = URL(string: "\(Constants.baseURL)/3/trending/tv/day?language=en-US&api_key=\(Constants.API_KEY)") else {return}
        let task = URLSession.shared.dataTask(with: URLRequest(url:url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
                completion(.success(result.results))
//                print(result)
//                completion(.success(result.results))
                
            }catch {
                completion(.failure(APIError.failedTogetData))
            }
        }
        task.resume()
    }
    
    func getUpcomingMovies(completion: @escaping (Result<[Title], Error>) -> Void) {
        guard let url = URL(string: "\(Constants.baseURL)/3/movie/upcoming?api_key=\(Constants.API_KEY)") else {return}
        let task = URLSession.shared.dataTask(with: URLRequest(url:url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
                completion(.success(result.results))
            }catch {
                completion(.failure(APIError.failedTogetData))
            }
        }
        task.resume()
    }
    
    func getPopular(completion: @escaping (Result<[Title], Error>) -> Void) {
        guard let url = URL(string: "\(Constants.baseURL)/3/movie/popular?api_key=\(Constants.API_KEY)&language=en-US&page=1") else {return}
        let task = URLSession.shared.dataTask(with: URLRequest(url:url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
                completion(.success(result.results))
            }catch {
                completion(.failure(APIError.failedTogetData))
            }
        }
        task.resume()
    }
    
    func getTopRated(completion: @escaping (Result<[Title], Error>) -> Void) {
        guard let url = URL(string: "\(Constants.baseURL)/3/movie/top_rated?api_key=\(Constants.API_KEY)") else {return}
        let task = URLSession.shared.dataTask(with: URLRequest(url:url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
                completion(.success(result.results))
            }catch {
                completion(.failure(APIError.failedTogetData))
            }
        }
        task.resume()
    }
    
    func getDiscoverMovies(completion: @escaping (Result<[Title], Error>) -> Void) {
        guard let url = URL(string: "\(Constants.baseURL)/3/discover/movie?api_key=\(Constants.API_KEY)&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc") else {return}
        let task = URLSession.shared.dataTask(with: URLRequest(url: url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
                completion(.success(result.results))
            }catch {
                completion(.failure(APIError.failedTogetData))
            }
        }
        task.resume()
    }
    
    func search(with query: String, completion: @escaping (Result<[Title], Error>) -> Void) {
        guard let query = query.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed) else {return}
        guard let url = URL(string: "\(Constants.baseURL)/3/search/movie?api_key=\(Constants.API_KEY)&query=\(query)") else {return}
        let task = URLSession.shared.dataTask(with: URLRequest(url: url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
                completion(.success(result.results))
            }catch {
                completion(.failure(APIError.failedTogetData))
            }
        }
        task.resume()
    }
    
    func getMovie(with query: String, completion: @escaping (Result<VideoElement, Error>) -> Void) {
        guard let query = query.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed) else {return}
        guard let url = URL(string: "\(Constants.YoutubebaseURL)?q=\(query)&key=\(Constants.YoutubeAPI_KEY)") else {
            return
        }
        
        let task = URLSession.shared.dataTask(with: URLRequest(url: url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
                let result = try JSONDecoder().decode(YoutubeSearchResponse.self, from: data)
                completion(.success(result.items[0]))
            }catch {
                completion(.failure(APIError.failedTogetData))
            }
        }
        task.resume()
    }
    
    func getMovie_test(with query: String){
        guard let query = query.addingPercentEncoding(withAllowedCharacters: .urlHostAllowed) else {return}
        guard let url = URL(string: "\(Constants.YoutubebaseURL)?q=\(query)&key=\(Constants.YoutubeAPI_KEY)") else {
            return
        }
        
        let task = URLSession.shared.dataTask(with: URLRequest(url: url)){data,_,error in
            guard let data = data, error == nil else {
                return
            }
            do {
//                let result = try JSONDecoder().decode(TrendingTitleResponse.self, from: data)
//                completion(.success(result.results))
                
                let result = try JSONSerialization.jsonObject(with: data, options: .fragmentsAllowed)
                print(result)
            }catch {
//                completion(.failure(APIError.failedTogetData))
                print(error.localizedDescription)
            }
        }
        task.resume()
    }
}
