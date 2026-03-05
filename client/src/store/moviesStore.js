import {create} from 'zustand';

export const useMoviesStore = create((set) => ({
    movies: [],
    selectedMovie: {},
    isLoading: false,
    error: false,
    // addToCart: (product) => set((state) => ({cart: [...state.cart, product]})),
    // removeFromCart: (productId) => set((state) => ({cart: state.cart.filter((item) => item.id !== productId)})),
    // resetCart: () => set({cart: []}),

    // setMovies(movies) 
    // setLoading(boolean) 
    // setError(message|null) 

    setMovies: async () => {
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

    setSelectedMovie: (title) =>  set((state)=> ({selectedMovie: state.movies.filter((movie)=> movie.Title === title)[0]}))

}));