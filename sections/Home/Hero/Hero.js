import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Styles from '../../../styles/Home.module.css'
import { BlueFilledBtn } from '../../../components/components';

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://care4patients.com/api/wp-json/wp/v2/pages/6');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const apiData = await response.json();
        console.log(apiData.acf.slider);
        const updatedData = [];

        for (const item of apiData.acf.slider) {
          const mediaResponse = await fetch(`https://care4patients.com/api/wp-json/wp/v2/media/${item['background-img']}`);
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
      <Container maxWidth="xxl" id="home_hero" className='p-0'>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className={`slide ${Styles.slider1}`} style={{ backgroundImage: `url(${item.mediaUrl})` }}>
              <Grid container style={{ height: "inherit" }}>
                <Grid item xs={12} md={10} className="mx-auto d-flex justify-content-md-start justify-content-center align-items-center" style={{ height: "inherit" }} >
                  <Box p={1}>
                    <Typography className={Styles.home_hero_head}><span className={Styles.blueSpan}>{item['main-text']}</span> <br /><span className={Styles.whiteSpan}>{item.sub_heading_text}</span></Typography>
                    <Typography className={Styles.home_hero_para}>{item.paragraph_text}</Typography>
                    <Box mt={2}>
                      <BlueFilledBtn navlink={true} btnLink="/" btnTitle={item.button_text}/>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Hero;
