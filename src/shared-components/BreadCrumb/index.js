import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { DynamicIcon } from '../../utils/index';
// import * as React from 'react';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function IconBreadcrumbs({ obj }) {
    return (
        <Breadcrumbs aria-label="breadcrumb" style={{ backgroundColor: 'black', height: '40px', display: 'flex' }}>
            <Typography
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="white"
            >
                <DynamicIcon name={obj.iconLevel1} sx={{ mr: 0.5 }} />
                {obj.level1}
            </Typography>
            <Typography
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="white"
            >
                <DynamicIcon name={obj.iconLevel2} sx={{ mr: 0.5 }} />
                {obj.level2}
            </Typography>
            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="white"
            >
                <DynamicIcon name={obj.iconLevel3} sx={{ mr: 0.5 }} />
                {obj.level3}
            </Typography>
        </Breadcrumbs>
    );
}
