import React from 'react'
import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save';

const MuiLoadingButton = () => {
  return (
    <Stack direction="row" spacing={2}>
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton loading variant="outlined">
            Submit
        </LoadingButton>
        <LoadingButton variant="outlined" loadingIndicator="Loading...">Fetching Data</LoadingButton>
        <LoadingButton loading variant="outlined" loadingIndicator="Loading...">Fetching Data</LoadingButton>
        <LoadingButton
            variant="outlined"
            loadingPosition="start"
            startIcon={<SaveIcon/>}
        >
            Save
        </LoadingButton>
        <LoadingButton
            loading
            variant="outlined"
            loadingPosition="start"
            startIcon={<SaveIcon/>}
        >
            Save
        </LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton
