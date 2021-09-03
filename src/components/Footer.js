import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <div className='footer text-center p-4 bg-dark text-light'>
                &copy; {new Date().getFullYear()}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

.footer{

    /* max-height: 5vh; */
    position: absolute;
   /* left: 0; */
   bottom: 0;
   width: 100%;
    }
`

export default Footer
