import React, { useState, forwardRef } from 'react'
import { Snackbar, Button, Alert, AlertProps  } from '@mui/material'

const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackBarAlert(props, ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if(reason === "clickaway"){
            return
        }
        setOpen(false)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            {/* <Snackbar
                message="Form submitted successfully!"
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            /> */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <SnackBarAlert onClose={handleClose} severity="success">
                    Form Submitted Successfully!
                </SnackBarAlert>
            </Snackbar>
        </>
    )
}

export default MuiSnackbar
