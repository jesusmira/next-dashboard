'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFav = () => {

    const pokemonsFavorites = useAppSelector(state =>  Object.values(state.pokemons.favorites));
    // const [pokemons, setPokemons] = useState(pokemonsFavorites)


    // useEffect(() => {
    //     // console.log(pokemonsFavorites);
    //     setPokemons( pokemonsFavorites );
    // }, [pokemonsFavorites])
    

    return (
        // <PokemonGrid pokemons={pokemonsFavorites} />
        // <PokemonGrid pokemons={pokemons} />
        <>
            {
                pokemonsFavorites.length === 0
                ? (<NoFavorites />)
                : (<PokemonGrid pokemons={pokemonsFavorites} />)
            }  
        </>
    )
}
export const NoFavorites = () => {
    return (
      <div className="flex flex-col h-[50vh] justify-center items-center">
          <IoHeartOutline size={100} className="text-red-500" />
          <span className="text-2xl font-semibold text-gray-800">No tienes favoritos</span>
      </div>
    );
  };
