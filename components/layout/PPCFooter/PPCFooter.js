import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import {Copyright} from '@mui/icons-material'

const PPCFooter = () => {
  return (
    <>
    <footer style={{backgroundColor:"var(--dark-blue) !important", padding:0}}>
        <Container maxWidth="xxl" style={{backgroundColor:"var(--dark-blue) !important"}} className="py-1">
            <Typography className='text-white' align='center'><Copyright className='text-white' /> {new Date().getFullYear()} All Rights Reserved. | Carrum Downs Dental Group</Typography>
        </Container>
    </footer>
    </>
  )
}

export default PPCFooter