import React from 'react'
import styled from 'styled-components'

const HamburgerMenu = ({menuOpen,toggler}) => {


    return (
        <Wrapper>
            <div className={menuOpen ? `menu-btn open`:`menu-btn`} onClick={toggler}>
                <div className="menu-btn_burger"></div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    /* background-color: grey; */

    .menu-btn{
        position: relative;
        display: none;
        justify-content: space-between;
        align-items: center;
        width: 80px;
        height: 80px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        /* border: 3px solid #fff; */
        z-index:2;
    }

    .menu-btn_burger{
        width: 50px;
        height: 6px;
        background: #fff;
        border-radius: 5px;
        box-shadow:0 2px 5px rgba(255,101,47,0.2);
        transition: all 0.5s ease-in-out;
    }

    .menu-btn_burger::before,
    .menu-btn_burger::after{
        content: '';
        position: absolute;
        width: 50px;
        height: 6px;
        background: #fff;
        border-radius: 5px;
        box-shadow:0 2px 5px rgba(255,101,47,0.2);
        transition: all 0.5s ease-in-out;
    }

    .menu-btn_burger::before{
        transform: translateY(-0.7rem);
    }
    .menu-btn_burger::after{
        transform: translateY(0.7rem);
    }

    /* animate */

    .menu-btn.open .menu-btn_burger{
        transform: translateX(2rem);
        background: transparent;
        box-shadow: none;
    }

    .menu-btn.open .menu-btn_burger::before{
        transform: rotate(45deg) translate(-1.5rem,1.5rem);
    }

    .menu-btn.open .menu-btn_burger::after{
        transform: rotate(-45deg) translate(-1.5rem,-1.5rem);
    }




`
export default HamburgerMenu
