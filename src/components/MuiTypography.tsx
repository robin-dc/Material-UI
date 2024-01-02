import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <>
        <Typography variant="h1" component="h1">H1 HEADING</Typography>
        <Typography variant="h2" component="h2">h2 HEADING</Typography>
        <Typography variant="h3" component="h3">h3 HEADING</Typography>
        <Typography variant="h4" component="h4" gutterBottom>h4 HEADING</Typography>
        <Typography variant="h5" component="h5">h5 HEADING</Typography>

        <Typography variant="subtitle1">subtitle1 HEADING</Typography>
        <Typography variant="subtitle2">subtitle2 HEADING</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, beatae provident. Ullam reiciendis officia, iusto incidunt cumque facere deleniti eaque ipsum enim veniam similique amet, nihil consequatur praesentium ipsa. Assumenda.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ipsa assumenda quae aliquid harum eligendi nesciunt exercitationem autem, illo ex ipsam debitis provident voluptatem cum corporis sed consectetur iste nam.</Typography>
    </>

  )
}

export default MuiTypography
