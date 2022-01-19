import React, { useState } from 'react'
import { Grid, Typography, TextField, CircularProgress } from '@mui/material';

import { useFetchHeroes } from '../../hooks/useFetchHeroes';
import { CharacterGrid } from './CharactersGrid';

export const CharactersScreen = () => {

    // TODO: desde aqui realizar la busqueda por nombre  
    // const [name, setName] = useState(['Iron man']);
    
    const {data:heroes, loading} = useFetchHeroes();

    return (
        <>
            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h2" component="h2">
                Characters
            </Typography>
            <TextField sx={{ width: '100%' }} margin="normal" label="Search by name" variant="outlined" />
            {loading && <CircularProgress />}
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
        </>
    )
}
