import React from 'react'
import styled from 'styled-components'
import './styleBanner.css'

const Banner = ({ children, height }) => {

    return (
        <div className="banner d-flex mx-auto" style={{ height: `${height}px` }}>
            {children}
            <div className="overlay" style={{ height: `${height}px` }}></div>
        </div>
       
    )
}


export default Banner
