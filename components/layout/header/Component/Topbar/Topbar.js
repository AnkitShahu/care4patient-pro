import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AccessTime, Place, Phone } from '@mui/icons-material'
import { SocialIcons } from '../../../../components';
import Styles from '../../../../../styles/components-style/layout-style/header/Header.module.css'

const Topbar = () => {
  const [width, setWidth] = useState();
  const [scrollHeight, setScrollHeight] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY)
    })
  })

  return (
    <>
      <Box py={1} className={`${width <= 1199 ? 'd-none' : (width > 1199 && scrollHeight < 50) ? 'd-block' : (width > 1199 && scrollHeight > 50) ? 'd-none' : null}`} id="topbar">
        <Grid container>
          <Grid item xs={width <= 1450 ? 11 : 10}>
            <Box className="d-flex">
              {
                [
                  { id: "topbar-item-1", icon: <AccessTime className={`${Styles.topbarIcons}`} />, text: "<strong>Mon to Sat:</strong> <span>9AM - 6PM</span>" },
                  { id: "topbar-item-4",  icon:<AccessTime className={`${Styles.topbarIcons}`} />, text: "<strong>Sun :</strong> <span>9AM - 3PM</span>"}, 
                  { id: "topbar-item-2", icon: <Place className={`${Styles.topbarIcons}`} />, text: "<strong>Address:</strong> <span>Shop T5, 100 Hall Road, Carrum Downs</span>" }, 
                  { id: "topbar-item-3", icon: <Phone className={`${Styles.topbarIcons}`} />, text: "<strong>Call Today:</strong> <span><a href='tel:03-9782 1200'>03-9782 1200</a></span>" }
                ].map(item => <Box key={item.id} className="d-flex align-items-baseline" mr={width <= 1450 ? 1 : 2}>
                  <Box style={{ marginRight: "0.2rem" }}>{item.icon}</Box>
                  <Box style={{ width: "fit-content" }}>
                    <Typography dangerouslySetInnerHTML={{ __html: item.text }} className={`${Styles.topbarText}`} />
                  </Box>
                </Box>)
              }
            </Box>
          </Grid>
          <Grid item xs={width <= 1450 ? 1 : 2}>
            <Box className='d-flex justify-content-end'>
              <SocialIcons sec="topbar-social" FontSize={width <= 1450 ? "0.7rem !important" :"0.9rem !important"} spacingRight={width <= 1450 ? 2 : 3} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Topbar