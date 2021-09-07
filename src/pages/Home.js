import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import audi from '../images/cuet-img/audi.jpg'
import vc from '../images/cuet-img/vc.jpg'
import vcBuilding from '../images/cuet-img/vc building.jpg'
import shohidMinar from '../images/cuet-img/shohid-minar.jpg'
import shadhinotaChottor from '../images/cuet-img/shadinota chottor.jpg'
import playing from '../images/cuet-img/playing.jpg'
import banner from '../images/cuet-img/banner-2.jpg'



const Home = () => {
    return (

        <Wrapper>

            {/* main banner */}
            <section class="banner">
                <div className="container">
                    <h2>what will</h2>
                    <h1>cuet</h1>
                    <h2>start in you ?</h2>
                    <p className="lead py-2">At CUET, we believe in the value of hard work, and we pursue that work tirelessly. We believe that our collective calling as a University is to change lives, change perception and, through our work, to change the world.</p>
                    <div className="btn-group mb-4">

                        <Link to='/apply-now' className="text-uppercase btn-outline-secondary p-2 mx-1">apply now</Link>
                        <Link to='/visit-us' className="text-uppercase btn-secondary p-2 mx-1">visit us</Link>
                    </div>
                </div>
            </section>
            {/* end main banner */}


            {/* covid banner */}
            <section className="covid-banner p-4 mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <p className="lead text-center fw-bold">
                                As a University, we are committed to creating a safe and healthy campus environment for all students and staffs. Stay informed about our ongoing efforts.
                            </p>
                            <Link to='/covid-19' className='text-center text-capitalize'><h5><i className="fas fa-bell"></i> <span>cuet covid-19 updates</span> </h5></Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* end covid banner */}


            {/* welcome section */}
            <section className="welcome-section p-4 mt-4">
                <div className="container">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="242.686" height="176.222" viewBox="0 0 242.686 176.222">
                        <g transform="translate(13.061 -4.873)" opacity="0.202">
                            <path d="M145.33,38.342l-.388.422c-14.537,1.693-49.192,6.316-57.81,17.881L46.681,100.766A31.1,31.1,0,0,0,90.95,98.777l53.993-60.013Z" transform="translate(70.805 72.023)" fill="#8163a6"></path>
                            <path d="M117.549,11.719l-1.195.946,60.719,66.2-190.134.2v32.282H215.152l14.474-16.091L160.488,15.587A31.082,31.082,0,0,0,117.549,11.719Z" transform="translate(0 0)" fill="#8163a6"></path>
                        </g>
                    </svg>
                    <h2 className='text-uppercase fw-bold py-5'>make your mark</h2>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <img src={audi} className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 my-auto">
                            <h3 className='fw-bold text-capitalize'>Welcome to Center of Excellence</h3>
                            <p>
                                A new className of first-year undergraduate students will soon arrive on campus to begin their CUET Journey. This high-achieving group of students is ready to learn and take on new challenges as they strive to make a difference in the lives of others and leave a lasting impact on their communities.
                            </p>
                            <Link to='/meet-className' className='text-center text-capitalize'><h5><i className="fas fa-user-graduate"></i> <span>meet the class of 2025</span> </h5></Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* end  welcome section  */}


            {/*   gallery section  */}

            <div className="container">
                <div className="col-md-8 mx-auto py-5">
                    <div className="gallery-wrapper">
                        <section className="gallery">
                            <div className="clipped-border">
                                <img src={vc} id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={vcBuilding} id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={shadhinotaChottor} id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={shohidMinar} id="clipped" />
                            </div>
                            <div className="clipped-border">
                                <img src={playing} id="clipped" />
                            </div>
                            <div className="shadow"></div>

                        </section>
                    </div>
                </div>
            </div>

            {/* end  gallery section  */}


            {/* events section */}
            <section className="event-section p-4 mt-4">
                <div className="container">
                    <h2 className='text-uppercase fw-bold py-5'>upcoming campus events</h2>
                    <div className="row py-5">
                        <div className="col-md-5">
                            <ul>
                                <li>
                                    <Link to='/event-1'>
                                        <div className="card">
                                            <div className="card-body d-flex">
                                                <div className="date">
                                                    <p>Sep 10th</p>
                                                </div>
                                                <div className="description">

                                                    <h5>Events title 1</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat!</p>
                                                    <p> <i className="fas fa-clock"></i> 10:30 AM</p>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/event-1'>
                                        <div className="card">
                                            <div className="card-body d-flex">
                                                <div className="date">
                                                    <p>Oct 21st</p>
                                                </div>
                                                <div className="description">

                                                    <h5>Events title 2</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat!</p>
                                                    <p> <i className="fas fa-clock"></i> 5:30 PM</p>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/event-1'>
                                        <div className="card">
                                            <div className="card-body d-flex">
                                                <div className="date">
                                                    <p>Dec 20th</p>
                                                </div>
                                                <div className="description">

                                                    <h5>Events title 2</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat!</p>
                                                    <p> <i className="fas fa-clock"></i> 7:30 PM</p>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-7 my-auto">
                            <div class="wrapper">
                                {/* <img src="https://source.unsplash.com/random/600x600?water" alt="" /> */}
                                {/* <img src="https://source.unsplash.com/random/600x600?summer" alt="" /> */}
                                {/* <img src="https://source.unsplash.com/random/600x600?plants" alt="" /> */}
                                {/* <img src="https://source.unsplash.com/random/700x700?snow" alt="" /> */}
                                <img src={vc} alt="" />
                                <img src={vcBuilding} alt="" />
                                <img src={playing} alt="" />
                                <img src={audi} alt="" />
                                <img src={shadhinotaChottor} alt="" />
                                <img src={shohidMinar} alt="" />
                            </div>
                            <Link to='/events' className='text-center text-capitalize'><h5>see more events...</h5></Link>
                        </div>

                    </div>
                </div>
            </section>
            {/* end  events section  */}

            {/* news section */}
            <section className="news-section news-section-clip py-2">
                <div className="container">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="242.686" height="176.222" viewBox="0 0 242.686 176.222">
                        <g transform="translate(13.061 -4.873)" opacity="0.202">
                            <path d="M145.33,38.342l-.388.422c-14.537,1.693-49.192,6.316-57.81,17.881L46.681,100.766A31.1,31.1,0,0,0,90.95,98.777l53.993-60.013Z" transform="translate(70.805 72.023)" fill="#8163a6"></path>
                            <path d="M117.549,11.719l-1.195.946,60.719,66.2-190.134.2v32.282H215.152l14.474-16.091L160.488,15.587A31.082,31.082,0,0,0,117.549,11.719Z" transform="translate(0 0)" fill="#8163a6"></path>
                        </g>
                    </svg>
                    <h2 className='text-uppercase fw-bold py-5'>university news</h2>
                    <div id="main">
                        <div class="imageselect row add-clearfix image-imagebox">
                            <div class="col-md-6">
                                <article class="imagebox">
                                    <figure> <a href="#"><img src={vc} alt="" /></a>
                                        <h2 className='heading'>Top news 1</h2>
                                        <figcaption>
                                            <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus?</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                            <div class="col-md-6">
                                <article class="imagebox">
                                    <figure> <a href="#"><img src={audi} alt="" /></a>
                                        <h2 className='heading'>Top news 2</h2>
                                        <figcaption>
                                            <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus?</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                            <div class="col-md-6">
                                <article class="imagebox">
                                    <figure> <a href="#"><img src={shadhinotaChottor} alt="" /></a>
                                        <h2 className='heading'>Top news 3</h2>
                                        <figcaption>
                                            <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus?</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                            <div class="col-md-6">
                                <article class="imagebox">
                                    <figure> <a href="#"><img src={vcBuilding} alt="" /></a>
                                        <h2 className='heading'>Top news 4</h2>
                                        <figcaption>
                                            <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, delectus?</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            </div>
                        </div>
                    </div>
                    <Link to='/news'><h3> <span>see more news...</span></h3></Link>
                </div>
            </section>
            {/* end  news section  */}

        </Wrapper>


    )
}

const Wrapper = styled.article`

 /* banner */
    .banner {
        /* height: 400px; */
        width: 100%;
        text-align: center;
        /* padding-top: 100px; */
        color: var(--clr-primary-4);
        overflow: hidden;
        background: var(--clr-primary-1);  /* fallback for old browsers */
        background: linear-gradient(rgb(46,26,71,0.7), rgb(192,72,72,0.7)), url(${banner}); 
        background-size: cover;
        background-repeat: no-repeat;
    }


   .banner h1, .banner h2{
        text-transform: capitalize;
        font-size: 5rem;
        font-style:italic;
        font-weight: bolder;
        color: var(--clr-primary-4);
    }
   .banner h1{
        font-size: 10rem;
        color: var(--clr-secondary-1);
        text-transform: uppercase;
    }
    .banner h2:nth-of-type(1){
        margin-top:50px;
    }

    /* end of banner */


    /* covid banner */
    .covid-banner span{
        border-bottom:3px solid var(--clr-secondary-1);
        
    }

    .covid-banner .fa-bell{
        border: 2px solid var(--clr-secondary-1);
        border-radius: 50%;
        background-color: var(--clr-secondary-1);
        padding: 5px;
        color: var(--clr-primary-4);
     
    }
    .covid-banner .span:hover .fa-bell{
        transform: scale(1.1);
    }

        /* end covid banner */


       /* ----welcome section ---  */

    .welcome-section{
        background: var(--clr-primary-3);
    }

    .welcome-section .container{
        position: relative;
    }
    .welcome-section h2{
        color: var(--clr-primary-1);
        position: absolute;
        top: -5%;
        left: 10%;
    }
    .welcome-section p{
        text-align: justify;
    }

    .welcome-section .fa-user-graduate{
        border: 2px solid var(--clr-primary-2);
        border-radius: 50%;
        background-color: var(--clr-primary-2);
        padding: 5px;
        color: var(--clr-primary-4);
     
    }

    .welcome-section span{
        border-bottom:3px solid var(--clr-secondary-1);
        
    }

    .welcome-section .row{
        background-color: var(--clr-primary-1);
        border-bottom: 10px solid var(--clr-secondary-1);
        
    }

    .welcome-section .col-md-6, .welcome-section .col-md-6 h5 {
        color: var(--clr-primary-4);
        line-height: 1.5rem;
    }

       /* ---- end  welcome section ----  */

        /* event section */

    .event-section h2{
        color: var(--clr-primary-1);
        border-bottom: 3px solid var(--clr-secondary-1);
    }
    .event-section .card{
         border: none;
    }
    .event-section .date{
        background-color: var(--clr-primary-1);
        color: var(--clr-primary-4);
        font-weight: 600;
        font-size: 1.5rem;
        padding: 10px;
        text-align: center;
        margin: 0 auto;
        
    }

    .event-section .card .description{
        color: var(--clr-primary-4);
        background-color: var(--clr-secondary-1);
        padding: 10px;
        border-left: 3px solid var(--clr-secondary-1);
    }

    .event-section .card .description p:nth-of-type(2){
        border-top: 2px dotted var(--clr-primary-3);
       
    }
    .event-section .card h5{
        color: var(--clr-primary-4);
        font-weight: 700;
        font-size: 1.5rem !important;
    }
    .event-section .card h5:nth-last-of-type(2){
        color: var(--clr-primary-4);
        font-weight: 700;
        font-size: 1.5rem !important;
    }


.wrapper {
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 800px;
  max-height: 800px;
  
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;
}

.wrapper img {
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform: scale(1);
  transition: all .25s;
  height: 200px;
  width: 200px;
  
  &:nth-child(7n + 1) {
    grid-column: 2 / span 2;
  }
  
  &:hover {
    z-index: 2;
    transform: scale(2);
  }

}


    /* end event-section */

       /* ----  gallery section ----  */

.gallery-wrapper{
    position: relative;
    min-height: 500px;
}

.gallery{
    position:absolute;
    height:100%;
    width:100%;
    min-height: 500px;
}

.gallery:after{
  content:'';
}

.shadow{
  position: absolute;
  top: 500px;
  left: 100px;
  width: 500px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(var(--clr-primary-1),rgba(0,0,0,0) 70%);
}

.gallery img{
  width:100%;
  height:100%;
}

.clipped-border{
  -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
   clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
   padding:5px;
   background:linear-gradient(grey,lightgrey);
   width:200px;
   height:200px;
   max-height:250px;
   max-width:250px;
   height: 100%;
   width:100%;
   transition:transform 0.2s;
   position:absolute;
   cursor:pointer;
}

.clipped-border:before{
  content:'';
  position:absolute;
  opacity:0.5;
  width:350px;
  height:70px;
  background:white;
  top:0;
  left:0;
  z-index:1;
  transform:rotate(45deg);
  transition:transform 0.5s;
}

.clipped-border:hover:before{
  transform: translate(-100px,400%) rotate(45deg);
  transition:transform 0.5s;
}
.clipped-border:nth-child(1){
  top:0;
  left:0;
}
.clipped-border:nth-child(2){
  top:196px;
  left:118px;
}

.clipped-border:nth-child(3){
  top:0;
  left:235px;
}

.clipped-border:nth-child(4){
  top:196px;
  left:353px;
}

.clipped-border:nth-child(5){
  top:0;
  left:470px;
}


#clipped {
-webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);

}

.clipped-border:hover{
  transform:scale(1.2);
  transition:transform 0.2s;
  z-index:10;
}


@media screen and (max-width:500px){
  .clipped-border{
    width:100px;
    height:100px;
  }
  
  .clipped-border:nth-child(2){
    top:0;
    left:100px;
  }
  
  .clipped-border:nth-child(3){
    left:200px;
  }
  
  .clipped-border:nth-child(4){
    top:82px;
    left:50px;
  }
  
  .clipped-border:nth-child(5){
    top:82px;
    left:150px;
  }
}
       /* ---- end  gallery section ----  */


       /* ---- news section ----  */

    .news-section{
        background: var(--clr-primary-1);
        background: linear-gradient(rgba(2,0,36,1) 0%, rgba(46,26,71,1) 35%, rgba(252,252,253,1) 100%, rgba(59,75,194,1) 100%);
    }
    .news-section .container{
        position: relative;
    }
    .news-section h2{
        color: var(--clr-primary-4);
        position: absolute;
        top: 5%;
        left: 10%;
        
    }
    .news-section .heading{
        color: var(--clr-primary-4);
        position: absolute;
        top: 10%;
        left: 35%;
        border-left: 3px solid var(--clr-secondary-1);
        background-color: var(--clr-primary-2);
        padding: 5px 10px;
    }

    /* .imageselect .imagebox {
        position: relative;
    } */

    .imageselect .imagebox figure {
        position: relative;
        overflow: hidden;
    }

    
    .imageselect .imagebox img {
        width: 100%;
        height: 400px;
    }



    .imageselect .imagebox figcaption {
        background: rgba(45, 62, 82, 0.9);
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 10px;
        padding: 20px;
        -webkit-transform: translateY(140%);
        -moz-transform: translateY(140%);
        -ms-transform: translateY(140%);
        -o-transform: translateY(140%);
        transform: translateY(140%);
        -moz-transition: -moz-transform 0.5s ease;
        -o-transition: -o-transform 0.5s ease;
        -webkit-transition: -webkit-transform 0.5s ease;
        -ms-transition: -ms-transform 0.5s ease;
        transition: transform 0.5s ease
    }

    .imageselect .imagebox .description {
        margin-bottom: 0;
        color: var(--clr-primary-4);
    }

    .imageselect .imagebox:hover figcaption {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -o-transform: translateY(0);
        transform: translateY(0)
    }

    .news-section h3 span{
        color: var(--clr-primary-1);
        text-transform: capitalize;
        border-bottom: 3px solid var(--clr-secondary-1);
    }

    .news-section-clip{
        clip-path: polygon(50% 5%, 100% 0, 100% 100%, 0 100%, 0 0);
    }

       /* ---- end  news section ----  */



`

export default Home
