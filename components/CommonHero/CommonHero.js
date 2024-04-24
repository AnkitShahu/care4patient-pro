import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Styles from '../../styles/components-style/CommonHero/CommonHero.module.css'
import {KeyboardArrowRight} from '@mui/icons-material'

const CommonHero = ({ align, title, color, breadcrumb, bg }) => {
  return (
    <>
      <Container maxWidth="xxl" className={`${Styles.commonHero}`} style={{backgroundImage:`url(${bg.src})`}}>
        <Grid container style={{height: '100%'}}>
          <Grid item xs={12} md={10} className="mx-auto d-flex align-items-center" style={{height: '100%'}}>
            <Box>
            <Typography variant='h1' align={align} style={{ color: color }}>{title}</Typography>
            <Box py={2}>
              {
                (breadcrumb !== null) ? <nav aria-label="breadcrumb">
                  <ul className='breadcrumb'>
                  {
                    breadcrumb.map(item => <li key={item.id} className={`breadcrumb-item ${item.link === null ? 'active' : ''}`}aria-current={item.link === null ? 'page' : null}><span><KeyboardArrowRight /> </span>
                      {
                        item.link !== null ? <Link href={item.link}><a style={{color:'var(--dark-green) !important', fontWeight:"700 !important"}} >{item.title}</a></Link> : <strong>{item.title}</strong>
                      }
                    </li>)
                  }
                </ul>
                </nav> : null
              }
            </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default CommonHero