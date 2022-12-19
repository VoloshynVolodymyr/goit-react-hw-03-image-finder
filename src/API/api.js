import axios from 'axios';
const API_KEY = '30807172-c123f2518b79ce33b2191dfa5';

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function getImages(query, page = 1) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: 12,
  });
  const response = await axios.get(`/?${searchParams}`);
  return response.data;
}

