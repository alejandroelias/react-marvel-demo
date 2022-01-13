import React from 'react'

import Card from '@mui/material/Card';
import { Button, CardContent, CardMedia, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export const CharacterGrid = ({ id, name, thumbnail }) => {
    // console.log(thumbnail)
    return (
        <>
            <Grid item xs={4} md={2}>
                <Card sx={{ maxWidth: 345, height:425 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={thumbnail}
                        alt={name}
                    />
                    <CardContent>
                        <Typography sx={{ textAlign: 'center', fontSize: 14, fontWeight: 'bold'}}>
                            {name}
                        </Typography>
                        <br />
                        <Button margin="normal" variant="outlined" size="small" >
                            <Link to={`/character/${id}`}>
                                More...
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
