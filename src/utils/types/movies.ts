export interface IMovie {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: IMediaType;
  adult: boolean;
  original_language: IOriginalLanguage;
  genre_ids: number[];
  popularity: number;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum IMediaType {
  Movie = "movie",
}

export enum IOriginalLanguage {
  En = "en",
  Hi = "hi",
  Ko = "ko",
}


export interface IDetailMovie {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  origin_country:        string[];
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      null | string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

export interface IMovieImage {
  backdrops: Backdrop[];
  id:        number;
  logos:     Backdrop[];
  posters:   Backdrop[];
}

export interface Backdrop {
  aspect_ratio: number;
  height:       number;
  iso_639_1:    null | string;
  file_path:    string;
  vote_average: number;
  vote_count:   number;
  width:        number;
}

