import React from 'react'
import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is an warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="success">This is an success alert</Alert>

        <Alert variant="outlined" severity="error" onClose={() => alert("close alert")}>
            <AlertTitle>Error</AlertTitle>
            This is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is an warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert
        </Alert>
        <Alert
            variant="outlined"
            severity="success"
            icon={<CheckIcon fontSize='inherit'/>}
            action={
                <Button color="inherit" size="small">
                    UNDO
                </Button>
            }
        >
            <AlertTitle>Success</AlertTitle>
            This is an success alert
        </Alert>

        <Alert variant="filled" severity="error">This is an error alert</Alert>
        <Alert variant="filled" severity="warning">This is an warning alert</Alert>
        <Alert variant="filled" severity="info">This is an info alert</Alert>
        <Alert variant="filled" severity="success">This is an success alert</Alert>
    </Stack>
  )
}

export default MuiAlert
