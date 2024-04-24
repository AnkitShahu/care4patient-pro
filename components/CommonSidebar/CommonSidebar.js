import { Container, Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { SectionalHeading } from '../components'
import Styles from '../../styles/components-style/CommonSidebar/CommonSidebar.module.css'
import { useRouter } from 'next/router'
import Scan from '../../public/sidebar/scan.png'

const CommonSidebar = ({ isContactAvailable, isServicesAvailable }) => {
    const router = useRouter()
    return (
        <>
            <aside style={{ height: router.pathname == '/service/wisdom-teeth-removal' ? 'auto' : '100%' }}>
                <Container maxWidth="xxl" style={{ height: router.pathname == '/service/wisdom-teeth-removal' ? 'auto' : '100%' }}>
                    {
                        isContactAvailable ? <Box p={2} style={{ border: "2px solid #1ebdb6", borderRadius: "1rem" }} className="order-lg-0 order-1">
                            <Box py={1}>
                                <SectionalHeading variant="h5" align="center" title="Contact Details" color="#1ebdb6" />
                                <Divider style={{ backgroundColor: "#1ebdb6" }} />
                            </Box>
                            <Box mt={1}>
                                <List className='p-0'>
                                    <ListItem>
                                        <ListItemText primary={<strong>Clinic</strong>} secondary="Shop T5, 100 Hall Road, Carrum Downs" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>E-mail</strong>} secondary={<a href="mailto:carrumdownsdental@gmail.com">carrumdownsdental@gmail.com</a>} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>Phone</strong>} secondary={<a href="tel:03-9782 1200">03-9782 1200</a>} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>Opening hours</strong>} secondary={<p style={{ marginBottom: "0 !important" }}>Mon - Sat 09 am - 06 pm <br />Sunday &nbsp;&nbsp;&nbsp; 09 am - 03 pm</p>}/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={<strong>We are Open 7 Days.</strong>} />
                                    </ListItem>
                                </List>
                                {/* <p> <strong> We Are 7 Days Open</strong> </p> */}
                                <Box p={3} mt={2}>
                                    <Typography variant='h6'>Scan for Direction</Typography>
                                    <Box>
                                        <img src={Scan.src} alt="scan" style={{ maxWidth: "60%" }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box> : null
                    }
                    {
                        isServicesAvailable ? <Box mt={5} className={`${router.pathname !== '/service/wisdom-teeth-removal' ? Styles.fixedService : null} order-lg-1 order-0`} >
                            <Box py={1.8} style={{ backgroundColor: '#115278', borderRadius: "1rem 1rem 0 0" }}>
                                <SectionalHeading variant="h5" align="center" title="Services" color="#fff" />
                            </Box>
                            <Box p={3} style={{ backgroundColor: "#11527826", borderRadius: "0 0 1rem 1rem" }}>
                                <Typography variant='h6' className='mt-3'><Link href="/service/wisdom-teeth-removal/">Wisdom Teeth Removal</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/child-benefit/">Child Benefit</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/dental-implants/">Dental Implants</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/dentures/">Denture</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/teeth-whitening/">Teeth Whitening</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/crowns-and-bridge/">Crowns and Bridge</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/veneers/">Veneers</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/teeth-aligners/">Invisalign</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/root-canal/">Root Canal</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/teeth-cleaning/">Teeth Cleaning</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/dental-emergency/">Dental Emergency</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/tooth-fillings/">Tooth Fillings</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/smile-design/">Smile Design</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/digital-dentures/">Digital Dentures</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/implant-supported-denture/">Implant Supported Denture</Link></Typography>
                                <Typography variant='h6' className='mt-3'><Link href="/service/denture-technology/">Denture Technology</Link></Typography>
                            </Box>
                        </Box> : null
                    }
                </Container>
            </aside>
        </>
    )
}

export default CommonSidebar