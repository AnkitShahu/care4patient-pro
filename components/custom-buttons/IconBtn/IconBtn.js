import { Button } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Styles from '../../../styles/components-style/custom-buttons/IconButton/IconButton.module.css'

const IconBtn = ({ navlink, anchor, icon, btnLink, variant }) => {
    return (
        <>
            {
                navlink ? <button className={`${Styles.iconButton} ${Styles[variant]} rounded-circle`}>
                    <Link href={btnLink}>
                        {icon}
                    </Link>
                </button> : anchor ? <button className={`${Styles.iconButton} ${Styles[variant]} rounded-circle`}>
                    <a href={btnLink}>
                        {icon}
                    </a>
                </button> : null
            }
        </>
    )
}

export default IconBtn