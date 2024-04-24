import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcons } from '../../components'
// import Logo from '../../../public/footer/logo_new.png'
import Logo from '../../../public/header/care4patients-logo-100x141.png'
import { Home, Phone, Mail, Copyright } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
      <footer>
        <Container maxWidth="xxl" className="px-xl-4">
          <Grid container>
            <Grid item xs={12}>
              <Box py={3} style={{ borderBottom: "2.5px solid rgba(255, 255, 255, 0.1)" }}>
                <Grid container>
                  <Grid item xs={12} xl={10} className="mx-auto">
                    <Box>
                      <Grid container>
                        <Grid item xs={12} sm={6}>
                          <Box className='d-flex justify-content-md-start justify-content-center align-items-center'>
                            <img src={Logo.src} alt="carrumdowns dental clinic logo" style={{maxWidth:"50%" }} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} className='d-flex justify-content-md-end justify-content-center align-items-center mt-md-0 mt-2'>
                          <Box>
                            <SocialIcons sec="Footer-Social" spacingRight={2} isavatar={true} FontSize="1rem" />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} xl={10} className="mx-auto">
              <Box py={0}>
                {/* <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head" gutterBottom>ABOUT US</Typography>
                      <Typography className='text-white'>Carrum Downs Dental at Shop T5, Hall Road we are committed to apply our dental knowledge and skills in a caring and gentle way, you will feel at ease while we work on your smile. Learn more about our <Link href="/about-us/">dentist in Carrum Downs</Link>.</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head" gutterBottom>QUICK LINKS</Typography>
                      <ul className='p-0'>
                        <li>
                          <Link href="/">
                            <a className="nav-link">Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-us/">
                            <a className="nav-link">About Us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service/">
                            <a className="nav-link">Service</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog/">
                            <a className="nav-link">Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact-us/">
                            <a className="nav-link">Contact Us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy/">
                            <a className="nav-link">Privacy Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/terms-and-conditions/">
                            <a className="nav-link">Terms & Conditions</a>
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head" gutterBottom>OPENING HOURS</Typography>
                      <Box className='d-flex justify-content-between'>
                        <ul className='p-0'>
                          <li className='text-white'>Monday</li>
                          <li className='text-white'>Tuesday</li>
                          <li className='text-white'>Wednesday</li>
                          <li className='text-white'>Thursday</li>
                          <li className='text-white'>Friday</li>
                          <li className='text-white'>Saturday</li>
                          <li className='text-white'>Sunday</li>
                        </ul>
                        <ul className='p-0'>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 6:00pm</li>
                          <li className='text-white'>9:00am - 3:00pm</li>
                        </ul>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <Box>
                      <Typography className="footer-sec-head">CONTACT US</Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <Home style={{ color: 'var(--dark-blue) !important' }} />
                          </ListItemIcon>
                          <ListItemText className="text-white" primary="Shop T5, 100 Hall Road, Carrum Downs" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Phone style={{ color: 'var(--dark-blue) !important' }} />
                          </ListItemIcon>
                          <a href="tel:03-9782 1200"><ListItemText className="text-white" primary="03-9782 1200" /></a>
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Mail style={{ color: 'var(--dark-blue) !important' }} />
                          </ListItemIcon>
                          <a href='mailto:carrumdownsdental@gmail.com'><ListItemText className="text-white" primary="carrumdownsdental@gmail.com" /></a>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>
                </Grid> */}
                <Box py={1} mt={3} className='d-flex justify-content-center align-items-center mb-md-0 mb-5' style={{borderTop:"2.5px solid rgba(255, 255, 255, 0.1)", borderBottom: "2.5px solid rgba(255, 255, 255, 0.1)" }}>
                  <ul className='d-flex p-0 mb-0 flex-wrap'>
                    <li className='mx-2'><Link href="/dentist-in-skye/">
                      <a className='nav-link'>Home</a>
                    </Link></li>
                    <li className='mx-2'><Link href="/dentist-in-sandhurst/">
                      <a className='nav-link'>About</a>
                    </Link></li>
                    <li className='mx-2'><Link href="/dentist-in-patterson-lakes/">
                      <a className='nav-link'>Service</a>
                    </Link></li>
                    {/* <li className='mx-2'><Link href="/dentist-in-cranbourne-west/">
                      <a className='nav-link'>Cranbourne West</a>
                    </Link></li>
                    <li className='mx-2'><Link href="/dentist-in-frankston-north/">
                      <a className='nav-link'>Frankston North</a>
                    </Link></li>
                    <li className='mx-2'><Link href="/dentist-in-seaford/">
                      <a className='nav-link'>Seaford</a>
                    </Link></li>
                    <li className='mx-2'><Link href="/dentist-in-lyndhurst/">
                      <a className='nav-link'>Lyndhurst</a>
                    </Link></li>
                    <li className='mx-2'><Link href="/dentist-in-langwarrin/">
                      <a className='nav-link'>Langwarrin</a>
                    </Link></li>*/}
                  </ul> 
                </Box>
                <Box pt={2}>
                  <Typography align='center' className="text-white"><Copyright />{new Date().getFullYear()} | care4patients.com.au</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  )
}

export default Footer
