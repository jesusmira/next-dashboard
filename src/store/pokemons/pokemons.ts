import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

/*
    {
        favorites: {
            '1': { id: '1', name: 'Bulbasaur' },
            '3': { id: '3', name: 'Venusaur' },
        }   
    } 
 */


interface PokemonsState {
   favorites:{ [key: string]: SimplePokemon}
}

// const getInitialState = (): PokemonsState => {
//     // if ( typeof localStorage === 'undefined' ) return {}
//     const favorites = JSON.parse( localStorage.getItem('favorites-pokemons') ?? '{}');
//     return favorites;
// }

const initialState: PokemonsState = {
    favorites: {}
    // ...getInitialState()
    // '1': { id: '1', name: 'Bulbasaur' },
    // '3': { id: '3', name: 'Venusaur' },

}
const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritesPokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon}>) {
        state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

        const pokemon = action.payload;
        const { id } = pokemon;

        if ( !!state.favorites[id] ) {
            delete state.favorites[id];
            // return;
        }else{
            state.favorites[id] = pokemon;
        }
        //TODO. no se deberia hacer esto en el store en redux
        localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));
    }
  },
});

export const { toggleFavorite, setFavoritesPokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer