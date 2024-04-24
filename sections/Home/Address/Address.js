import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { SectionalHeading } from '../../../components/components'
import { Home, Phone, Mail } from '@mui/icons-material'
import Styles from '../../../styles/Home.module.css'
import Scan from '../../../public/sidebar/scan.png'

const Address = () => {
    return (
        <>
            <Container maxWidth="xxl" className='p-0'>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box className='ratio ratio-1x1'>
                            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="800" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className={`d-flex justify-content-center align-items-center ${Styles.map}`}>
                        <Box className={`p-2 p-md-0 ${Styles.addressBox}`}>
                            <SectionalHeading variant='h2' align='left' color="var(--dark-blue)" title="Care for Patients" />
                            <Box py={3}>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Home style={{ color: 'var(--dark-blue)' }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Care for Patients" className="font-weight-bold" />
                                    </ListItem>
                                    {/* <ListItem>
                                        <ListItemIcon>
                                            <Phone style={{ color: 'var(--dark-blue)' }} />
                                        </ListItemIcon>
                                        <a href="tel:03-9782 1200"><ListItemText primary="Form " className="font-weight-bold" /></a>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Mail style={{ color: 'var(--dark-blue)' }} />
                                        </ListItemIcon>
                                        <a href="mailto:carrumdownsdental@gmail.com"><ListItemText primary="carrumdownsdental@gmail.com" className="font-weight-bold" /></a>
                                    </ListItem> */}
                                    {/* <ListItem>
                                         <ListItemText primary="We are Open 7 Days." className="font-weight-bold" />
                                    </ListItem> */}
                                </List>
                                <Box mt={3}>
                                    <SectionalHeading variant='h5' align='left' color="var(--dark-blue)" title="Scan for Direction" />
                                    <img src={Scan.src} alt="scan" style={{maxWidth:"60%"}} className="mt-3"/>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Address