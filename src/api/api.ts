//const API_BASE_URL = "https://api.pexels.com/v1/";
const API_BASE_URL = "https://388cc033-dc32-40a1-b333-821b854d4f02.mock.pstmn.io/";
const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";

export interface PhotoSrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoSrc;
  liked: boolean;
  alt: string;
}

export interface CuratedResponse {
  photos: Photo[];
  page: number;
  per_page: number;
  total_results: number;
  prev_page?: string;
  next_page?: string;
}

export interface SearchResponse {
  photos: Photo[];
  page: number;
  per_page: number;
  total_results: number;
  prev_page?: string;
  next_page?: string;
}

const options: RequestInit = {
  headers: {"Autorization": API_KEY},
  mode: "no-cors"
}

export function fetchCurated(
  page?: number,
  perPage?: number
): Promise<CuratedResponse> {
  const queryString = new URLSearchParams();
  if (page !== undefined) queryString.set("page", page.toString());
  if (perPage !== undefined) queryString.set("per_page", perPage?.toString());
  return fetch(API_BASE_URL + "curated?" + queryString,{headers: {"Authorization": API_KEY}}).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<CuratedResponse>;
  });
}

export function fetchSearch(
  query: string,
  page?: number,
  perPage?: number
): Promise<SearchResponse> {
  const queryString = new URLSearchParams();
  queryString.set("query", query);
  if (page !== undefined) queryString.set("page", page.toString());
  if (perPage !== undefined) queryString.set("per_page", perPage?.toString());
  return fetch(API_BASE_URL + "search?" + queryString, {headers: {"Authorization": API_KEY}}).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<SearchResponse>;
  });
}
