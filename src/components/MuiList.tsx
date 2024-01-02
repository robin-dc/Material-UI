import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

const MuiList = () => {
  return (
    <Box sx={{width: "400px", bgColor: "#efefef"}}>
        <List>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List Item 1" secondary="Secondary text"/>
                </ListItemButton>
            </ListItem>

            <Divider/>

            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="List Item 2" secondary="Secondary text"/>
            </ListItem>

            <Divider/>

            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="List Item 3" secondary="Secondary text"/>
            </ListItem>

        </List>
    </Box>
  )
}

export default MuiList
