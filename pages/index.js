import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { About, Address, AdvantageSec, Blogs, Hero, Offer, PaymentPlan, ServiceSec } from '../sections/sections'

import { CommonHero, CommonSidebar, SectionalHeading, CustomCard, BookAndCall, InterestFree, TermsNCondition } from '../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
// export const getServerSideProps = async () => {
//   const res = await fetch(`https://pritams3.sg-host.com/wp-json/wp/v2/posts?_embed=true&per_page=4&page=1`);
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// }

const Home = ({ data }) => {
  const [show, setShow] = useState(false);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch('https://care4patients.com/api/wp-json/wp/v2/pages/6');
        const data = await response.json();
        console.log(data, "data faq")
        setFaq(data.acf.faq);
      } catch (error) {
        console.error('Error fetching FAQ:', error);
      }
    };

    fetchFaq();
  }, []);


  return (
    <>
      <Head>
        <title>Trusted Family Dentist in Carrum Downs | Carrum Downs Dental Clinic</title>
        <meta name="description" content="Experience the best dental treatment from Carrum Downs Dental Group. Our Dentist knowledge and skills will provide you all Dental Care under one roof." />
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      <main>
        <section className='my-md-5 mt-4'>
          <ServiceSec />
        </section>
        {/* <section className='mt-md-5 mt-4'>
          <About />
        </section> */}
        <section className='mt-md-5 mt-4'>
          <AdvantageSec />
        </section>

        <section className='mt-md-5 mt-4'>
          <Offer />
        </section>
        <section className='mt-md-5 mt-4'>
          <PaymentPlan />
        </section>
        <section className="mt-md-5 mt-4">
          <Container maxWidth="xxl" className="p-0">
            <Box>
              <Box>
                <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
              </Box>
              <Box mt={3}>
                <div className="accordion" id="accordionExample">
                  {faq.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h3 className="accordion-header" id={"heading"+index}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index}  aria-expanded="true" aria-controls={"collapse"+index}>
                          {item.quesion}
                        </button>
                      </h3>
                      <div id={"collapse"+index} className="accordion-collapse collapse show" aria-labelledby={"heading"+index} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p className='para'>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Box>
            </Box>
          </Container>
        </section>
        {/* <section className='mt-md-5 mt-4'>
          <Blogs data={data} />
        </section> */}
        <section className='my-md-5 my-4'>
          <Address />
        </section>
      </main>
    </>
  )
}

export default Home
