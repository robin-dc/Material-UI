import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {
    const [value, setValue] = useState<number | null>(4)


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }

    return (
        <Stack space={2}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size="large"
                icon={<FavoriteIcon fontSize='inherit' color="error"/>}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
                readOnly
            />
        </Stack>
    )
}

export default MuiRating
