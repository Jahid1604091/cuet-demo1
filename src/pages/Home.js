import React from 'react'
import styled from 'styled-components'


const Home = () => {
    return (
        <>
       
        <Wrapper>
            <div className='container p-4'>
                <h2>Pre Installed :
                    <ul>
                        <li>react-router-dom</li>
                        <li>styled-component</li>
                    </ul>
                </h2>
                <h2>Pre Linked :
                    <ul>
                        <li>font-awesome</li>
                        <li>bootstrap 5</li>
                        <li>google fonts : poppins</li>
                    </ul>
                </h2>
                <h1>This a starter , Run :  npm i && npm start</h1>
            </div>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.article`
    background-color: green;
`

export default Home
