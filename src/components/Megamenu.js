import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import cuetlogo from '../images/cuet-img/cuetlogo.png'

const Megamenu = () => {
  return (
    <Wrapper>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <img src={cuetlogo} alt="CUET Logo" className='img-fluid' />
          </div>
          <input type="radio" name='slider' id='menu-btn' />
          <input type="radio" name='slider' id='close-btn' />
          <ul className='nav-links my-auto'>
            <label htmlFor="close-btn" className='btn close-btn'><i className="fas fa-times"></i></label>

            <li>
              <a href="#" className="desktop-item">Academics</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">Academics</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src={cuetlogo} alt="Camera Image" className='img-fluid' height='50px' width='50px' />

                  </div>
                  <div className="row">
                    <header>Colleges</header>
                    <ul className="mega-links">
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Academic Resources</header>
                    <ul className="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Outside the Classroom</header>
                    <ul className="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="desktop-item">admissions</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">admissions</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="img.jpg" alt="Camera Image" />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="desktop-item">Campus Life</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">Mega Menu</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="img.jpg" alt="Camera Image" />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="desktop-item">Research</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">Mega Menu</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="img.jpg" alt="Camera Image" />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#" className="desktop-item">About cuet</a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">Mega Menu</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="img.jpg" alt="Camera Image" />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Graphics</a></li>
                      <li><a href="#">Vectors</a></li>
                      <li><a href="#">Business cards</a></li>
                      <li><a href="#">Custom logo</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li><a href="#">Personal Email</a></li>
                      <li><a href="#">Business Email</a></li>
                      <li><a href="#">Mobile Email</a></li>
                      <li><a href="#">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li><a href="#">Site Seal</a></li>
                      <li><a href="#">VPS Hosting</a></li>
                      <li><a href="#">Privacy Seal</a></li>
                      <li><a href="#">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="" className="desktop-item">Search</a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">Dropdown Menu</label>
              <input type='search' className='drop-menu mt-4 d-block' placeholder='Search here...' />
            </li>
            <li>
              <a href="" className="desktop-item">Login</a>
            </li>

          </ul>
          <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>
      {/* <div className="body-text">
                <div className="title">Responsive Dropdown and Mega Menu</div>
                <div className="sub-title">using only HTML & CSS</div>
            </div> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
nav{
  position: fixed;
  z-index: 99;
  width: 100%;
  background: var(--clr-primary-4);
  
}
nav .wrapper{
  position: relative;
  max-width: 1300px;
  padding: 0px 30px;
  height: 100px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper .logo a{
  color: var(--clr-primary-1);
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
  
}
.wrapper .nav-links{
  display: inline-flex;
}
.nav-links li{
  padding: 0 15px 0;
  list-style: none;
  border-right: 2px solid var(--clr-primary-3);
}
.nav-links li:last-child{
  border-right: none;
}

.nav-links li a{
  color: var(--clr-primary-1);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-transform:uppercase;
}
.nav-links li a:hover{
  color:var(--clr-secondary-1);
}
.nav-links .mobile-item{
  display: none;
}
.nav-links .drop-menu{
  position: absolute;
  /* background: red; */
  width: 300px;
  line-height: 45px;
  top: 100px;
  right:0;
  opacity: 0;
  visibility: hidden;
  /* box-shadow: 0 6px 10px rgba(0,0,0,0.15); */
}
.nav-links li:hover .drop-menu,
.nav-links li:hover .mega-box{
  transition: all 0.3s ease;
  top: 70px;
  opacity: 1;
  visibility: visible;
}
.drop-menu li a{
  width: 100%;
  display: block;
  padding: 0 0 0 15px;
  font-weight: 400;
  border-radius: 0px;
}
.mega-box{
  margin-top: 25px;
  position: absolute;
  right: 0;
  width: 100%;
  padding: 0 30px;
  top: 100px;
  opacity: 0;
  visibility: hidden;
}
.mega-box .content{
  top: 100px;
  background: var(--clr-primary-4);
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  -webkit-box-shadow: 0 8px 10px -6px var(--clr-primary-1);
       -moz-box-shadow: 0 8px 10px -6px var(--clr-primary-1);
            box-shadow: 0 8px 10px -6px var(--clr-primary-1);
}
.mega-box .content .row{
  width: calc(25% - 30px);
  line-height: 45px;
}

.mega-links li{
  border-right:none;
}

.content .row img{
  /* width: 100%;
  height: 100%; */
  /* object-fit: cover; */
}
.content .row header{
  color: var(--clr-primary-1);
  font-size: 22px;
  font-weight: 800;
  border-left:4px solid  var(--clr-secondary-1);
}
.content .row .mega-links{
  margin-left: -40px;
  border-left: 1px solid rgba(255,255,255,0.09);
}
.row .mega-links li{
  padding: 0 20px;
}
.row .mega-links li a{
  padding: 0px;
  padding: 0 20px;
  color: var(--clr-primary-1);
  font-size: 17px;
  display: block;
}
.row .mega-links li a:hover{
  color: var(--clr-secondary-1);
}
.wrapper .btn{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: none;
}
.wrapper .btn.close-btn{
  position: absolute;
  right: 30px;
  top: 10px;
}

@media screen and (max-width: 970px) {
  .wrapper .btn{
    display: block;
  }
  .wrapper .nav-links{
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0,0,0,0.18);
    transition: all 0.3s ease;
  }
  /* custom scroll bar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #242526;
  }
  ::-webkit-scrollbar-thumb {
    background: #3A3B3C;
  }
  #menu-btn:checked ~ .nav-links{
    left: 0%;
  }
  #menu-btn:checked ~ .btn.menu-btn{
    display: none;
  }
  #close-btn:checked ~ .btn.menu-btn{
    display: block;
  }
  .nav-links li{
    margin: 15px 10px;
  }
  .nav-links li a{
    padding: 0 20px;
    display: block;
    font-size: 20px;
  }
  .nav-links .drop-menu{
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;
  }
  #showDrop:checked ~ .drop-menu,
  #showMega:checked ~ .mega-box{
    max-height: 100%;
  }
  .nav-links .desktop-item{
    display: none;
  }
  .nav-links .mobile-item{
    display: block;
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  .nav-links .mobile-item:hover{
    background: #3A3B3C;
  }
  .drop-menu li{
    margin: 0;
  }
  .drop-menu li a{
    border-radius: 5px;
    font-size: 18px;
  }
  .mega-box{
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .mega-box .content{
    box-shadow: none;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
  .mega-box .content .row{
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2){
    border-top: 0px;
  }
  .content .row .mega-links{
    border-left: 0px;
    padding-left: 15px;
  }
  .row .mega-links li{
    margin: 0;
  }
  .content .row header{
    font-size: 19px;
  }
}
nav input{
  display: none;
}

/* .body-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding: 0 30px;
}
.body-text div{
  font-size: 45px;
  font-weight: 600;
} */

`

export default Megamenu
