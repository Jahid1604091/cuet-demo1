import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import cuetlogo from '../images/cuet-img/cuetlogo.png'
import admnsBuilding from '../images/cuet-img/admns-blding.jpg'
import graduate from '../images/cuet-img/a graduate.jpg'
import audi from '../images/cuet-img/audi.jpg'
import vcBuilding from '../images/cuet-img/vc building.jpg'
import TopNav from './TopNav'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const [dropdown, setDropdown] = React.useState(false)
    const [megaDropdown, setMegaDropdown] = React.useState(false)

    const toggler = (e) => {
        e.preventDefault()
        setMenuOpen(!menuOpen)
    }

    const handleDropdown = (e) => {
        e.preventDefault()
        setDropdown(!dropdown)
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
                    <div className="title ">
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
                                            <Link to='/academics-home'><h4><i className="fas fa-home"></i> <span>academics home</span></h4></Link>
                                            <Link to='/employment'><h4><i className="fas fa-university"></i> <span>employment opportunities</span></h4></Link>
                                            <a href="#" className="img-wrapper">
                                                <img src={admnsBuilding} className='img-fluid' alt="Random Image" />
                                            </a>
                                            <Link to='/admissions'><h4 className='text-center'>apply for admissions <i className="fas fa-caret-right"></i></h4></Link>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>colleges</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="">College of Engineering, Computing and Applied Sciences</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="">College of Science</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="">Graduate School</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>academic resources</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/registrar/academic-calendars/">Academic Calendar</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/registrar/">Registrar</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/undergraduate-studies/">Division of Undergraduate Studies</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://career.sites.clemson.edu/">Center for Career and Professional Development</a></li>

                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://libraries.clemson.edu/">Libraries</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>outside the classroom</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/centers-institutes/watt/creative-inquiry/">Creative Inquiry and Undergraduate Research</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://career.sites.clemson.edu/cooperative_education/">Cooperative Education</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://career.sites.clemson.edu/internship_programs/UPIC_program/">University Professional Internship and Co-op Program (UPIC)</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/studyabroad/">Study Abroad</a></li>
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
                                            <Link to='/admission-home'><h4><i className="fas fa-home"></i> <span>admissions home</span></h4></Link>
                                            <Link to='/tour-schedule'><h4><i className="fas fa-calendar-alt"></i> <span>schedule a tour</span></h4></Link>
                                            <a href="#" className="img-wrapper">
                                                <img src={audi} alt="Random Image" />
                                            </a>
                                            <Link to='/admissions'><h4 className='text-center'>apply for admissions <i className="fas fa-caret-right"></i></h4></Link>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>apply to cuet</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/admissions/applying-to-clemson/freshman-students.html">First-Year Undergraduate</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/admissions/applying-to-clemson/transfer-students.html">Transfer Undergraduate</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/admissions/applying-to-clemson/international-undergraduate-students.html">International Undergraduate</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/admissions/graduate-students.html">Graduate Students</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>academic opportunities</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/degrees/index.html">Majors</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/degrees/index.html">Graduate Programs</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/online/programs/">Online Graduate Programs</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/academics/student-academic-opportunities/scholar-programs.html">Scholar Programs</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/academics/student-academic-opportunities/paths-to-graduate-school.html">Paths to Graduate School</a></li>

                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>financial aid</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/finance/student-financials/tuition-fees/index.html">Tuition and Fee Calculator</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/financial-aid/types/">Undergraduate Financial Aid</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/graduate/finance-tuition/fellowships.html">Graduate Fellowships and Awards</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/financial-aid/residency/">Residency Requirements</a></li>
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
                                            <Link to='/campus-life'><h4><i className="fas fa-home"></i><span>campus life home</span></h4></Link>
                                            <Link to='/sports-club'><h4><i className="fas fa-running"></i><span>club sports</span></h4></Link>
                                            <a href="#" className="img-wrapper">
                                                <img src={graduate} alt="Random Image" />
                                            </a>
                                            <Link to='/books-center'><h4 className='text-center'>books center for the performing arts <i className="fas fa-caret-right"></i></h4></Link>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>join your cuet family</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/campus-life/finding-your-community.html">Finding Your Community</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://housing.clemson.edu/living-learning/">Living-Learning Communities</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/studentaffairs/veterans/">Student Veterans</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/centers-institutes/gantt/multicultural-programs/">Multicultural Programs</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>service on campus</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://housing.clemson.edu/">Housing &amp; Dining</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/campus-life/campus-recreation/">Campus Recreation</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/campus-life/parking/">Parking and Transportation</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/campus-life/student-health/">Student Health Services</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/campus-life/tigerone/">TigerOne Card Services</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://clemsontigers.com/">Clemson Athletics</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>get involved</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/campus-life/student-orgs/index.html">Clubs and Organizations</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/campus-life/fraternity-sorority-life/">Fraternity and Sorority Life</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/accepted-students/orientation/orientation-ambassadors/index.html">Orientation Ambassadors</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/cbshs/departments/communication/tiger-media/">Tiger Media</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://gsg.people.clemson.edu/">Graduate Student Government</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.mycusg.com/">Undergraduate Student Government</a></li>
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
                                            <Link to='/research-home'><h4><i className="fas fa-home"></i><span>research home</span></h4></Link>
                                            <Link to='/crf'><h4><i className="fas fa-chart-bar"></i><span>cuet research foundation</span></h4></Link>
                                            <a href="#" className="img-wrapper">
                                                <span className="img"><img src={cuetlogo} alt="Random Image" />
                                                </span
                                                ></a>
                                            <Link to='/research-division'><h4 className='text-center'>division of research <i className="fas fa-caret-right"></i></h4></Link>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>research opportunities</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/research/student-research.html">Student Research at CUET</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/research/facilities.html">Research Facilities</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/research/serving-our-state.html">Serving Bangladesh Through Research</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/health-research/">School of Health Research</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>innovation and economic development</h2>
                                            <ul className='mega-links'>

                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/cecas/departments/bioe/cubeinc/">CUET Biomedical Engineering Innovation Campus (CUBEInC)</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/science/research/chg.html">Center for Human Genetics</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/ocpsi/cuicat.html">Innovation Campus and Technology Park</a></li>
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
                                            <Link to='/about-cuet-home'><h4><i className="fas fa-home"></i><span>about cuet</span></h4></Link>
                                            <Link to='/cuet-news'><h4><i className="fas fa-newspaper"></i><span>cuet news</span></h4></Link>
                                            <a href="#" className="img-wrapper">
                                                <img src={vcBuilding} className='img-fluid' alt="Random Image" />
                                            </a>
                                            <Link to='/cuet-at-a-glance'><h4 className='text-center'>cuet at a glance <i className="fas fa-caret-right"></i></h4></Link>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>for birds and animals</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/about/military-heritage.html">Traditions</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/about/military-heritage.html">Birds Heritage</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/admissions/visit/things-to-do-in-clemson.html">Things To Do in CUET</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="/admissions/visit/index.html">Visit CUET</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>campus resources</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/careers/index.php">Employment Opportunities</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://hgic.clemson.edu/">Home and Garden Information Center</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/brand/">Brand Guidelines</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/registrar/academic-calendars/">Academic Calendar</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/training/">Training</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                    <div className="col">
                                        <section>
                                            <h2>campus leadership</h2>
                                            <ul className='mega-links'>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/administration/bot/">Board of Trustees</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/president/">President</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/provost/">Academic Affairs and Provost</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/studentaffairs/">Student Affairs</a></li>
                                                <li class="cu-nav-item"><a class="cu-nav-link" href="https://www.clemson.edu/faculty-staff/faculty-senate/">Faculty Senate</a></li>
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
                                <li><a href="" className='menu-item'> Faculty & Stuffs</a></li>
                                <li><a href="" className='menu-item'> Parents</a></li>
                                <li><a href="" className='menu-item'> alumni</a></li>
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
    /* height: 15vh; */
    /* max-width: 80vw; */
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index:1;
}


.title h1{
    font-family: 'CharuChandan3D', sans-serif !important;
    color: var(--clr-secondary-1);
    font-size: 1.2rem;
    text-align: center;
    font-weight: 800;
}

.title h2{
    color: var(--clr-primary-1);
    font-size: 0.6rem;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
}



/* start hamburger */
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
        height: 3px;
        background: var(--clr-primary-3);
        border-radius: 5px;
        box-shadow:0 2px 5px var(--clr-primary-2);
        transition: all 0.5s ease-in-out;
    }


    .menu-btn_burger::before,
    .menu-btn_burger::after{
        content: '';
        position: absolute;
        width: 40px;
        height: 3px;
        background: var(--clr-primary-3);
        border-radius: 5px;
        box-shadow:0 2px 5px var(--clr-primary-2);
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
        box-shadow:0 2px 5px var(--clr-primary-2);
    }

    .menu-btn.open .menu-btn_burger::before{
        transform: translate(-.5rem,.7rem);
    }

    .menu-btn.open .menu-btn_burger::after{
        transform: translate(-.5rem,-.7rem);
    }

/*--- end hamburger ----*/

.menu-items{
    display: flex;
    align-items: center;
   
}

.menu-items li{
    padding: 0.5rem 1rem;
    transition: background 0.5s ease-in-out;
    border-left: 3px solid var(--clr-primary-3);
}

.menu-items .menu-item{
    white-space: nowrap; 
}


.menu-items li a{
    display: block;
    text-decoration:none;
    color: var(--clr-primary-1);
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 800;
}

.menu-items li a:hover{
    color: var(--clr-secondary-1);
}

/*start mega menu */
.mega-menu{
    align-items: center;
    position: absolute;
    left: 0;
    top: 200px;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    box-shadow:0 2px 5px var(--clr-primary-2);
}

.mega-menu .content{
    background-color: var(--clr-primary-4);
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
    line-height: 1.5rem;
}

.content .col section span{
    border-bottom: 2px solid var(--clr-secondary-1);
}

/* image */
.content .col .img-wrapper{
    display: block;
    position: relative;
    width: 100%;
    height: 20vw;
    overflow: hidden;
    box-shadow:0 5px 0px var(--clr-primary-3);
    margin-bottom:10px;
}

/* .content .col .img{
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: 10%;
    left: 0%;
} */

.content .col img{
    position: absolute;
    left: 17%;
    top: 3%;
    width: 200px;
    height:200px;
    align-items: center;
    transition: transform 0.5s ease-in-out;
}

.content .col .img-wrapper:hover img{
    transform: scale(1.1);
}

.content .col h2{
    display: block;
    color: var(--clr-primary-1);
    line-height: 3rem;
    border-left: 5px solid var(--clr-secondary-1);
    padding: 0 5px;
    font-weight: bolder;
}

.mega-links{
    padding-left: 0;
}

.mega-links li {
  padding: 0.5rem;
  border-left: none;
}

.mega-links li a{
    text-transform: capitalize;
    font-weight: 600;
}
.menu-items li:hover .mega-menu{
    opacity: 1;
    visibility: visible;
    top: 100px;
}

/*end mega menu */


/* dropdown */
.dropdown{
    position: relative;
}

.dropdown-menu-items{
    position: absolute;
    background: var(--clr-primary-4);
    width: 100%;
    top: 80px;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    padding-left: 0;
    
}

.dropdown-menu-items li a{
    white-space: wrap !important;
    text-transform: capitalize  !important;
}

.dropdown:hover .dropdown-menu-items{
    opacity: 1;
    visibility: visible;
    top: 40px;
    right: 0;
}


@media (max-width:767px){
    .title h1{
        display: none;
    }
    .title h2{
        padding: 0.5rem 0.5rem;
        font-size: 10px;
        text-align: center;
        padding: 0 16px;
    }
   .header .logo img{
        height: 60px !important;
        width: 60px !important;
    }
    
    .menu-items li {
        font-size: 0.8rem !important;
        font-weight: 800;
        line-height: 1rem;
    }
    
    .menu-items li a {
        font-size: 0.8rem !important;
        font-weight: 800;
    }
 
}
    
@media (min-width:768px) and (max-width:991px){
 .title h1{
     font-size: 1.8rem !important;
 }
 .title h2{
     font-size: 0.8rem;
 }
 .menu-items li{
     padding: 0.3rem 0.3rem;
 }
 
 .menu-items li a{
     font-size: 0.8rem ;
     font-weight: 600 !important;
 }


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
            height: calc(100vh - 100%);
            /* height: 80vh; */
            width: 100%;
            max-width: 450px;
            top: 100%;
            right: 0;
            display: block;
            padding: 0.5rem;
            line-height: 1.5rem;
            overflow-y: auto;
            transition: all 0.5s ease-out;
            z-index:-1;
            transform: translateX(100vh);
            background: var(--clr-primary-3);
        }

        .title h1{
            font-size: 0.9rem;
        }
        .menu-items.open{
            opacity: 1;
            transform: translateY(0);
        
        }
        .menu-items li{
            margin: 15px 10px;
            border-left:none;
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
        .menu-items .mega-menu{
            position: static;
            opacity: 1;
            top: 4rem;
            visibility: visible;
            /* padding-left: 1rem; */
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

    @media (min-width:992px) and (max-width:1280px){
        .title h1,h2{
            display: none;
        }
    }

`

export default Navbar
