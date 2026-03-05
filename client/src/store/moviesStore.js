import {create} from 'zustand';

export const useMoviesStore = create((set) => ({
    movies: [],
    selectedMovie: {},
    isLoading: false,
    error: false,
    searchQuery: 'e',
    setMovies: (movies) => set({movies: movies}),
    fetchMovies: async () => {
        set({isLoading: true})
        try {
            const response = await fetch('http://localhost:8000/api/movies');
            const data = await response.json();
            set({movies:data, isLoading:false})
        } 
        catch (error) {
            set({error: error.message, isLoading: false})
        }
    },
    setSelectedMovie: (title) =>  set((state)=> ({selectedMovie: state.movies.filter((movie)=> movie.Title === title)[0]})),
    setSearchQuery: (input) => set({searchQuery: input})
}));