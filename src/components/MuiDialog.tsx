import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'

const MuiDialog = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
            >
                <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">Are you sure you want to submit? You will not be able to submit after confirming.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialog
