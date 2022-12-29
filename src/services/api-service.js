import axios from 'axios';

export const fetchImages = async (querry, page) => {
  return await axios.get(`https://pixabay.com/api/?key=31040308-bd27c3f4cf506e614f730da89&per_page=12&q=${querry}&page=${page}`);
};
