import React, {useState} from 'react'
import { Stack, TextField, InputAdornment } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
    const [value, setValue] = useState<string>('')
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled"/>
            <TextField label="Name" variant="standard"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Small secondary" size="small" color="secondary" variant="outlined"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField
                label="Form input"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error={!value}
                helperText={!value ? 'Required' : 'Do not share your password with anyone'}
            />
            <TextField
                label="Password"
                type="password"
                helperText="Do not share your password with anyone"
                disabled
            />
            <TextField label="Read only" InputProps={{readOnly: true}}/>

        </Stack>
        <Stack direction="row" spacing={2}>
            <TextField
                label="Amount"
                InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
            />
            <TextField
                label="Weight"
                InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}}
            />
            <TextField
                label="Password"
                type="password"
                InputProps={{endAdornment: <InputAdornment position="end">
                    <VisibilityIcon size="small"/>
                </InputAdornment>}}
            />
        </Stack>
    </Stack>
  )
}

export default MuiTextField
