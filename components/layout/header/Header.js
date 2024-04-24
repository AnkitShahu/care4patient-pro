import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Topbar, Navbar } from './Component/Components'
import Styles from '../../../styles/components-style/layout-style/header/Header.module.css'
import Marquee from "react-fast-marquee";
import CampaignIcon from '@mui/icons-material/Campaign';
const Header = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50 && width > 1199) {
        document.querySelector('header').style.cssText = `
        background-color: #fff;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        `
      } else if (window.scrollY < 50 && width > 1199) {
        document.querySelector('header').style.cssText = `
        background-color: rgba(255, 255, 255, 0.5);
        `
      } else if (width < 1199 && window.scrollY > 0) {
        document.querySelector('header').style.cssText = `
        background-color: #fff;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        `
      }
    })
  }, [width])

  return (
    <>
      <header className={Styles.header}>
      {/* <Marquee speed={50} className='bg-white'><span className='ms-5 me-5 text-danger'><b>We have moved to a Bigger and Shinier location within Carrum Downs with plenty of easy parking</b></span><span className='ms-5 me-5 text-danger'><b> Open for you, 7 days a week.</b></span><span className='ms-5 me-5 text-danger'><b>We have moved to a Bigger and Shinier location within Carrum Downs with plenty of easy parking</b></span><span className='ms-5 me-5 text-danger'><b>We have moved to a Bigger and Shinier location within Carrum Downs with plenty of easy parking</b></span><span className='ms-5 me-5 text-danger'><b>  Open for you, 7 days a week.</b></span></Marquee> */}
        <Container maxWidth="xxl" className='px-0 px-lg-2'>
          <Grid container>
            <Grid item xs={12} md={10} className="mx-auto">
              <Topbar />
              <Navbar />
            </Grid>
          </Grid>
        </Container>
      </header>
    </>
  )
}

export default Header
