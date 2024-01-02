import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MuiCheckBox = () => {

  const [acceptTnC, setAcceptTnC] = useState<boolean>(false)
  const [skills, setSkills] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked)
  }

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if(index == -1){
      setSkills([...skills, event.target.value])
    }
    else{
      setSkills(skills.filter(skill => skill !== event.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon/>}
          checkedIcon={<BookmarkIcon/>}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
              <FormControlLabel
              label="HTML"
              control={<Checkbox size="small" color="secondary" value="html" checked={skills.includes('html')} onChange={handleSkillChange}/>}
            />
              <FormControlLabel
              label="CSS"
              control={<Checkbox value="css" checked={skills.includes('css')} onChange={handleSkillChange}/>}
            />
              <FormControlLabel
              label="Javascript"
              control={<Checkbox value="javascript" checked={skills.includes('javascript')} onChange={handleSkillChange}/>}
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckBox
