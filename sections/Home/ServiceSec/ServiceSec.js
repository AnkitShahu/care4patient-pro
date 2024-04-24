import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
// import Data from './Data/Data';
import { BlueFilledBtn, CustomCard } from '../../../components/components'

const ServiceSec = () => {
  const [width, setWidth] = useState();
  const [data, setData] = useState([]);
  // const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://care4patients.com/api/wp-json/wp/v2/pages/6');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const apiData = await response.json();
        console.log(apiData.acf.showcase_of_products);
        const updatedData = [];
  
        for (const item of apiData.acf.showcase_of_products) {
          const mediaResponse = await fetch(`https://care4patients.com/api/wp-json/wp/v2/media/${item.images}`);
          if (!mediaResponse.ok) {
            throw new Error('Failed to fetch media');
          }
          const mediaData = await mediaResponse.json();
          console.log(mediaData.alt_text, "media url");
          // Update the item with the media URL
          const updatedItem = { ...item, mediaUrl: mediaData.source_url, alt: mediaData.alt_text };
          updatedData.push(updatedItem);
        }
  
        setData(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  


  return (
    <>
      <Container maxWidth="xxl" id="service">
        <Grid container>
          <Grid item xs={12} md={10} className="mx-auto">
          <Typography variant='h1' className='text-dark-blue text-center m-2' gutterBottom>We are open 7 days a week for your convenience! </Typography>
            <Grid container spacing={3}>
              {/* {
                Data.map(item => <Grid key={item.id} item xs={12} sm={6} lg={3} >
                  <CustomCard sec="Home_Service" resizedImage={item.Image} resizedImageWidth="60% !important" alt={item.alt} cardCls="shadow" navlink={true} link={item.link} cardTitle={item.title} cardPara={item.para} headAlign="center" paraAlign="center" cardHeight={(width < 600) ? "auto" : (width > 601 && width < 992) ? "28rem" : "25rem"} List={null} />
                </Grid>)
              } */}
              {
                data.map(item => <Grid key={item.id} item xs={12} sm={6} lg={3} >
                  <CustomCard sec="Home_Service" resizedImage= {item.mediaUrl} resizedImageWidth="60% !important" alt={item.alt} cardCls="shadow" navlink={true} link="/" cardTitle={item.heading} cardPara={item.paragraph} headAlign="center" paraAlign="center" cardHeight={(width < 600) ? "auto" : (width > 601 && width < 992) ? "28rem" : "25rem"} List={null} />
                </Grid>)
              }
            </Grid>
            <Grid item xs={12}>
              <Box my={5} className="d-flex justify-content-center align-items-center">
                <BlueFilledBtn navlink={true} btnLink="/service/" btnTitle="VIEW ALL SERVICES" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ServiceSec