import axios from 'axios';

const API_KEY = '31040308-bd27c3f4cf506e614f730da89';

axios.defaults.baseURL = `https://pixabay.com/api/`;

axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export async function fetchImages(searchQuery, page) {
  const { data } = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}&page=${page}`
  );
  return data;
}
