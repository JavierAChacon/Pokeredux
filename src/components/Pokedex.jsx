import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import upperType from '../utils/upperType';
import { current } from '@reduxjs/toolkit';

const Pokedex = () => {
    
    const name = useSelector(state => state.userName)

    const [pokedex, setPokedex] = useState([])

    const navigate = useNavigate()

    const [nameInput, setNameInput] = useState('')

    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/?limit=1154&offset=0')
        .then(res => setPokedex(res.data.results))

        axios
        .get('https://pokeapi.co/api/v2/type/')
        .then(res => setTypeList(res.data.results))
    }, [])
    
    const searchName = () => {
        const number = Number(nameInput)

        if (nameInput != number) {

            const lowerNameInput = nameInput.toLowerCase()
            const index = pokedex.findIndex(pokemon => pokemon.name === lowerNameInput)
    
            if (index === -1){
                alert("Pokemon not found")
            } else {
                navigate(`/pokedex/${lowerNameInput}`)
            }

        } else {
            navigate(`/pokedex/${number}`)
        }
    }

    const searchTypes = (typeUrl) => {
        axios.get(typeUrl)
        .then(res => setPokedex(res.data.pokemon))
    }
    
    const [typesList, setTypeList] = useState([])

    const [page, setPage] = useState(1)
    
    const pokemonPerPage = 20
    
    const last = page * pokemonPerPage
    
    const first = last - pokemonPerPage

    const pokedexPaginated = pokedex.slice(first, last)

    const totalPages = Math.ceil(pokedex.length / pokemonPerPage)

    const pagesNumbers = []

    const [currentPage, setCurrentPage] = useState(1)

    const [lastPage, setLastPage] = useState(5)

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        setLastPage(lastPage -1)

    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        setLastPage(lastPage + 1)
    }

    for(let i = currentPage; i <= lastPage; i++){
        pagesNumbers.push(i)
    }



    return (
        
        <div className='pokedex'>
           <h1>Pokedex</h1>
           <p>Bienvenido {name}</p>
           <form>
            <input 
            type="text" 
            placeholder='Search by name or id'
            value = {nameInput}
            onChange= {e => setNameInput(e.target.value)}/>
            <button onClick={searchName}>Search</button>
            </form>

            <div>
                <button onClick={() => prevPage()} disabled={currentPage === 1}>Prev Page</button>
                
                {
                    pagesNumbers.map(number => (
                        <button key = {number} onClick={() => setPage(number)}>{number}</button>
                    ))
                }

                <button onClick={() => nextPage()} disabled= {currentPage === totalPages}>Next page</button>
            
            </div>


            <div>
                <select onChange= {e => searchTypes(e.target.value)}>
                    <option value="">Type</option>
                    {typesList.map(type => (
                        <option value= {type.url} key={type.url}>{upperType(type.name)}</option>
                    ))}
                </select>
            </div>

           {
            pokedexPaginated.map(pokemon => (
                <PokemonCard url ={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                key={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                />
                
            ))
           }
        </div>
    );
};

export default Pokedex;