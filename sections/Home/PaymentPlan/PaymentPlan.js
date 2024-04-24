import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionalHeading } from '../../../components/components'
import AfterPay from '../../../public/Home/PaymentPlan/afterpay.jpg'
import Bupa from '../../../public/Home/PaymentPlan/Bupa.jpg'
import CBHS from '../../../public/Home/PaymentPlan/CBHS.jpg'
import Denticare from '../../../public/Home/PaymentPlan/Denticare.jpg'
import EFTPOS from '../../../public/Home/PaymentPlan/EFTPOS.jpg'
import HFC from '../../../public/Home/PaymentPlan/HFC.jpg'
import Hicaps from '../../../public/Home/PaymentPlan/Hicaps.jpg'
import Medibank from '../../../public/Home/PaymentPlan/medibank.jpg'
import Medicare from '../../../public/Home/PaymentPlan/Medicare.jpg'
import MySmilePlan from '../../../public/Home/PaymentPlan/my-smile-plan.jpg'
import smile from '../../../public/Home/PaymentPlan/smile.jpg'
import WESTFUND from '../../../public/Home/PaymentPlan/WESTFUND.jpg'

const PaymentPlan = () => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <Container maxWidth="xxl">
                <Grid container>
                    <Grid item xs={12} md={10} className='mx-auto'>
                        <Box py={2}>
                            <SectionalHeading variant="h2" align="center" color="var(--dark-blue)" title="Payment Options" />
                        </Box>
                        <Box py={3}>
                            <Swiper
                                slidesPerView={width > 992 ? 6 : width > 0 && width < 600 ? 1 : 3}
                                spaceBetween={50}
                                modules={[Autoplay]}
                                className="mySwiper"
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                            >
                                {
                                    [
                                        { image: AfterPay, alt: "afterpay" }, { image: Bupa, alt: "Bupa" }, { image: CBHS, alt: "CBHS" }, { image: Denticare, alt: "denticare" }, { image: EFTPOS, alt: "EFTPOS" }, { image: HFC, alt: "HCF" }, { image: Hicaps, alt: "Hicaps" }, { image: Medibank, alt: "Medibank" }, { image: Medicare, alt: "Medicare" }, { image: MySmilePlan, alt: "MySmilePlan" }, { image: smile, alt: "smile" }, { image: WESTFUND, alt: "WESTFUND" }
                                    ].map((item, index) => <SwiperSlide key={`Home_payment_plan_${item.alt}`}>
                                        <Image src={item.image} alt={item.alt} />
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PaymentPlan