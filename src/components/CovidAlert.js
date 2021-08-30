import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CovidAlert = () => {
    return (
        <>
            <Wrapper className="mb-0 alert alert-dismissible fade show px-4 fw-light" role="alert">
                <Link to='/covid-19' className='link'><i className="fas fa-info-circle"></i> <strong>Covid-19 Updates and Resources!</strong></Link>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.article`
    background-color: var(--clr-primary-3);
    color: var(--clr-primary-2);
    font-size: 1.125rem;
    
    .link{
        color: var(--clr-primary-2);
    }
`

export default CovidAlert
