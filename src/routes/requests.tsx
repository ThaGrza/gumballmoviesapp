import { TMDB_API_KEY } from 'react-native-dotenv';


const requests = {
   fetchAction: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
   fetchComedy: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
   fetchHorror: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
   fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
   fetchRomance: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
   fetchAnimation: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
   fetchDrama: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=18`,
   fetchMystery: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648`,
   fetchWestern: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37`,
   fetchScienceFiction: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878`,
}