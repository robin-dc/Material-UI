import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'

const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">React</Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias animi consequatur sed, pariatur, nulla nemo dolores doloribus, vitae nostrum atque beatae dolorem doloremque quia. Maiores praesentium ut quam ducimus perspiciatis?
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard
