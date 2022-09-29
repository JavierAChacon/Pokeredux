import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
    
    const { id } = useParams()

    const [pokemon, setPokemon] = useState({})


    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
    }, [id])

    const pokename = pokemon.name

    return (
        <div className='pokemon'>
            
            <h1>{pokename?.[0].toUpperCase()}{pokename?.slice(1)}</h1>
            
            <p className='id'>#{pokemon.id}</p>

            <div>

                <img src={pokemon.sprites?.other['official-artwork']?.front_default} alt="" />

            </div>

            <div className='stats'>
                <p>Helath Points (Hp): {pokemon.stats?.[0].base_stat}</p>
                <p>Weight: {pokemon.weight / 10} Kg </p>
                <p>Height: {pokemon.height / 10} Meters</p>

            </div>
        </div>
    );
};

export default Pokemon;