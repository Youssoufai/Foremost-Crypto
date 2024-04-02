import styled from '@emotion/styled'
import { Settings } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Toolbar, Typography, CssBaseline, Stack } from '@mui/material'
import React from 'react'
const Navbar = () => {
    return (
        <>
            <CssBaseline />
            <Stack
                direction='flex'
                justifyContent='space-between'
                alignItems='center'
                p={1}
            >
                <Button startIcon={<Settings />}>
                    <Typography>Vortex</Typography>
                </Button>
                <Stack
                    direction='flex'
                    gap='1.5rem'
                >
                    <Typography>
                        NFT
                    </Typography>
                    <Typography>
                        Prices
                    </Typography>
                    <Typography>
                        Products
                    </Typography>
                    <Typography>
                        Company
                    </Typography>
                    <Typography>
                        Learn
                    </Typography>
                </Stack>
                <Box>
                    <Button>Log In</Button>
                    <Button variant='contained'>Sign Up</Button>
                </Box>
            </Stack>
        </>
    )
}

export default Navbar