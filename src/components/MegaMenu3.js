import React from 'react'
import styled from 'styled-components'

const MegaMenu3 = () => {
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
        <Wrapper>
            <header className="header">
                <a href="#" className="logo">LOGO</a>
                <div className={menuOpen ? `menu-btn open`:`menu-btn`} onClick={toggler}>
                    <div className="menu-btn__lines"></div>
                </div>
                <ul className={menuOpen ? `menu-items open` : `menu-items`}>
                    <li><a href="#" className="menu-item">Home</a></li>
                    <li className={dropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleDropdown}>
                        <a href="#" className="menu-item expand-btn">Dropdown Menu</a>
                        <ul className="dropdown-menu-items expandable">
                            <li><a href="#" className="menu-item">Item 1</a></li>
                            <li><a href="#" className="menu-item">Item 2</a></li>
                            <li className="dropdown dropdown-right">
                                <a href="#" className={dropdown2 ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleDropdown2}>
                                    Item 3
                                    <i className="fas fa-angle-right"></i>
                                </a>
                                <ul className="menu-right expandable">
                                    <li><a href="#" className="menu-item">Item 3.1</a></li>
                                    <li><a href="#" className="menu-item">Item 3.2</a></li>
                                    <li><a href="#" className="menu-item">Item 3.3</a></li>
                                    <li><a href="#" className="menu-item">Item 3.4</a></li>
                                </ul>
                            </li>
                            <li><a href="#" className="menu-item">Item 4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className={megaDropdown ? `menu-item expand-btn open` : `menu-item expand-btn`} onClick={handleMegaDropdown}>Mega Menu</a>
                        <div className="mega-menu expandable">
                            <div className="content">
                                <div className="col">
                                    <section>
                                        <h2>Featured 1</h2>
                                        <a href="#" className="img-wrapper"
                                        ><span className="img"
                                        ><img src="https://picsum.photos/400?random=1" alt="Random Image" /></span></a>
                                        <p>Lorem ipsum dolor sit amet.</p>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2>Featured 2</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Item 1</a></li>
                                            <li><a href="#">Item 2</a></li>
                                            <li><a href="#">Item 3</a></li>
                                            <li><a href="#">Item 4</a></li>
                                            <li><a href="#">Item 5</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2>Featured 3</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Item 1</a></li>
                                            <li><a href="#">Item 2</a></li>
                                            <li><a href="#">Item 3</a></li>
                                            <li><a href="#">Item 4</a></li>
                                            <li><a href="#">Item 5</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col">
                                    <section>
                                        <h2>Featured 4</h2>
                                        <ul className="mega-links">
                                            <li><a href="#">Item 1</a></li>
                                            <li><a href="#">Item 2</a></li>
                                            <li><a href="#">Item 3</a></li>
                                            <li><a href="#">Item 4</a></li>
                                            <li><a href="#">Item 5</a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="menu-item expand-btn">Blog</a>
                        <div className="mega-menu blog expandable">
                            <div className="content">
                                <div className="col">
                                    <a href="#" className="img-wrapper"
                                    ><span className="img"
                                    ><img
                                                src="https://picsum.photos/400?random=2"
                                                alt="Random Image" /></span
                                        ></a>
                                    <h2>Title</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                                        quibusdam deserunt quis.
                                    </p>
                                    <a href="#" className="read-more">read more...</a>
                                </div>
                                <div className="col">
                                    <a href="#" className="img-wrapper"
                                    ><span className="img"
                                    ><img
                                                src="https://picsum.photos/400?random=3"
                                                alt="Random Image" /></span
                                        ></a>
                                    <h2>Title</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                                        quibusdam deserunt quis.
                                    </p>
                                    <a href="#" className="read-more">read more...</a>
                                </div>
                                <div className="col">
                                    <a href="#" className="img-wrapper"
                                    ><span className="img"
                                    ><img
                                                src="https://picsum.photos/400?random=4"
                                                alt="Random Image" /></span
                                        ></a>
                                    <h2>Title</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
                                        quibusdam deserunt quis.
                                    </p>
                                    <a href="#" className="read-more">read more...</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#" className="menu-item">About</a></li>
                </ul>
            </header>
        </Wrapper>
    )
}

const Wrapper = styled.article`
/* header */
.header {
  background: #122331;
  position: relative;
  max-width: 80vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 1;
}
.header a {
  text-decoration: none;
  color: #ffffff;
}
.header ul {
  list-style: none;
}
.logo {
  font-size: 2rem;
}
.menu-items {
  display: flex;
  align-items: center;
}
.menu-items li {
  padding: 0.5rem 1rem;
  transition: background 0.3s ease-in-out;
}
.menu-items li:hover {
  background-color: #ff652f;
}

/* dropdown */
.dropdown {
  position: relative;
}
.dropdown-menu-items,
.menu-right {
  position: absolute;
  background: #122331;
  width: 100%;
  top: 50px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.menu-right {
  top: 0;
  left: 110%;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.dropdown:hover .dropdown-menu-items {
  top: 34px;
  opacity: 1;
  visibility: visible;
}
.dropdown-right:hover .menu-right {
  left: 100%;
  opacity: 1;
  visibility: visible;
}

/* mega menu  */
.mega-menu {
  position: absolute;
  left: 0;
  width: 80vw;
  top: 80px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.mega-menu .content {
  background: #122331;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
}
.blog .content {
  grid-template-columns: repeat(3, 1fr);
}
.content .col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 3rem;
}
.content .col .img-wrapper {
  display: block;
  position: relative;
  width: 100%;
  height: 20vw;
  overflow: hidden;
}
.content .col .img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.content .col img {
  width: 100%;
  transition: transform 0.3s ease-in-out;
}
.content .col .img-wrapper:hover img {
  transform: scale(1.1);
}
.content .col h2 {
  color: #ff652f;
  font-size: 1.2rem;
  line-height: 3rem;
  font-weight: bold;
}
.content .col p {
  line-height: 1.2rem;
}
.content .col .mega-links {
  border-left: 1px solid #1a3246;
}
.content .col .read-more {
  display: inline-block;
  padding-top: 1rem;
  color: #427dad;
  transition: color 0.3s ease;
}
.col .mega-links li,
.col .mega-links li a {
  padding: 0 1rem;
}
.menu-items li:hover .mega-menu {
  top: 50px;
  opacity: 1;
  visibility: visible;
}
.content .col .read-more:hover {
  color: #ff652f;
}


/* NEW STUFFS */

/* nav menu button */
.menu-btn {
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  z-index: 2;
}
.menu-btn__lines::before,
.menu-btn__lines::after {
  content: "";
  position: absolute;
}
.menu-btn__lines,
.menu-btn__lines::before,
.menu-btn__lines::after {
  width: 1.5rem;
  height: 0.1rem;
  background: #ffffff;
  transition: all 0.5s ease-in-out;
}
.menu-btn__lines::before {
  transform: translateY(-0.5rem);
}
.menu-btn__lines::after {
  transform: translateY(0.5rem);
}
/* animation */
.menu-btn.open .menu-btn__lines {
  transform: translateX(2rem);
  background: transparent;
}
.menu-btn.open .menu-btn__lines::before {
  transform: rotate(45deg) translate(-1.5rem, 1.5rem);
  background: #ffffff;
}
.menu-btn.open .menu-btn__lines::after {
  transform: rotate(-45deg) translate(-1.5rem, -1.5rem);
  background: #ffffff;
}

/* MEDIA QUERY */
@media screen and (max-width: 970px) {
  .menu-btn {
    display: flex;
  }

  .header .menu-items {
    position: absolute;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 100%;
    right: 0;
    background: #122331;
    display: block;
    padding: 1rem;
    line-height: 3rem;
    overflow-y: auto;
    transform: translateY(-100vh);
    transition: transform 0.3s ease-out;
    opacity: 0;
  }
  .menu-items.open {
    transform: translateY(0);
    opacity: 1;
  }

  .menu-items li {
    margin: 15px 10px;
  }
  .menu-items li a {
    padding: 0 1rem;
    display: block;
    font-size: 1.4rem;
  }
  .menu-items li:hover {
    background-color: transparent;
  }

  /* DROPDOWN, MEGA MENUS */
  .menu-items .dropdown-menu-items,
  .menu-items .menu-right,
  .menu-items .mega-menu {
    position: static;
    opacity: 1;
    top: 4rem;
    visibility: visible;
    padding-left: 1rem;
    width: 100%;
    max-height: 0;
    transform: scaleY(0);
    transform-origin: top;
    overflow: hidden;
    transition: all 0.2s ease;
  }
  .expand-btn.open + .expandable {
    max-height: 100%;
    transform: scaleY(1);
  }

  .expandable li {
    margin: 0;
  }
  .expandable li a {
    font-size: 1rem;
  }

  .mega-menu .content {
    grid-template-columns: auto;
    padding: 1rem 1rem 0 1rem;
  }
  .mega-menu .content .col {
    width: 100%;
    padding-top: 1rem;
    margin-bottom: 0.5rem;
    border-top: 1px solid #1a3246;
  }
  .mega-menu .content .col:nth-child(1) {
    border-top: 0px;
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

export default MegaMenu3
