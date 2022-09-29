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

    return (
        <div className='pokemon'>
            <h1>{pokemon.name}</h1>
            <p>Pokemon numero: {id}</p>
            <img src={pokemon.sprites?.other.home.front_default} alt="" className='photo'/>
        </div>
    );
};

export default Pokemon;