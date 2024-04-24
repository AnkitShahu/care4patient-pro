import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button, Box, IconButton } from "@mui/material";
import { Menu, Close, Phone, ArrowDropDown } from '@mui/icons-material'
import Logo from '../../../../../public/header/care4patients-logo-100x141.png'
import Styles from '../../../../../styles/components-style/layout-style/header/Header.module.css'
import { BlueFilledBtn, BlueOulinedBtn, IconBtn } from '../../../../components';
import DropdownMenu from './Components/DropdownMenu';

const Navbar = () => {
  const [width, setWidth] = useState();
  const [clicked, setClicked] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServiceDropdown] = useState(false);
  const [dentalProblems, setDentalProblems] = useState(false);
  const router = useRouter()
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDropdown = () => setIsOpen(!isOpen);


  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const closeMobileMenu = () => {
    setClicked(false)
    setServiceDropdown(false)
    setAboutDropdown(false)
    setDentalProblems(false)
  }

  return (
    <>
      {
        width > 1199 ?
          <nav className="navbar navbar-expand-xl bg-transparent">
            <Link href="/">
              <a className={`navbar-brand ${Styles.deskNavbarBrand}`} style={{maxWidth: '50px'}}>
                <Image src={Logo} alt="carrumdowns dental clinic logo"/>
                <span className='position-absolute mt-4'>Care for Patients</span>
              </a>
            </Link>
            <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <Menu />
            </Button>
            <Box className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className='nav-item'>
                  <Link href="/">
                    <a className='nav-link'>HOME</a>
                  </Link>
                </li>
                {/* <li className='nav-item dropdown'>
                  <Link href="/about-us/">
                    <a className='nav-link dropdown-toggle' id="navbardropdown1" aria-labelledby="navbarDropdown" aria-haspopup="true" role="button" aria-pressed="true">ABOUT US</a>
                  </Link>
                  <ul className="dropdown-menu p-2 border-0 shadow" aria-labelledby="navbarDropdown">
                    <li className="nav-item">
                      <Link href="/referral-program/">
                        <a className="nav-link dropdown-item">PATIENT REFERRAL PROGRAM</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/payment-plan/">
                        <a className="nav-link dropdown-item">PAYMENT PLAN</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/new-technologies/">
                        <a className="nav-link dropdown-item">NEW TECHNOLOGIES</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/offer/">
                        <a className="nav-link dropdown-item">OFFER</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/meet-our-team/">
                        <a className="nav-link dropdown-item">MEET OUR TEAM</a>
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link href="/how-we-can-reduce-the-spread-of-corona-virus-together/">
                        <a className='nav-link'>COVID-19</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <Link href="/service/">
                    <a className='nav-link dropdown-toggle'>SERVICES</a>
                  </Link>
                  <ul className="dropdown-menu border-0 shadow p-2">
                    <li className="nav-item">
                      <Link href="/service/missing-teeth/">
                        <a className='nav-link dropdown-item service-menu'>MISSING TEETH</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/wisdom-teeth-removal/">
                        <a className='nav-link dropdown-item service-menu'>WISDOM TEETH REMOVAL</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/child-benefit/">
                        <a className='nav-link dropdown-item service-menu'>CHILD BENEFIT</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/dental-implants/">
                        <a className='nav-link dropdown-item service-menu'>DENTAL IMPLANTS</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/dentures/">
                        <a className='nav-link dropdown-item service-menu'>DENTURE</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/teeth-whitening/">
                        <a className='nav-link dropdown-item service-menu'>TEETH WHITENING</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/crowns-and-bridge/">
                        <a className='nav-link dropdown-item service-menu'>CROWN AND BRIDGES</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/veneers/">
                        <a className='nav-link dropdown-item service-menu'>VENEERS</a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown dropdown2">
                      <Link href="/service/teeth-aligners/">
                        <a className='nav-link dropdown-item service-menu'>INVISALIGN</a>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-2 p-2 border-0" aria-labelledby="dropdownMenuButton1">
                        <li>
                          <Link className="nav-item" href="/invisalign-open-day/">
                            <a className='nav-link dropdown-item service-menu'>INVISALIGN OPEN DAY</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/root-canal/">
                        <a className='nav-link dropdown-item service-menu'>ROOT CANAL</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/teeth-cleaning/">
                        <a className='nav-link dropdown-item service-menu'>TEETH CLEANING</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/dental-emergency/">
                        <a className='nav-link dropdown-item service-menu'>DENTAL EMERGENCY</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/tooth-fillings/">
                        <a className='nav-link dropdown-item service-menu'>TOOTH FILLING</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/smile-design/">
                        <a className='nav-link dropdown-item service-menu'>SMILE DESIGN</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/digital-dentures/">
                        <a className='nav-link dropdown-item service-menu'>DIGITAL DENTURES</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/implant-supported-denture/">
                        <a className='nav-link dropdown-item service-menu'>IMPLANT SUPPORTED DENTURE</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/service/denture-technology/">
                        <a className='nav-link dropdown-item service-menu'>DENTURE TECHNOLOGY</a>
                      </Link>
                    </li>
                  </ul>
                </li> */}

               {/* <li className='nav-item dropdown dental-problems-section' >
                  <Link href="/dental-problems/"  >
                    <a className='nav-link dropdown-toggle'>DENTAL PROBLEMS</a>
                  </Link>
                  <ul className="dropdown-menu border-0 shadow p-2">
                    <ul className="dental-problems-section1" >
                      <li className="nav-item">
                        <Link href="/dental-problems/wisdom-tooth-pain">
                          <a className='nav-link dropdown-item dental-problem-menu'>WISDOM TOOTH PAIN</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/tooth-gap">
                          <a className='nav-link dropdown-item dental-problem-menu'>TOOTH GAPS</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/teeth-sensitivity">
                          <a className='nav-link dropdown-item dental-problem-menu'>TEETH SENSITIVITY</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/stained-teeth">
                          <a className='nav-link dropdown-item dental-problem-menu '>STAINED TEETH</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/severe-toothache">
                          <a className='nav-link dropdown-item dental-problem-menu'>SEVERE TOOTHACHE</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/knocked-out-tooth">
                          <a className='nav-link dropdown-item dental-problem-menu'>KNOCKED OUT TEETH</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/gum-disease">
                          <a className='nav-link dropdown-item dental-problem-menu'>GUM DISEASE</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/dry-socket">
                          <a className='nav-link dropdown-item dental-problem-menu'>DRY SOCKET</a>
                        </Link>
                      </li>
                    </ul>
                    <ul className="dental-problems-section2">
                      <li className="nav-item">
                        <Link href="/dental-problems/dental-abscess">
                          <a className='nav-link dropdown-item dental-problem-menu'>DENTAL ABSCESS</a>
                        </Link>
                      </li>
                      <li className="nav-item dropdown dropdown2">
                        <Link href="/dental-problems/crooked-teeth">
                          <a className='nav-link dropdown-item dental-problem-menu'>CROOKED TEETH</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/chipped-or-cracked-tooth">
                          <a className='nav-link dropdown-item dental-problem-menu'>CHIPPED OR CRACKED TOOTH</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/bruxism">
                          <a className='nav-link dropdown-item dental-problem-menu'>BRUXISM</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/bleeding-gums">
                          <a className='nav-link dropdown-item dental-problem-menu'>BLEEDING GUMS</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/bite-problems">
                          <a className='nav-link dropdown-item dental-problem-menu'>BITE PROBLEMS</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/dental-problems/bad-breath">
                          <a className='nav-link dropdown-item dental-problem-menu'>BAD BREATH</a>
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </li>     */}
 
                <li className='nav-item'>
                  <Link href="/">
                    <a className='nav-link'>ABOUT US</a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href="/">
                    <a className='nav-link'>SERVICES</a>
                  </Link>
                </li>
              </ul>
              <Box>
                <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" />
                <BlueOulinedBtn anchor={true} btnTitle="03-9782 1200" btnLink="tel:03-9782 1200" />
              </Box>
            </Box>
          </nav> : <nav className='navbar navbar-expand-xl bg-transparent px-2'>
            <Button className="menu-icon" onClick={() => setClicked(!clicked)}>
              {clicked ? <Close className='text-white' /> : <Menu />}
            </Button>
            <Link href="/">
              <a className={`navbar-brand ${Styles.deskNavbarBrand}`}>
                <Image src={Logo} alt="carrumdowns dental clinic Logo" />
              </a>
            </Link>
            {
              router.pathname !== '/book-now' ? <BlueFilledBtn navlink={true} btnTitle="BOOK NOW" btnLink="/book-now/" /> : null
            }
            <IconBtn variant="outlined" anchor={true} icon={<Phone />} btnLink="tel:03-9782 1200" />
            <Box className={`${clicked ? 'nav-menu active' : 'nav-menu'}`}>
              <Link href="/">
                <a className={`navbar-brand deskNavbarBrandMenu`}>
                  <Image src={Logo} alt="carrumdowns dental clinic logo" />
                </a>
              </Link>
              <Box px={2} py={5}>
                <ul className='navbar-nav mob'>
                  <li onClick={closeMobileMenu}>
                    <Link href="/">
                      <a className="text-white nav-link">HOME</a>
                    </Link>
                   </li>
                  {/*<li className="nav-item dropdownListItem">
                    <Box className='d-flex align-items-center'>
                      <Link href="/about-us/">
                        <a className="nav-link text-white" onClick={closeMobileMenu}>ABOUT</a>
                      </Link>
                      <IconButton onClick={() => { setAboutDropdown(!aboutDropdown); setServiceDropdown(false) }}>
                        <ArrowDropDown className="text-white" />
                      </IconButton>
                    </Box>
                  </li>
                  {aboutDropdown ? <DropdownMenu menu="about" closeMobileMenu={closeMobileMenu} /> : null} */}

                  {/* <li className="nav-item dropdownListItem">
                    <Box className='d-flex align-items-center'>
                      <Link href="/service/">
                        <a className="nav-link text-white" onClick={closeMobileMenu}>SERVICES</a>
                      </Link>
                      <IconButton onClick={() => { setAboutDropdown(false); setServiceDropdown(!servicesDropdown) }}>
                        <ArrowDropDown className="text-white" />
                      </IconButton>
                    </Box>
                  </li>
                  {servicesDropdown ? <DropdownMenu menu="service" closeMobileMenu={closeMobileMenu} /> : null} */}

                  {/* <li className="nav-item dropdownListItem">
                    <Box className='d-flex align-items-center'>
                      <Link href="/dentalProblems/">
                        <a className="nav-link text-white" onClick={closeMobileMenu}>Dental Problems</a>
                      </Link>
                      <IconButton onClick={() => { setDentalProblems(false); setDentalProblems(!dentalProblems) }}>
                        <ArrowDropDown className="text-white" />
                      </IconButton>
                    </Box>
                  </li>
                  {dentalProblems ? <DropdownMenu menu="dentalProblems" closeMobileMenu={closeMobileMenu} /> : null} */}

                  <li onClick={closeMobileMenu}>
                    <Link href="/blog/">
                      <a className="text-white nav-link">ABOUT</a>
                    </Link>
                  </li>
                  <li onClick={closeMobileMenu}>
                    <Link href="/contact-us/">
                      <a className="text-white nav-link">SERVICES</a>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Box>
          </nav>
      }
    </>
  )
}

export default Navbar