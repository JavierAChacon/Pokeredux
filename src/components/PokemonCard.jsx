import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {
    
    const [details, setDetails] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
        .then(res => setDetails(res.data))
    })

    const pokename = details.name
   
    return (
        <div className='card' onClick={() => navigate(`/pokedex/${details.id}`)}>
            
            <h2 className='name'>{pokename?.[0].toUpperCase()}{pokename?.slice(1)}</h2>
            <div className='pokefoto'>

            <img src={details.sprites?.other['official-artwork']?.front_default} alt="" className='image'/>

            </div>
        </div>
    );
};

export default PokemonCard;