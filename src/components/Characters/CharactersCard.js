import React from 'react'
import { useParams } from 'react-router-dom'

export const CharactersCard = ({ id, name, description, thumbnail }) => {

    const {heroId} = useParams();
    console.log(heroId);
    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}
