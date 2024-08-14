import axios from "axios";
import { API_KEY, BASE_URL } from "../constants";
import { IMovie, IResponse } from "../types/api";

export const getTrendingMovies = async (periode: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/${periode}?api_key=${API_KEY}`);
    return response.data as IResponse<IMovie[]>
  } catch (error: any) {
    const message = error.response?.data.status_message || error.message;
    throw new Error(message);
  }
}

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data as IResponse<IMovie[]>
  } catch (error: any) {
    const message = error.response?.data.status_message || error.message;
    throw new Error(message);
  }
}

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    return response.data as IResponse<IMovie[]>
  } catch (error: any) {
    const message = error.response?.data.status_message || error.message;
    throw new Error(message);
  }
}

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    return response.data as IResponse<IMovie[]>
  } catch (error: any) {
    const message = error.response?.data.status_message || error.message;
    throw new Error(message);
  }
}

export const getDetailMovies = async (movie_id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
    return response.data as IMovie;
  } catch (error: any) {
    const message = error.response?.data.status_message || error.message;
    throw new Error(message);
  }
}