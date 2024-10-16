
import axios from 'axios'; // importerar axios för att göra HTTP-anrop

const API_KEY = 'abe333f06bf4f625c9f2d82d4962a58b'; // definierar min API-nyckel
const BASE_URL = 'https://api.themoviedb.org/3'; //  definierar bas-URL:en för API-anropen

// Jag exporterar en asynkron funktion för att hämta filmer
export const fetchMovies = async (searchTerm = '') => {
  try {
    
    const url = searchTerm
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}` // Sök efter filmer baserat på sökterm
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`; // Hämtar populära filmer om sökterm är tom

    const response = await axios.get(url); // Jag gör ett GET-anrop till API:et
    return response.data.results; // Jag returnerar resultaten från API-anropet
  } catch (error) {
    console.error('Error fetching movies:', error); // eventuella fel loggas
    return []; // Jag returnerar en tom array om det blir fel
  }
};
