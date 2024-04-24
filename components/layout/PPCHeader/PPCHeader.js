import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Room, Phone, mail } from '@mui/icons-material'
import { BlueFilledBtn, BlueOulinedBtn, IconBtn } from '../../components'
import { SiYoutube, SiFacebook, SiTwitter, SiPinterest, SiInstagram } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/PPCHeader/logo_new.png'
import Styles from '../../../styles/components-style/layout-style/PPCHeader/PPCHeader.module.css'

const PPCHeader = () => {
    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                document.querySelector('header.ppcheader').classList.add('shadow-lg')
            } else {
                document.querySelector('header.ppcheader').classList.remove('shadow-lg')
            }
        })
    })

    return (
        <>
            <header className={`${Styles.header} ppcheader`}>
                <Container maxWidth="xxl" className='p-0'>
                    <Box style={{ background: "#f2f2f2" }}>
                        <Grid container>
                            <Grid item xs={12} md={11} className="mx-auto">
                                {
                                    width > 1024 ? <Box className='d-flex justify-content-between align-items-center'>
                                        <Box>
                                            <List className='d-flex'>
                                                <ListItem className='ps-0 me-2' style={{ width: 'fit-content' }}>
                                                    <ListItemIcon>
                                                        <Room />
                                                    </ListItemIcon>
                                                    <ListItemText primary="1095 Frankston-Dandenong Rd, Carrum Downs VIC 3201" />
                                                </ListItem>
                                                <ListItem className='ps-0' style={{ width: 'fit-content' }}>
                                                    <ListItemIcon>
                                                        <Phone />
                                                    </ListItemIcon>
                                                    <ListItemText primary={<a href="tel:03-9782 1200">03-9782 1200</a>} />
                                                </ListItem>
                                            </List>
                                        </Box>
                                        <Box>
                                            <ul className='d-flex align-items-center mb-0'>
                                                {
                                                    [
                                                        { id: `ppc-header-social-icon-1`, link: "https://www.facebook.com/CarrumDownsDental", icon: <SiFacebook style={{ fontSize: "1.1rem", color: "#0000008a" }} /> },
                                                        { id: `ppc-header-social-icon-2`, link: "https://twitter.com/CarrumDownsGrp/", icon: <SiTwitter style={{ fontSize: "1.1rem", color: "#0000008a" }} /> },
                                                        { id: `ppc-header-social-icon-3`, link: "https://www.instagram.com/cddentalgroup/", icon: <SiInstagram style={{ fontSize: "1.1rem", color: "#0000008a" }} /> },
                                                        { id: `ppc-header-social-icon-4`, link: "https://in.pinterest.com/CarrumDownsGrp/_created/", icon: <SiPinterest style={{ fontSize: "1.1rem", color: "#0000008a" }} /> },
                                                        { id: `ppc-header-social-icon-5`, link: "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg/", icon: <SiYoutube style={{ fontSize: "1.1rem", color: "#0000008a" }} /> }
                                                    ].map(item => <li key={item.id} className="ms-2">
                                                        <Box style={{ height: "2rem", width: "2rem", border: "1px solid #0000008a", borderRadius: "50%" }} className="d-flex justify-content-center align-items-center">
                                                            <a href={item.link}>
                                                                {
                                                                    item.icon
                                                                }
                                                            </a>
                                                        </Box>
                                                    </li>)
                                                }
                                            </ul>
                                        </Box>
                                    </Box> : <>
                                        <Box p={1} className="d-flex justify-content-between align-items-center">
                                            <BlueOulinedBtn btnLink="tel:03-9782 1200" btnTitle="CALL NOW" anchor={true}  />
                                            <Box>
                                                <ul className='d-flex ps-0 mb-0'>
                                                    {
                                                        [
                                                            { id: `ppc-header-social-icon-1`, link: "https://www.facebook.com/CarrumDownsDental", icon: <SiFacebook style={{ fontSize: "1rem", color: "#0000008a" }} /> },
                                                            { id: `ppc-header-social-icon-2`, link: "https://twitter.com/CarrumDownsGrp/", icon: <SiTwitter style={{ fontSize: "1rem", color: "#0000008a" }} /> },
                                                            { id: `ppc-header-social-icon-3`, link: "https://www.instagram.com/cddentalgroup/", icon: <SiInstagram style={{ fontSize: "1rem", color: "#0000008a" }} /> },
                                                            { id: `ppc-header-social-icon-4`, link: "https://in.pinterest.com/CarrumDownsGrp/_created/", icon: <SiPinterest style={{ fontSize: "1rem", color: "#0000008a" }} /> },
                                                            { id: `ppc-header-social-icon-5`, link: "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg/", icon: <SiYoutube style={{ fontSize: "1rem", color: "#0000008a" }} /> }
                                                        ].map(item => <li key={item.id} className="ms-2">
                                                            <Box style={{ height: "2rem", width: "2rem", border: "1px solid #0000008a", borderRadius: "50%" }} className="d-flex justify-content-center align-items-center">
                                                                <a href={item.link}>
                                                                    {
                                                                        item.icon
                                                                    }
                                                                </a>
                                                            </Box>
                                                        </li>)
                                                    }
                                                </ul>
                                            </Box>
                                        </Box>
                                    </>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <nav>
                    <Container maxWidth="xxl" className='p-lg-0 p-1'>
                        <Grid container>
                            <Grid item xs={12} md={11} className="mx-auto">
                                <Box py={1} className="d-flex">
                                    <Link href="/">
                                        <a className={`navbar-brand ${Styles.logo}`}>
                                            <Image src={Logo} alt="carrum downs dental" />
                                        </a>
                                    </Link>
                                    <Box style={{ flexGrow: 1 }} />
                                    <Box>
                                        <BlueFilledBtn btnLink="/book-now/" btnTitle="BOOK NOW" navlink={true} />
                                        {
                                            width > 600 ? <BlueOulinedBtn btnLink="tel:03-9782 1200" btnTitle="CALL NOW" anchor={true} /> : null
                                        }
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </nav>
            </header>
        </>
    )
}

export default PPCHeader