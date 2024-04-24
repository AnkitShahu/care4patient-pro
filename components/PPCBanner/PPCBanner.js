import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../styles/components-style/PPCBanner/PPCBanner.module.css'
import { BookAndCall } from '../components'

const PPCBanner = ({ bg, title, tagline, align }) => {
    return (
        <>
            <Container className={`${Styles.banner}`} maxWidth="xxl" style={{ backgroundImage: `url(${bg.src})` }}>
                <Grid container style={{ height: "inherit" }}>
                    <Grid item xs={12} md={11} className={`mx-auto d-flex ${align === 'end' ? 'justify-content-end' : align === 'start' ? 'justify-content-start' : ''} align-items-center`} style={{ height: "inherit" }}>
                        <Box>
                            <Typography variant='h1' style={{color:"#fff"}}>{title}</Typography>
                            <Typography className='para' style={{color:"#fff"}} dangerouslySetInnerHTML={{__html: tagline}} />
                            <Box>
                                <BookAndCall appointment={true} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PPCBanner