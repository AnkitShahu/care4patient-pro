import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Top from '../../../public/Home/About/Top.svg'
import Bottom from '../../../public/Home/About/bottom.svg'
import ToothBrush from '../../../public/Home/About/tooth-brush.png'
import Styles from '../../../styles/Home.module.css'
import Link from 'next/link'



const About = () => {

    const [showcaseData, setShowcaseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://care4patients.com/api/wp-json/wp/v2/pages/6');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const moreInfoDetails = data.acf.more_inof_details; // Accessing the first (and only) object in more_inof_details

                console.log(moreInfoDetails, "moreInfoDetails");
    
                const mediaResponse = await fetch(`https://care4patients.com/api/wp-json/wp/v2/media/${moreInfoDetails.image}`);
                if (!mediaResponse.ok) {
                    throw new Error('Failed to fetch media');
                }
                const mediaData = await mediaResponse.json();
                const updatedItem = { ...moreInfoDetails, mediaUrl: mediaData.source_url, alt: mediaData.alt_text };
                console.log(updatedItem, "updatedItem");
                setShowcaseData(updatedItem);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <>
            {console.log(showcaseData.mediaUrl, "showcaseData")}
            <Container maxWidth="xxl" className={`p-0`}>
                {(
                    <>
                <Box>
                    <img src={Top.src} alt="top curve" className='img-fluid' style={{position:"relative", zIndex:"-1"}} /> 
                </Box>
                <Container maxWidth="xxl" className={`${Styles.aboutSec} py-0 mt-n1`}>
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={6} className={Styles.Home_About_Image}>
                                    <Box>
                                        <Image src={showcaseData.mediaUrl} alt="Tooth Brush" layout='fill' />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box>
                                        {/* <Typography variant='h1'  className='text-white' gutterBottom> We are Open 7 Days. </Typography> */}
                                        {/* <Typography variant='h1' className='text-dark-blue' gutterBottom>{showcaseData.heading}</Typography>
                                        <Typography variant='h2' className='text-white'>{showcaseData.sub_heading}</Typography> */}
                                        {/* <Typography className='text-white para'>Our practice provides our patients with comprehensive services under one roof. From <Link href="/dental-implants-procedure/">Dental Implants</Link> to Cosmetic Dentistry and <Link href="/service/wisdom-teeth-removal/">Wisdom tooth extractions</Link> to Dentures, our clinics wide range of affordable services will put a big smile on your face. We believe in giving our patients a choice in treatment and we will always educate and discuss treatment option with patients before a decision is made.</Typography>
                                        <Typography className='text-white para'>Our staff are very friendly and will receive you with a smile and our warm and inviting office will provide you a relaxing experience. Our dentist/staff are very good with children and will do whatever it takes to calm them down and distract them with IPAD while the treatment is performed.</Typography>
                                        <Typography className='text-white para'>We accept dental vouchers from the public dental services (Victorian Dental Scheme and <Link href="/service/child-benefit/">Child Dental Benefit Schedule</Link>). Our dentist Speak English, Hindi, Tamil, Arab, Malayalam, and Urdu.</Typography> */}
                                        {/* <div dangerouslySetInnerHTML={{ __html: showcaseData.paratext }} /> */}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Box>
                <img src={Bottom.src} alt="bottom curve" className='img-fluid bottomCurve' style={{position:"relative", zIndex:"-1"}} />
                </Box>
                </>
             ) }
            </Container>
        </>
    )
}

export default About
