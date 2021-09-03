import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopNav = () => {
    const [searchOpen, setSearchOpen] = React.useState(false)

    const searchToggler = (e) => {
        e.preventDefault()
        setSearchOpen(!searchOpen)
    }

    return (
        <>
            <Wrapper>
                <div className="top-nav">

                    <div className="search">
                        <a href="" className={searchOpen ? 'searchOpen':''} onClick={searchToggler}><i className="fas fa-search" ></i></a>
                        <input type="text" className='search-box' placeholder='search here...' />
                    </div>

                    <ul className='d-flex justify-content-center mb-0'>
                        <li><Link to='/apply-now' className='link'><i className="fas fa-pen"></i> Apply</Link></li>
                        <li><Link to='/giving' className='link'><i className="fas fa-gift"></i> Giving</Link></li>
                        <li><Link to='/news' className='link'><i className="fas fa-newspaper"></i> News</Link></li>
                    </ul>


                    <div className="login d-flex justify-content-center">
                        <a href="" className='d-flex d-lg-none'><i className="fas fa-user-lock"></i></a>
                        <form action="" className='login-form'>
                            <i className="fas fa-envelope"></i>  <input type="text" placeholder='email address...' />
                            <i className="fas fa-key"></i>   <input type="password" placeholder='enter password...' />
                            <button type="submit" className='login-btn'><i className="fas fa-sign-in-alt"></i></button>
                        </form>
                    </div>

                </div>

            </Wrapper>

        </>
    )
}

const Wrapper = styled.section`

.top-nav{
    background-color: var(--clr-primary-1);
    padding:0.5rem 0;
    display: flex;
    justify-content: space-evenly;
    
}

.fa-search, .fa-envelope, .fa-key{
    position: absolute;
    transition: all 0.5s ease;
    
}

.fa-search,.fa-envelope, .fa-key, .fa-user-lock{
    background: transparent;
    color:  var(--clr-primary-4);
    font-size: 1rem;
    padding: 3px;
    transition:all 0.5s ease;
    
}

.top-nav  ul li .link{
    color: var(--clr-primary-4);
    font-size: 1.1rem;
    white-space: nowrap;
    margin: 0.5rem;
}

.search-box, .login-form input,.login-btn{
    outline: 0;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--clr-primary-4);
    color: var(--clr-primary-4);
    text-align: center;
    transition: all 0.5s ease;
}

.login-btn{
    border-bottom: 0;
}

.fa-sign-in-alt{
    color: var(--clr-primary-4);
}

.search-box, .login-form ::placeholder{
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    transition: all 0.5s ease;
}


.top-nav .fa-pen{
     border: 2px solid var(--clr-secondary-1);
     border-radius: 50%;
     background-color: var(--clr-secondary-1);
     padding: 5px;
 }

.top-nav .fa-gift{
     border: 2px solid #8C8279;
     border-radius: 50%;
     background-color: #8C8279;
     padding: 5px;
 }

.top-nav .fa-newspaper{
     border: 2px solid var(--clr-primary-2);
     border-radius: 50%;
     background-color: var(--clr-primary-2);
     padding: 5px;
 }




 @media screen and (max-width:991px){

    .top-nav  ul li .link{
        font-size: 0.8rem;
    }

    .top-nav{
        position: relative;
    }

    .login-form,.search-box{
        display: none;
        opacity: 0;
        transition:all 0.5s ease-in-out;
        padding: 0.5rem;
        
    }

 
    .searchOpen + .search-box{
        transition:all 0.5s ease;
        opacity: 1;
        display: flex;
        border: 4px solid var(--clr-secondary-1);
        position: absolute;
        top: 90%;
        left: 0;
        width: 100%;
        box-shadow: 5px 5px 5px var(--clr-primary-1);
        z-index:999;
        background-color: var(--clr-primary-4);
        color: var(--clr-primary-1);
    }


 }


`
export default TopNav
