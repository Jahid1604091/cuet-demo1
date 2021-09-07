import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import footerBg from '../images/footer-mobile.png'
import './styleFooter.css'

const Footer = () => {
    return (
        <Wrapper>
            <section className='footer'>
                <div className="footer-img">
                    <img src={footerBg} alt="" />
                </div>
                <div className="footer-text d-flex justify-content-between">
                    <div className="text-start px-2">
                        <h5>Policy / Terms of Use</h5>
                        <ul className=''>
                            <li><Link class="link" to="//www.clemson.edu/accessibility.html">Web Accessibility</Link>
                            </li>
                            <li><Link class="link" to="//www.clemson.edu/administration/internalaudit/ethicsline.html">Ethics/Safety
                                Hotline</Link></li>
                            <li><Link class="link" to="//www.clemson.edu/privacypolicy.html">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="text-center px-2">
                        <h5>CUET</h5>
                        <ul class="d-flex social-links justify-content-center">
                            <li><Link class="link" to="http://www.facebook.com/clemsonuniv" target="_blank"><span class="fab fa-facebook fa-2x"></span><span class="sr-only">Facebook</span></Link></li>
                            <li><Link class="link" to="http://instagram.com/clemsonuniversity" target="_blank"><span class="fab fa-instagram fa-2x"></span><span class="sr-only">Instagram</span></Link></li>
                            <li><Link class="link" to="http://twitter.com/clemsonuniv" target="_blank"><span class="fab fa-twitter fa-2x"></span><span class="sr-only">Twitter</span></Link></li>
                            <li><Link class="link" to="http://www.linkedin.com/company/163107?trk=prof-exp-company-name" target="_blank"><span class="fab fa-linkedin fa-2x"></span><span class="sr-only">Linkedin</span></Link></li>
                            <li><Link class="link" to="https://www.youtube.com/channel/UC5yf6cfxrcNjFUVVpppS6yw" target="_blank"><span class="fab fa-youtube fa-2x"></span><span class="sr-only">Youtube</span></Link></li>
                        </ul>
                        <p>Chittagong University of engineering and technology, Chittagong - 4349</p>
                        <p> &copy; {new Date().getFullYear()}</p>
                    </div>

                    <div className="text-end px-2">
                        <h5>Resources</h5>
                        <ul>
                            <li><Link class="link" to="//www.clemson.edu/site-index/">A-Z Index</Link></li>
                            <li><Link class="link" to="//www.clemson.edu/campus-map/">Campus Map</Link></li>
                            <li><Link class="link" to="//www.clemson.edu/cusafety/">CU Safety</Link></li>
                            <li><Link class="link" to="//my.clemson.edu/#/directory" target="_blank">Directory</Link>
                            </li>
                            <li><Link class="link" to="//www.clemson.edu/webcams/">Webcams</Link></li>
                            <li><Link class="link" to="/apply-now">Apply to
                                CUET</Link></li>
                        </ul>
                    </div>

                </div>

            </section>
        </Wrapper>
    )
}

const Wrapper = styled.article`
.footer{
    position: relative;
}
.footer img{
    height: 100%;
    width: 100%;
}

.footer-text{
    position: absolute;
    left: 13%;
    top: 60%;
    color: var(--clr-primary-4);
    text-transform: capitalize;
}

.footer-text h5{
    font-weight: 700;
    font-size: 1.5rem;
    
}

.footer-text .social-links span{
    padding:0 5px;
    
}

.footer-text ul{
   padding-left: 0;
}

.footer-text ul li{
   line-height: 2rem;
}

.footer-text ul li .link,p{
    color: var(--clr-primary-4);
    font-weight: 600;
}
.footer-text ul li .link:hover{
    text-decoration: underline;
}

`


export default Footer
