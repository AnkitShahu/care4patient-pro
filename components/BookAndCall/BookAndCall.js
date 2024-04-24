import { Box } from '@mui/material'
import React from 'react'
import { BlueFilledBtn, BlueOulinedBtn } from '../components'

const BookAndCall = ({appointment, call}) => {
  return (
    <>
    <Box>
        {
            appointment ? <BlueFilledBtn btnLink="/book-now/" navlink={true} btnTitle="BOOK AN APPOINTMENT" /> : null
        }
        {
            call ? <BlueOulinedBtn btnLink="tel:03-9782 1200" anchor={true} btnTitle="CALL NOW"  /> : null
        }
    </Box>
    </>
  )
}

export default BookAndCall