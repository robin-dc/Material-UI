import React, { useState} from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/lab'
const MuiDataPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    return (
        <Stack spacing={4} sx={{width: '250px'}}>
            <DatePicker
                label="Date Picker"
                renderInput={(params) => <TextField {...params}/>}
                value={selectedDate}
                onChange={(newValue) => {
                    setSelectedDate(newValue);
                }}
            />
        </Stack>
    )
}

export default MuiDataPicker
// npm install date-fns @date-io/date-fns
