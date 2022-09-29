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

   
    return (
        <div className='card' onClick={() => navigate(`/pokedex/${details.id}`)}>
            <h2 className='name'>{details.name}</h2>
            <img src={details.sprites?.other['official-artwork']?.front_default} alt="" className='image'/>
        </div>
    );
};

export default PokemonCard;