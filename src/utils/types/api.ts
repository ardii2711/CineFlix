export interface IResponse<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

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
