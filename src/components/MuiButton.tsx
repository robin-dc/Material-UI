import React, { useState } from 'react'
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'

import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)

    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string | null
    ) => {
        setFormats(updatedFormats)
    }

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant="text" href="https://google.com">Text</Button>
            <Button variant="contained" >contained</Button>
            <Button variant="outlined" >outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">secondary</Button>
            <Button variant="contained" color="error">error</Button>
            <Button variant="contained" color="warning">warning</Button>
            <Button variant="contained" color="info">info</Button>
            <Button variant="contained" color="success">success</Button>
        </Stack>

        <Stack spacing={2} display="block" direction="row">
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">medium</Button>
            <Button variant="contained" size="large">large</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant="contained" size="small" startIcon={<SendIcon/>} disableRipple>Send</Button>
            <Button variant="contained" size="small" endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label="send" color="success" size="small">
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack direction="row">
            <ButtonGroup
                variant="contained"
                orientation="vertical"
                size="small"
                color="secondary"
                aria-label="alignment button group"
            >
               <Button onClick={() => {}}>Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction="row">
            <ToggleButtonGroup
                aria-label="text-formatting"
                value={formats}
                onChange={handleFormatChange}
                size="small"
                color="success"
                orientation="vertical"
                exclusive
            >
                <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>

  )
}

export default MuiButton
