import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomCard, SectionalHeading } from '../../../components/components'



const Blogs = ({ data }) => {
    const [width, setWidth] = useState();
    const [show, setShow] = useState(false)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [])

    return (
        <>
            {
                show ? <Container maxWidth="xxl" className='bg-grey'>
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={2}>
                                <SectionalHeading variant="h2" align="center" color="var(--dark-blue)" title="Recent Articles" />
                            </Box>
                            <Box py={3}>
                                <Grid container spacing={3}>
                                    {
                                        data ? data.slice(0, (width <= 1024 ? 4 : 3)).map(item => <Grid key={item.id} item xs={12} sm={6} lg={4}>
                                            <CustomCard cardMedia={item._embedded['wp:featuredmedia'][0].source_url} navlink={true} link={`/${item.slug}/`} cardTitle={item.title.rendered} cardPara={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")} [...]`} cardHeight="25rem" cardCls="shadow grow" List={null} />
                                        </Grid>) : null
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container> : null
            }
        </>
    )
}

export default Blogs