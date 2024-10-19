
const API_KEY = 'abe333f06bf4f625c9f2d82d4962a58b'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (searchTerm = '') => {
  try {
    const url = searchTerm
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
