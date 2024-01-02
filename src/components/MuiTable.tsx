import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Firstname</TableCell>
                    <TableCell>Lastname</TableCell>
                    <TableCell align="center">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [{
    "id": 1,
    "first_name": "Sonny",
    "last_name": "Helliwell",
    "email": "shelliwell0@acquirethisname.com",
    "gender": "Polygender",
    "ip_address": "178.255.126.11"
  }, {
    "id": 2,
    "first_name": "Tisha",
    "last_name": "Lound",
    "email": "tlound1@about.com",
    "gender": "Female",
    "ip_address": "102.143.60.141"
  }, {
    "id": 3,
    "first_name": "Victoria",
    "last_name": "Szymonowicz",
    "email": "vszymonowicz2@tinyurl.com",
    "gender": "Genderfluid",
    "ip_address": "106.55.73.238"
  }, {
    "id": 4,
    "first_name": "Fair",
    "last_name": "Bern",
    "email": "fbern3@aboutads.info",
    "gender": "Male",
    "ip_address": "221.54.90.251"
  }, {
    "id": 5,
    "first_name": "Wright",
    "last_name": "Baccup",
    "email": "wbaccup4@cnn.com",
    "gender": "Male",
    "ip_address": "10.61.38.211"
  }, {
    "id": 6,
    "first_name": "Jackelyn",
    "last_name": "Weddell",
    "email": "jweddell5@tumblr.com",
    "gender": "Female",
    "ip_address": "152.172.149.243"
  }, {
    "id": 7,
    "first_name": "Dasya",
    "last_name": "Stead",
    "email": "dstead6@pen.io",
    "gender": "Female",
    "ip_address": "144.59.248.189"
  }, {
    "id": 8,
    "first_name": "Alejandrina",
    "last_name": "Baswall",
    "email": "abaswall7@google.es",
    "gender": "Female",
    "ip_address": "52.237.241.203"
  }, {
    "id": 9,
    "first_name": "Neel",
    "last_name": "Thoma",
    "email": "nthoma8@theguardian.com",
    "gender": "Male",
    "ip_address": "175.252.106.30"
  }, {
    "id": 10,
    "first_name": "Marice",
    "last_name": "Meakes",
    "email": "mmeakes9@yahoo.co.jp",
    "gender": "Genderfluid",
    "ip_address": "59.119.127.64"
  }]

export default MuiTable
