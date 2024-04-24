import { Box, Container, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import { SectionalHeading } from '../components'
import Styles from '../../styles/components-style/BlogSidebar/BlogSidebar.module.css'

const BlogSidebar = ({ blogs, cat }) => {
    return (
        <>
            <aside style={{height:"100%"}}>
                <Container maxWidth="xxl" style={{position:"relative !important", height:"100%"}}>
                    <Box component={Paper} className="shadow rounded">
                        <Box py={2} className="rounded-top" style={{ backgroundColor: 'var(--dark-blue)' }}>
                            <SectionalHeading variant="h5" align="center" title="Recent Post" color="#fff" />
                        </Box>
                        <Box p={2}>
                            {
                                blogs.map(item => <Box key={`sidebar-blog-${item.id}`} className="mb-3">
                                    <Box className='ms-3'>
                                        <Typography variant='h6'><Link href={`/${item.slug}/`}>{item.title.rendered}</Link></Typography>
                                    </Box>
                                </Box>)
                            }
                        </Box>
                    </Box>
                    <Box mt={5} component={Paper} className={`shadow rounded ${Styles.fixedCategory}`}>
                        <Box py={2} className="rounded-top" style={{ backgroundColor: 'var(--dark-blue)' }}>
                            <SectionalHeading variant="h5" align="center" title="Category" color="#fff" />
                        </Box>
                        <Box p={2}>
                            {
                                cat.map(item=><Box key={`blog_sidebar_cat${item.id}`} className="mb-3">
                                    <Typography variant='h6'><Link href={`/category/${item.slug}/`}>{item.name}</Link></Typography>
                                </Box>)
                            }
                        </Box>
                    </Box>
                </Container>
            </aside>
        </>
    )
}

export default BlogSidebar