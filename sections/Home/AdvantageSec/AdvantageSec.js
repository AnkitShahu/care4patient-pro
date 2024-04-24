import { Box, Container, Grid, Typography, Paper } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import MordernDentistry from '../../../public/Home/Advantage/mordern-dentistry-blue.png';
import Appointment from '../../../public/Home/Advantage/appointment-blue.png';
import DentalInsurance from '../../../public/Home/Advantage/dental-insurance-blue.png';
import DentalEmergency from '../../../public/Home/Advantage/dental-emergency-blue.png';
import Styles from '../../../styles/Home.module.css'
import { SectionalHeading } from '../../../components/components';

const AdvantageSec = () => {
    return (
        <>
            <Container maxWidth="xxl">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box py={2}>
                            <SectionalHeading variant="h2" align="center" color='var(--dark-blue)' title="Our Advantage" />
                        </Box>
                        <Box py={3}>
                        <Grid container spacing={5}>
                            {
                                [
                                    { id: "Home_Advantage_Sec_adv1", title: "MODERN DENTISTRY", para: "The field of dentistry is constantly evolving. New techniques and procedures expand dentists’ capabilities and deliver more comfortable, long-lasting, and effective solutions to dental patients.", image: MordernDentistry },

                                    { id: "Home_Advantage_Sec_adv2", title: "AFTER HOUR APPOINTMENTS", para: "We are open after hours by appointment and we are also open on Saturdays.", image: Appointment },

                                    { id: "Home_Advantage_Sec_adv3", title: "DENTAL INSURANCE", para: "Carrum Downs Dental Group is a HCF and NIB Preferred Provider. We accept most Dental Insurance and also public dental vouchers (CDBS and VDS).", image: DentalInsurance },

                                    { id: "Home_Advantage_Sec_adv4", title: "DENTAL EMERGENCY", para: "Starting your day with a missing tooth or even worse – extreme pain and don’t know where to go? Call us now.", image: DentalEmergency },
                                ].map((item, index)=><Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                                    <Box component={Paper} className={`shadow ${Styles.advSecBox} grow`} p={2} style={{backgroundColor: index % 2 === 0 ? '#00708e20': '#32cfc820'}}>
                                        <Box py={2} className={`d-flex justify-content-center align-items-center`}>
                                            <Box className={`${index % 2 === 0 ? Styles.advCircleBlue : Styles.advCircleGreen} d-flex justify-content-center align-items-center`}>
                                                <Image src={item.image} alt={item.title} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant='h5' gutterBottom align="center" className={Styles.advSecHead} >{item.title}</Typography>
                                            <Typography dangerouslySetInnerHTML={{__html: item.para}} align="center" />
                                        </Box>
                                    </Box>
                                </Grid>)
                            }
                        </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AdvantageSec