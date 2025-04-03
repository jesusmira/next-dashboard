import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";


export const localstorageMiddleware = (state: MiddlewareAPI<Dispatch<Action>, any>) => {
    return (next: Dispatch) => (action: Action) => {
        next(action); // Permite que la acción continúe su ejecución
        // console.log("Estado actual:", state.getState()); // Ver estado actual

        if( action.type === 'pokemons/toggleFavorite'){
           const { pokemons } = state.getState() as RootState;
           localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons));
           return;
        }
    };
};


