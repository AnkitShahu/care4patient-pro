import { Box } from '@mui/material'
import React from 'react'
import { SiYoutube, SiFacebook, SiTwitter, SiPinterest, SiInstagram } from 'react-icons/si'

const SocialIcons = ({ sec, FontSize, spacingRight, isavatar }) => {
    return (
        <>
            {
                sec ? <Box className='d-flex'>
                    {
                        [
                            { id: `${sec}-social-icon-1`, link: "https://www.facebook.com/CarrumDownsDental", icon: <SiFacebook style={{ fontSize: FontSize }} /> },
                            { id: `${sec}-social-icon-2`, link: "https://twitter.com/CarrumDownsGrp/", icon: <SiTwitter style={{ fontSize: FontSize }} /> },
                            { id: `${sec}-social-icon-3`, link: "https://www.instagram.com/cddentalgroup/", icon: <SiInstagram style={{ fontSize: FontSize }} /> },
                            { id: `${sec}-social-icon-4`, link: "https://in.pinterest.com/CarrumDownsGrp/_created/", icon: <SiPinterest style={{ fontSize: FontSize }} /> },
                            { id: `${sec}-social-icon-5`, link: "https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg/", icon: <SiYoutube style={{ fontSize: FontSize }} /> }
                        ].map(item => <Box key={item.id} mr={spacingRight}>
                            {
                                isavatar ? <Box className='d-flex justify-content-center align-items-center' style={{height:"2rem", width:"2rem", borderRadius:"50%", border:"2px solid var(--dark-blue)"}}>
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                    {item.icon}
                                </a>
                                </Box> : <a href={item.link} target="_blank" rel="noreferrer">
                                    {item.icon}
                                </a>
                            }
                        </Box>)
                    }
                </Box> : null
            }
        </>
    )
}

export default SocialIcons