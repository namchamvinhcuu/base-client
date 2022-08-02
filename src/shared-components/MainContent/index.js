import React from 'react'
import { Outlet } from 'react-router'

function getWindowDimensions() {
    const { innerHeight: height, innerWidth: width } = window;
    return {
        height, width
    };
}

export default function MainContent() {
    const windowHeight = (getWindowDimensions().height - 72);
    const heightShow = `${windowHeight}px`;
    // const windowWidth = (getWindowDimensions().width - 250);
    // const widthShow = `${windowWidth}px`;
    return (
        <div style={{ width: '100%', height: heightShow, position: 'absolute', background: 'white', color: 'black' }}>
            <Outlet />
        </div>
    )
}