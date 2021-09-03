import React from 'react'
import styled from 'styled-components'
import cuetlogo from '../images/cuet-img/cuetlogo.png'
import TopNav from './TopNav'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [dropdown, setDropdown] = React.useState(false)
    const [dropdown2, setDropdown2] = React.useState(false)
    const [megaDropdown, setMegaDropdown] = React.useState(false)

    const toggler = (e) => {
        e.preventDefault()
        setMenuOpen(!menuOpen)
    }

    const handleDropdown = (e) => {
        e.preventDefault()
        setDropdown(!dropdown)
    }

    const handleDropdown2 = (e) => {
        e.preventDefault()
        setDropdown2(!dropdown2)
    }

    const handleMegaDropdown = (e) => {
        e.preventDefault()
        setMegaDropdown(!megaDropdown)
    }

    return (
        <>
            <TopNav />
            <Wrapper>
                <header className="header">
                    <a href="" className="logo"><img src={cuetlogo} alt="CUET logo" /></a>
                    <div className="title">
                        <h1>চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়</h1>
                        <h2>Chittagong University of Engineering and Technology</h2>
                    </div>
                    <div className={menuOpen ? `menu-btn open` : `menu-btn`} onClick={toggler}>
                        <div className="menu-btn_burger"></div>
                    </div>

                    <ul className={menuOpen ? `menu-items open` : `menu-items`}>


                        <li>
                            <a href="" className={megaDropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleMegaDropdown}>Academics</a>
                            <div className="mega-menu expandable">
                                <div className="content">

                                    <div className="col">
                                        <section>
                                            <h2>Featured 1</h2>
                                            <a href="#" className="img-wrapper">
                                                <span className="img"><img src={cuetlogo} alt="Random Image" />
                                                </span
                                                ></a>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 2</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 3</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 4</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li>
                            <a href="" className={megaDropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleMegaDropdown}>Admissions</a>
                            <div className="mega-menu expandable">
                                <div className="content">

                                    <div className="col">
                                        <section>
                                            <h2>Featured 1</h2>
                                            <a href="#" className="img-wrapper">
                                                <span className="img"><img src={cuetlogo} alt="Random Image" />
                                                </span
                                                ></a>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 2</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 3</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 4</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li>
                            <a href="" className={megaDropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleMegaDropdown}>Campus Life</a>
                            <div className="mega-menu expandable">
                                <div className="content">

                                    <div className="col">
                                        <section>
                                            <h2>Featured 1</h2>
                                            <a href="#" className="img-wrapper">
                                                <span className="img"><img src={cuetlogo} alt="Random Image" />
                                                </span
                                                ></a>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 2</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 3</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 4</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li>
                            <a href="" className={megaDropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleMegaDropdown}>Research</a>
                            <div className="mega-menu expandable">
                                <div className="content">

                                    <div className="col">
                                        <section>
                                            <h2>Featured 1</h2>
                                            <a href="#" className="img-wrapper">
                                                <span className="img"><img src={cuetlogo} alt="Random Image" />
                                                </span
                                                ></a>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 2</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 3</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 4</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li>
                            <a href="" className={megaDropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleMegaDropdown}>about cuet</a>
                            <div className="mega-menu expandable">
                                <div className="content">

                                    <div className="col">
                                        <section>
                                            <h2>Featured 1</h2>
                                            <a href="#" className="img-wrapper">
                                                <span className="img"><img src={cuetlogo} alt="Random Image" />
                                                </span
                                                ></a>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 2</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 3</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>Featured 4</h2>
                                            <ul className="mega-links">
                                                <li><a href="">Item 1</a></li>
                                                <li><a href="">Item 2</a></li>
                                                <li><a href="">Item 3</a></li>
                                                <li><a href="">Item 4</a></li>
                                                <li><a href="">Item 5</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                            </div>

                        </li>


                        {/* dropdown */}
                        <li className='dropdown'>
                            <a href="#" className={dropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleDropdown}>Students</a>
                            <ul className='dropdown-menu-items expandable'>
                                <li><a href="" className='menu-item'> m - 1</a></li>
                            </ul>
                        </li>
                    </ul>

                </header>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
@import url('https://fonts.maateen.me/charu-chandan-3d/font.css');
/* header */

/* top nav = 10 vh
bottom nav = 15vh  
total header = 25
*/

.header{
    background: var(--clr-primary-4);
    position: relative;
    width: 100%;
    height: 15vh;
    /* max-width: 80vw; */
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index:1;
}

.header ul{
    list-style: none;
    white-space: nowrap; 
    margin: auto;
    /* keep the words in same line */
}

.header ul li{
   border-right: 3px solid var(--clr-primary-3);
}

.header ul li:last-child{
   border-right: none;
}

.header ul li a{
    text-decoration:none;
    color: var(--clr-primary-1);
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 800;
}

.logo{
    font-size: 2rem;
}

.title h1{
    font-family: 'CharuChandan3D', sans-serif !important;
    color: var(--clr-secondary-1);
    font-size: 1.2rem;
    text-align: center;
    font-weight: 800;
    max-width: 30vw;
}

.title h2{
    color: var(--clr-primary-1);
    font-size: 0.6rem;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    max-width: 30vw;
}

/* hamburger */
.menu-btn{
        position: relative;
        display: none;
        justify-content:center;
        align-items: center;
        width: 80px;
        height: 80px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        /* border: 3px solid #fff; */
        z-index:2;
    }

    .menu-btn_burger{
        width: 40px;
        height: 4px;
        background: #fff;
        border-radius: 5px;
        box-shadow:0 2px 5px rgba(255,101,47,0.2);
        transition: all 0.5s ease-in-out;
    }


    .menu-btn_burger::before,
    .menu-btn_burger::after{
        content: '';
        position: absolute;
        width: 40px;
        height: 4px;
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
        /* transform: translateX(1.5rem); */
        /* background: transparent; */
        /* transform: rotate(360deg); */
        box-shadow: none;
    }

    .menu-btn.open .menu-btn_burger::before{
        transform: translate(-.5rem,.7rem);
    }

    .menu-btn.open .menu-btn_burger::after{
        transform: translate(-.5rem,-.7rem);
    }

/* end hamburger */

.menu-items{
    display: flex;
    align-items: center;
}

.menu-items li{
    padding: 0.5rem 1rem;
    transition: background 0.3s ease-in-out;
}

.menu-items li:hover{
    background-color: #ff652f;
}

/* dropdown */
.dropdown{
    position: relative;
}

.dropdown-menu-items, .menu-right{
    position: absolute;
    background: #122331;
    width: 100%;
    top: 50px;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    /* padding-left: 0; */
}

.menu-right{
    left: 110%;
    top: 0;
}

.menu-item{
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* left: 0; */
    
}

.dropdown:hover .dropdown-menu-items{
    opacity: 1;
    visibility: visible;
    top: 0px;
}

.dropdown-right:hover .menu-right{
    opacity: 1;
    visibility: visible;
    left: 100%;
}


/* mega menu */
.mega-menu{
    align-items: center;
    position: absolute;
    left: 0;
    top: 80px;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
}
.mega-links{
    padding-left: 0;
}

.mega-menu .content{
    background-color: #122331;
    padding: 1rem;
    width: 100%;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
}

.content .col{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    line-height: 3rem;
}

/* image */
.content .col .img-wrapper{
    display: block;
    position: relative;
    width: 100%;
    height: 20vw;
    overflow: hidden;
}

.content .col .img{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
}

.content .col img{
    width: 100%;
    transition: transform 0.5s ease-in-out;
}

.content .col .img-wrapper:hover img{
    transform: scale(1.1);
}


.content .col h2{
    color: #ff652f;
    line-height: 3rem;
}
.col .mega-links li,
.col .mega-links li a {
  padding: 0 1rem;
}
.menu-items li:hover .mega-menu{
    opacity: 1;
    visibility: visible;
    top: 50px;
}
.content .col .mega-links {
  border-left: 1px solid #1a3246;
}


@media screen and (max-width:991px){
    /* hamburger */
        .menu-btn{
            display: flex;
            
        }
    /* end hamburger */

        .header .menu-items{
            position: absolute;
            opacity: 0;
            /* height: calc(100vh - 100%); */
            height: 100vh;
            width: 100%;
            max-width: 350px;
            top: 100%;
            right: 0;
            display: block;
            padding: 1rem;
            line-height: 3rem;
            overflow-y: auto;
            transition: all 0.5s ease-out;
            z-index:-1;
            transform: translateY(-100vh);
            background: #122331;
        }

        .menu-items.open{
            opacity: 1;
            transform: translateY(0);
        }
        .menu-items li{
            margin: 15px 10px;
        }
    
        .menu-items li a{
            padding: 0 1rem;
            display: block;
            font-size: 1.4rem;
        }

        .menu-items li:hover{
            background: transparent;
        }

        /* dropdown mega menus */

        .menu-items .dropdown-menu-items,
        .menu-items .menu-right,
        .menu-items .mega-menu{
            position: static;
            opacity: 1;
            top: 4rem;
            visibility: visible;
            padding-left: 1rem;
            width: 100%;
            max-height: 0;
            transform: scaleY(0);
            transform-origin:top;
            overflow: hidden;
            transition: all 0.5s ease;
        }

        .expand-btn.open + .expandable{
            max-height: 100%;
            transform: scaleY(1);
        }

        .expandable li{
            margin: 0;
        }

        .expandable li a{
            font-size: 1rem;
        }

        .mega-menu .content{
            grid-template-columns: auto;
            padding: 1rem 1rem 0 1rem;
        }
    
        .mega-menu .content .col{
            width: 100%;
            padding-top:1rem;
            margin-bottom: 0.5rem;
            border-top: 1px solid #1a3246;
        }
    
        .mega-menu .content .col:first-child{
            border-top: none;
        }
    
        .content .col .mega-links {
            border-left: 0px;
            padding-left: 1rem;
        }

        .col .mega-links li {
            margin: 0;
        }
    
    
    }


`

export default Navbar
