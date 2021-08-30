import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <div className="top-nav d-flex justify-content-between">
                <div></div>
                <ul className='d-flex'>
                    <li><Link to='/apply-now' className='link'><i className="fas fa-pen"></i> Apply</Link></li>
                    <li><Link to='/giving' className='link'><i className="fas fa-gift"></i> Giving</Link></li>
                    <li><Link to='/news' className='link'><i className="fas fa-newspaper"></i> News</Link></li>
                </ul>
                <div className="student-section dropdown d-flex">
                    <button className="dropdown-toggle px-4 m-2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Students
                    </button>
                    <ul className="dropdown-menu rounded-0" aria-labelledby="dropdownMenuButton2">
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/faculty-staffs">Faculty & Staffs</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/parents">Parents</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/alumni">Alumni</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-nav">

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
 background-color: var(--clr-primary-1);
 .top-nav > ul >li{
     padding: .9rem;
     padding-bottom: 0;
     font-size: 1.1rem;
     margin: 0 auto;
 }
.top-nav > ul >li .link{
     color: #fff;
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


 .student-section .link{
     margin: 0 auto;
     color: #fff;
 }
 .student-section .dropdown-toggle{
     background-color: var(--clr-primary-2);
     color: #fff;
     border: 0;
     font-size: 1.1rem;
 }

.dropdown-menu{
     background-color: var(--clr-primary-2);
     color: #fff;
     font-size: 1.1rem;
     margin: 0;
     padding: 0;
     width: fit-content;
 }

.dropdown-menu > li{
    
     margin: 0;
     padding: 0;
 }

.dropdown-item{
     /* background-color: var(--clr-primary-1); */
     color: #fff;
     border: 0;
     /* font-size: 1.1rem; */
 }

.dropdown-item:hover,.dropdown-item.active{
     background-color: var(--clr-primary-1);
 }

.dropdown-divider{
     /* background-color: var(--clr-primary-1); */
     color: var(--clr-primary-1);
     height: .1rem;
     border: 0;
     margin: 0;
     padding: 0;
     /* font-size: 1.1rem; */
 }
/*
.dropdown-item.active{
     background-color: var(--clr-primary-3);
     color: var(--clr-primary-1);
     border: 0;
     font-size: 1.1rem;
 } */



`
export default Navbar
