import { Grid, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useFetchHeroes } from '../../hooks/useFetchHeroes';
import { CharacterGrid } from './CharactersGrid';

export const CharactersScreen = () => {

    useEffect(() => {
        getCharacters();
    }, []);

    const [heroes, setHeroes] = useState([]);


    const getCharacters = async () => {
        const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a469d537242aa86366793c4d967002ba&hash=7f20301e7b4fa19a61cffb032aab3714&limit=30';

        const resp = await fetch(url);
        const { data } = await resp.json();
        // console.log(data);

        const characters = data.results.map(results => {
            return {
                id: results.id,
                name: results.name,
                description: results.description,
                thumbnail: results.thumbnail.path + "." + results.thumbnail.extension
            }
        })

        // console.log(characters);
        setHeroes(characters);
    }

    const {data, loading} = useFetchHeroes();
    console.log(data);

    
    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h2" component="h2">
                Characters
            </Typography>
            <TextField sx={{ width: '100%' }} margin="normal" label="Search by name" variant="outlined" />
            {loading ? 'Loading...': 'Data load'}
            <Grid container spacing={2}>
                {
                    heroes.map(heroe => (

                        <CharacterGrid
                            key={heroe.id}
                            {...heroe}
                        />
                    ))
                }
            </Grid>
        </div>
    )
}
