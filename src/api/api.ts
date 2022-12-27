import { CuratedResponse, SearchResponse } from "./interfaces";

const API_BASE_URL = "https://api.pexels.com/v1/";
const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";

const options: RequestInit = {
  headers: { Authorization: API_KEY },
};

export function fetchCurated(
  page?: number,
  perPage?: number
): Promise<CuratedResponse> {
  const queryString = new URLSearchParams();
  if (page !== undefined) queryString.set("page", page.toString());
  if (perPage !== undefined) queryString.set("per_page", perPage.toString());
  return fetch(API_BASE_URL + "curated?" + queryString, options).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<CuratedResponse>;
    }
  );
}

export function fetchSearch(
  query: string,
  page?: number,
  perPage?: number,
  locale?: string,
  searchOrientation?: string,
  searchSize?: string
): Promise<SearchResponse> {
  const queryString = new URLSearchParams();
  queryString.set("query", query);
  if (page !== undefined) queryString.set("page", page.toString());
  if (perPage !== undefined) queryString.set("per_page", perPage.toString());
  if (locale) queryString.set("locale", locale.toString());
  if (searchOrientation)
    queryString.set("orientation", searchOrientation.toString());
  if (searchSize) queryString.set("size", searchSize.toString());
  return fetch(API_BASE_URL + "search?" + queryString, options).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<SearchResponse>;
    }
  );
}
