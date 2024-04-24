import React from 'react'
import Image from 'next/image'
import InterestFreePlan from '../../public/interest-free/payment-plan.jpg';
import { Box } from '@mui/material';

const InterestFree = () => {
    return (
        <>
            <Box>
                <Image src={InterestFreePlan} alt="interest-free" />
            </Box>
        </>
    )
}

export default InterestFree