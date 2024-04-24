import { Card, CardContent, CardMedia, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const CustomCard = ({ cardMedia, resizedImage, navlink, anchor, link, cardTitle, cardPara, List, sec, cardCls, cardHeight, alt, resizedImageWidth, headAlign, paraAlign, cardMediaAlt }) => {
    return (
        <>
            <Card className={`${cardCls}`} style={{ height: cardHeight, }}>
                {
                    cardMedia ? <CardMedia component="img" image={cardMedia} loading='lazy' alt={cardMediaAlt} /> : resizedImage ? <CardMedia component="img" image={resizedImage} style={{ width: '60% !important' }} className="mx-auto" loading='lazy' alt={cardMediaAlt} /> : null
                }
                <CardContent>
                    {
                        (cardTitle && navlink) ? <Typography variant='h5' align={headAlign} gutterBottom><Link href={link}>{cardTitle}</Link></Typography> : (cardTitle && anchor) ? <Typography variant='h5' align={headAlign} gutterBottom><a href={link}>{cardTitle}</a></Typography> : <Typography variant='h5' align={headAlign} gutterBottom>{cardTitle}</Typography>
                    }
                    {
                        cardPara !== null ? <Typography align={paraAlign} dangerouslySetInnerHTML={{ __html: cardPara }} /> : null
                    }
                    {
                        List !== null ? <List>
                            {
                                List.map((item, index) => <ListItem key={`${sec}-List-${index}`}>{item}</ListItem>)
                            }
                        </List> : null
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default CustomCard