import { Typography } from '@mui/material'
import React from 'react'

const SectionalHeading = ({variant, align, color, title}) => {
  return (
    <>
    <Typography className="SectionalHeading" variant={variant} align={align} style={{color:color}}>{title}</Typography>
    </>
  )
}

export default SectionalHeading