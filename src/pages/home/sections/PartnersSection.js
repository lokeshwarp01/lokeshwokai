import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import logo1 from './1.svg';
import logo2 from './2.svg';
import logo3 from './3.svg';
import logo4 from './4.svg';
import logo5 from './5.svg';

function PartnersSection() {
    const logos = [logo1, logo2, logo3, logo4, logo5];

    return (
        <Box
            sx={{
                width: '100%',        // full width
                backgroundColor: '#007bff',
                py: { xs: 6, md: 10 },
                color: '#fff',
                textAlign: 'center',
            }}
        >
            {/* Centered content */}
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem' },
                        lineHeight: 1.2,
                    }}
                >
                    Together towards better care.
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                        mb: { xs: 4, md: 6 },
                        maxWidth: 700,
                        mx: 'auto',
                        px: { xs: 1, sm: 2 },
                    }}
                >
                    Collaborating with clients who share our vision for health.
                </Typography>

                <Grid
                    container
                    spacing={{ xs: 3, sm: 4, md: 6 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    {logos.map((logo, index) => (
                        <Grid
                            item
                            xs={6}
                            sm={4}
                            md={2.4}
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    maxWidth: { xs: 120, sm: 140, md: 160 },
                                    height: 'auto',
                                    filter: 'brightness(0) invert(1)',
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': { transform: 'scale(1.05)' },
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default PartnersSection;
