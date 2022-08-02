import React from 'react'
import { Grid } from '@mui/material'

import Navbar from 'shared-components/Navbar'
import Sidebar from 'shared-components/Sidebar'
import MainContent from 'shared-components/MainContent'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width, height
    };
}

export default function Layout() {
    const height = `${getWindowDimensions().height - 72}px`;
    return (
        <>
            <Navbar />

            <Grid container spacing={0} style={{ height: height }}>
                <Grid item xs={1.5} style={{ position: 'relative' }}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10.5} style={{ position: 'relative' }}>
                    <MainContent />
                </Grid>
            </Grid>
        </>
    )
}
