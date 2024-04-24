import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Button, CardActions } from '@mui/material'
import React from 'react'
import { BlueFilledBtn, CustomCard, SectionalHeading, TermsNCondition } from '../../../components/components'
import Offer1 from '../../../public/Home/Offer/offer1.jpg'
import Offer2 from '../../../public/Home/Offer/offer2.jpg'
import Offer3 from '../../../public/Home/Offer/offer3.jpg'
import { CheckCircleOutline } from '@mui/icons-material'
import Styles from '../../../styles/Home.module.css'


const Offer = () => {
    return (
        <>
            <Container maxWidth="xxl">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box py={2}>
                            <SectionalHeading variant="h2" align="center" color="var(--dark-blue)" title="Latest Offer" />
                        </Box>
                        <Box py={3}>
                            <Grid container spacing={3}>
                                {
                                    [
                                        { id: "Home_offer_Sec_Offer1", image: Offer1, title: "*New Patient Offer - Scale & Clean with Full Check-up", para: null, list: ["Comprehensive Dental Examination", "Scale & Clean", "Fluoride"], price: "$199*", small: "or 4 equal payments of $49.75*" },

                                        { id: "Home_offer_Sec_Offer2", image: Offer2, title: "Dental Implant (implant, crown and abutment) Offer", para: "At Carrum Down Dental Clinic we use the leading edge implant Kit from MIS Australia for all our Implant treatments.", list: null, price: "$3900*", small: null },

                                        { id: "Home_offer_Sec_Offer3", image: Offer3, title: "TakeHome Teeth Whitening Offer", para: null, list: ["Whitening Consultation with Dentist", "Whitening trays made to fit you", "Whitening Gel and Demonstration of how to use it"], price: "$399*", small: "or $99.75 per fortnight on Afterpay*" }
                                    ].map((item, index) => <Grid key={item.id} item xs={12} sm={6} lg={4}>
                                        <Card className={`${Styles.home_offer_card} shadow`} style={{position:"relative"}}>
                                            <CardMedia component="img" image={item.image.src} />
                                            <CardContent>
                                                <Typography variant="h5" gutterBottom style={{color:"var(--dark-blue)"}}>{item.title}</Typography>
                                                {item.para !== null ? <Typography>{item.para}</Typography> : null}
                                                {
                                                    item.list !== null ? <List>
                                                        {
                                                            item.list.map((listitem) => <ListItem key={listitem}>
                                                                <ListItemIcon>
                                                                    <CheckCircleOutline style={{color:"var(--dark-green)"}} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={listitem} />
                                                            </ListItem>)
                                                        }
                                                    </List> : null
                                                }
                                            </CardContent>
                                            <CardActions className={Styles.home_offer_btnSmall} style={{bottom: index == 1 ? '4%' : '0%'}}>
                                            <Box style={{width:"100%"}}>
                                                    <Button fullWidth focusRipple className={`${Styles.home_offer_button}`}>
                                                        {item.price}
                                                    </Button>
                                                    <Typography align="center">{item.small}</Typography>
                                                </Box>
                                            </CardActions>
                                        </Card>
                                    </Grid>)
                                }
                            </Grid>
                        </Box>
                        <Box>
                            <TermsNCondition />
                            <Box className='text-center'>
                                <BlueFilledBtn navlink={true} btnLink="/offer/" btnTitle="MORE AFTERPAY OFFERS" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Offer