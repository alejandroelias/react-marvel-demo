import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchHeroes } from '../../hooks/useFetchHeroes';

export const CharactersCard = ({ id, name, description, thumbnail }) => {

    const {heroId} = useParams();
    // console.log(heroId);

    const {data:heroes } = useFetchHeroes();


    const getHeroById = (heroId) => {
        
        return heroes.find(hero => hero.id === heroId);
    }
    
    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}
