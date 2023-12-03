import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link'
import styled from "styled-components";
import {Accordion, Col, Container, Row} from "react-bootstrap";
// import {hover} from '/styles/globalStyleVars';
import {useRouter} from "next/router";

import PopupSizeGuide from "./products/PopupSizeGuide";
import PopupSizeCalculator from "./products/PopupSizeCalculator";
import PopupPCalender from "./PopupPCalender";
import PopupWeightGain from "./PopupWeightGain";

const MyComponent = () => {

    const router = useRouter()
    const mobileMenuRaf = useRef()
    const menuRef = useRef()
    const hamburgerRef = useRef();
    const hamburgerCloseRef = useRef();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show_s, setShow_s] = useState(false);
    const handleClose_s = () => setShow_s(false);
    const handleShow_s = () => setShow_s(true);
    const [showCal, setShowCal] = useState(false);
    const handleCloseCal = () => setShowCal(false);
    const handleShowCal = () => setShowCal(true);


    const [show_w, setShow_w] = useState(false);
    const handleCloseWGT = () => setShow_w(false);
    const handleShowWGT= () => setShow_w(true);


    //---- on scroll menu fixed action
    useEffect(() => {
        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;
        let howMuchScroll = 50;

        window.addEventListener("scroll", () => {
            let currentScroll = window.pageYOffset;

            if (currentScroll <= howMuchScroll) {
                body.classList.remove(scrollUp);
                return;
            }
            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains(scrollDown)
            ) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
        });


        if (document.body.classList.contains("scroll-down")) {
            document.body.classList.remove("scroll-down");
        }

    }, []);




    // mobile menu
    const remove_all_mobile = (e) => {
        var menuOpen = document.querySelectorAll(".mobile-menu__items");
        var hamburger = document.querySelectorAll(".hamburger");
        var menu =  document.querySelectorAll(".main_child");
        var menuSub =  document.querySelectorAll(".main-child-sub ")
        var menuSubSub =  document.querySelectorAll(".main-child-sub-sub");
        hamburger.forEach((i) => {
            i.classList.remove("menu-open");
            gsap.to(menuRef.current, {
                duration: ".2",
                x: '100%'
            });
            gsap.to(menuRef.current, {
                x: '100%'
            });
        });
        menuOpen.forEach((i) => {
            i.classList.remove("menu-open");

        });

        menu.forEach((i) => {
            i.classList.remove("submenu-open-mb");

        });
        menuSub.forEach((i) => {
            i.classList.remove("submenu-open-next");

        });
        menuSubSub.forEach((i) => {
            i.classList.remove("submenu-open-next-next");
            i.classList.remove("submenu-open-next");
            i.classList.remove("submenu-open-mb");

        });
    }


    // Mobile menu start
    // for mobile submenu
    const [showSubmenu, setShowSubmenu] = useState(null);
    const [showSubmenuSub, setShowSubmenuSub] = useState(null);
    const [showSubmenuSubSub, setShowSubmenuSubSub] = useState(null);
    const handleSubmenuClick = (id, event) => {
        event.stopPropagation();
        // setShowSubmenu(id === showSubmenu ? null : id);
        setShowSubmenu( id === showSubmenu ? null : id);

        let overlay = document.querySelector("body");
        //
        if(id === showSubmenu ? null : id){
            overlay.classList.add('submenu-open-mb');
        }else{
            overlay.classList.remove('submenu-open-mb');
        }
        setShowSubmenuSub( null);
        setShowSubmenuSubSub( null);


    };

    const handleSubmenuSubClick = (id, event) => {
        event.stopPropagation();
        // setShowSubmenu(id === showSubmenu ? null : id);
        setShowSubmenuSub( id === showSubmenuSub ? null : id);
        setShowSubmenuSubSub( null);

    };
    const handleSubmenuSubSubClick = (id, event) => {
        event.stopPropagation();
        // setShowSubmenu(id === showSubmenu ? null : id);
        setShowSubmenuSubSub( id === showSubmenuSubSub ? null : id);
    };


    useEffect(() => {

        // menu click on mobile
        if (window.innerWidth < 992) {
            // let getDropdownChildMobile = document.querySelectorAll(".main_child");
            // getDropdownChildMobile.forEach((i) => {
            //     i.addEventListener("click", (r) => {
            //         if (r.target.parentElement.classList.contains('submenu-open-mb')) {
            //             r.target.parentElement.classList.remove("submenu-open-mb");
            //             r.target?.parentElement?.nextElementSibling?.classList?.remove(('submenu-open-mb'))
            //
            //
            //         } else {
            //             r.target.parentElement.classList.toggle("submenu-open-mb");
            //             // r.target?.parentElement?.nextElementSibling?.classList?.toggle(('submenu-open-mb'))
            //             console.log(parent,'menu')
            //             document.querySelector('.submenu-open-mb .submenu');
            //             document.querySelector('.main_title').addEventListener('click', (ne) => {
            //                 console.log(ne, 'ok')
            //
            //                 let parent = ne.target.parentElement;
            //                 parent.parentElement.classList.remove("submenu-open-mb");
            //             })
            //         }
            //     });
            // });


            // let nextStepChild = document.querySelectorAll(".main-child-sub");
            // nextStepChild.forEach((i) => {
            //     i.addEventListener("click", (r) => {
            //
            //         if (r.target.parentElement.classList.contains('submenu-open-next')){
            //             r.target.parentElement.classList.remove("submenu-open-next");
            //
            //         }else{
            //
            //
            //             r.target.parentElement.classList.toggle("submenu-open-next");
            //
            //             document.querySelector('.submenu-open-next').addEventListener('click', (ne) => {
            //                 let parent = ne.target.parentElement;
            //                 parent.parentElement.classList.remove("submenu-open-next");
            //             })
            //
            //         }
            //     });
            // });
            //


            let nextStepChildChild = document.querySelectorAll(".main-child-sub-sub");
            nextStepChildChild.forEach((i) => {
                i.addEventListener("click", (r) => {
                    // r.target.parentElement.classList.toggle("sub-menu-open");

                    if (r.target.parentElement.classList.contains('submenu-open-next-next')){
                        r.target.parentElement.classList.remove("submenu-open-next-next");


                    }else{


                        r.target.parentElement.classList.toggle("submenu-open-next-next");
                        // r.target.parentElement.nextElementSibling.classList.remove('submenu-open')

                        document.querySelector('.submenu-open-next-next').addEventListener('click', (ne) => {
                            let parent = ne.target.parentElement;
                            console.log(ne, 'ok')
                            parent.parentElement.classList.remove("submenu-open-next-next");
                        })

                    }
                });
            });

            hamburgerRef.current.addEventListener("click", () => {
                document.querySelector(".hamburger").classList.add("menu-open");
                document.querySelector(".Mobile-menu-wrap").classList.add("menu-open");
                gsap.to(menuRef.current, {
                    x: '0',
                });
                gsap.to(menuRef.current, {
                    duration: ".3",
                });
            });
            hamburgerCloseRef.current.addEventListener("click", () => {
                document.querySelector(".hamburger").classList.remove("menu-open");
                document.querySelector(".Mobile-menu-wrap").classList.remove("menu-open");
                gsap.to(menuRef.current, {
                    x: '0',
                    duration: ".2",
                });
                gsap.to(menuRef.current, {
                    x: '100%',
                });
                remove_all_mobile();

            });

        }

    }, []);
    // Mobile menu end


    // in home page menu & logo click off
    useEffect(() => {
        if (router.pathname == '/') {
            document.body.classList.add('on-home')
            document.body.classList.remove('scroll-down')
            remove_all_mobile();

        } else {
            document.body.classList.remove('scroll-down')
            remove_all_mobile();

            document.body.classList.remove('on-home')
        }

    }, [router.pathname])


    // remove menu after click and change the route
    useEffect(() => {
        let getAllA = document.querySelectorAll('.desktop-menu__wrp .main-wrp  li  a');
        let getAllSub = document.querySelectorAll('.desktop-menu__wrp .main-wrp > li.has-child > .submenu')
        getAllA.forEach(e => {
            e.addEventListener('click', () => {
                getAllSub.forEach(i => {
                    i.style = `
                        display:none
                    `
                })

                setTimeout(() => {
                    getAllSub.forEach(i => {
                        i.removeAttribute('style')
                    })
                }, 600)
            })
        })


    }, [])


    return (
        <>
            <StyledMenu className={'desktop-menu'}>


                <PopupSizeGuide show={show} handleClose={handleClose}/>
                <PopupSizeCalculator show={show_s} handleClose={handleClose_s}/>
                <PopupPCalender show={showCal} handleClose={handleCloseCal}/>
                <PopupWeightGain show={show_w} handleClose={handleCloseWGT}/>

                {/*<PopupGrowth show={show_G} handleClose={handleCloseW()}/>*/}
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className="desktop-menu-logo">
                                <Link href="/"><a >
                                    <img src="/images/static/logo.svg" alt=""/>

                                </a></Link>
                            </div>
                        </Col>
                        <Col className={'desktop-menu__wrp'} md={{span:10}}>
                            <ul className={'main-wrp'}>
                                <li><Link href={'/'}><a>Home
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.018" height="30" viewBox="0 0 29.018 30">
                                        <path id="Path_8285" data-name="Path 8285" d="M11.219,29.416c4.554.946,10.109,1.1,13.687-2.324,4.912-4.7,4.957-13.135,2.571-19.047-1.011-2.5-3.1-5.656-6.233-4.407C17.688,5.055,8.114-7.986,1.766,8.169A28.152,28.152,0,0,0,.505,12.184,15.049,15.049,0,0,0,1.6,22.983a12.9,12.9,0,0,0,6.527,5.5,17.745,17.745,0,0,0,3.092.936" transform="translate(0.001 0)" fill="#18aeae" opacity="0.5"/>
                                    </svg>

                                </a></Link></li>
                                <li><Link href={'/about'}><a>About
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.018" height="30" viewBox="0 0 29.018 30">
                                        <path id="Path_8285" data-name="Path 8285" d="M11.219,29.416c4.554.946,10.109,1.1,13.687-2.324,4.912-4.7,4.957-13.135,2.571-19.047-1.011-2.5-3.1-5.656-6.233-4.407C17.688,5.055,8.114-7.986,1.766,8.169A28.152,28.152,0,0,0,.505,12.184,15.049,15.049,0,0,0,1.6,22.983a12.9,12.9,0,0,0,6.527,5.5,17.745,17.745,0,0,0,3.092.936" transform="translate(0.001 0)" fill="#18aeae" opacity="0.5"/>
                                    </svg>

                                </a></Link></li>
                                <li className={'has-child'}><Link href={'javascript:void(0)'}><a>Products
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.018" height="30" viewBox="0 0 29.018 30">
                                        <path id="Path_8285" data-name="Path 8285" d="M11.219,29.416c4.554.946,10.109,1.1,13.687-2.324,4.912-4.7,4.957-13.135,2.571-19.047-1.011-2.5-3.1-5.656-6.233-4.407C17.688,5.055,8.114-7.986,1.766,8.169A28.152,28.152,0,0,0,.505,12.184,15.049,15.049,0,0,0,1.6,22.983a12.9,12.9,0,0,0,6.527,5.5,17.745,17.745,0,0,0,3.092.936" transform="translate(0.001 0)" fill="#18aeae" opacity="0.5"/>
                                    </svg>

                                </a></Link>
                                    <ul className="submenu">
                                        <li><Link href={'/products'}><a >Our Products</a></Link></li>
                                        <li show={show} onClick={handleShow} ><Link href={'javascript:void(0)'}><a>Diaper Size Guide</a></Link></li>
                                        <li show={show_s} onClick={handleShow_s}><Link href={'javascript:void(0)'}><a>Diaper Size Calculator</a></Link></li>
                                    </ul>
                                </li>
                                <li className={'has-child'}><Link href={'javascript:void(0)'}><a>Pregnancy
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.018" height="30" viewBox="0 0 29.018 30">
                                        <path id="Path_8285" data-name="Path 8285" d="M11.219,29.416c4.554.946,10.109,1.1,13.687-2.324,4.912-4.7,4.957-13.135,2.571-19.047-1.011-2.5-3.1-5.656-6.233-4.407C17.688,5.055,8.114-7.986,1.766,8.169A28.152,28.152,0,0,0,.505,12.184,15.049,15.049,0,0,0,1.6,22.983a12.9,12.9,0,0,0,6.527,5.5,17.745,17.745,0,0,0,3.092.936" transform="translate(0.001 0)" fill="#18aeae" opacity="0.5"/>
                                    </svg>

                                </a></Link>
                                    <ul className="submenu">
                                        <li><Link href={'/pregnency'}><a>Pregnancy Corner</a></Link></li>
                                        <li className={'has-child'}><Link href={'/'}><a>Pregnancy Tools
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828" viewBox="0 0 7.828 12.828">
                                                <g id="Group_16892" data-name="Group 16892" transform="translate(-39.086 -355.086)">
                                                    <line id="Line_3874" data-name="Line 3874" x2="5" y2="5" transform="translate(40.5 356.5)" fill="none" stroke="#32355d" stroke-linecap="round" stroke-width="2"/>
                                                    <line id="Line_3875" data-name="Line 3875" y1="5" x2="5" transform="translate(40.5 361.5)" fill="none" stroke="#32355d" stroke-linecap="round" stroke-width="2"/>
                                                </g>
                                            </svg>



                                        </a></Link>

                                            <ul className="submenu">
                                                <li><Link href={'/pregnency-tools-child-birth'}><a >Childbirth Education Classes</a></Link></li>
                                                {/*<li><Link href={'/pregnency-tools-hospital-checklist'}><a>Hospital Bag Checklist</a></Link></li>*/}
                                                <li show={show_w} onClick={handleShowWGT}><Link href={'javascript:void(0)'}><a>Weight Gain Calculator</a></Link></li>
                                                <li show={showCal} onClick={handleShowCal} ><Link href={'javascript:void(0)'}><a >Due Date Calculator </a></Link></li>
                                                <li  ><Link href={'/pregnancy-tools-calendar'}><a>Pregnancy Calendar</a></Link></li>
                                                <li><Link href={'/pregnancy-tools-high-risk'}><a>High Risk Pregnancy</a></Link></li>
                                                <li><Link href={'/guides-and-printable'}><a>Guides and Printable</a></Link></li>

                                            </ul>

                                        </li>
                                        <li><Link href={'/pregnency/list'}><a href="">Pregnency Articles</a></Link></li>
                                    </ul>
                                </li>
                                <li className={'has-child'}><Link href={'/'}><a>Parenting
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.018" height="30" viewBox="0 0 29.018 30">
                                        <path id="Path_8285" data-name="Path 8285" d="M11.219,29.416c4.554.946,10.109,1.1,13.687-2.324,4.912-4.7,4.957-13.135,2.571-19.047-1.011-2.5-3.1-5.656-6.233-4.407C17.688,5.055,8.114-7.986,1.766,8.169A28.152,28.152,0,0,0,.505,12.184,15.049,15.049,0,0,0,1.6,22.983a12.9,12.9,0,0,0,6.527,5.5,17.745,17.745,0,0,0,3.092.936" transform="translate(0.001 0)" fill="#18aeae" opacity="0.5"/>
                                    </svg>

                                </a></Link>
                                    <ul className="submenu">
                                        <li><Link href={'/parenting'}><a href="">Parenting Corner</a></Link></li>
                                        <li className={'has-child'}><Link href={'javscript:void(0)'}><a>Parenting Tools
                                            <svg xmlns="http://www.w3.org/2000/svg" width="7.828" height="12.828" viewBox="0 0 7.828 12.828">
                                                <g id="Group_16892" data-name="Group 16892" transform="translate(-39.086 -355.086)">
                                                    <line id="Line_3874" data-name="Line 3874" x2="5" y2="5" transform="translate(40.5 356.5)" fill="none" stroke="#32355d" stroke-linecap="round" stroke-width="2"/>
                                                    <line id="Line_3875" data-name="Line 3875" y1="5" x2="5" transform="translate(40.5 361.5)" fill="none" stroke="#32355d" stroke-linecap="round" stroke-width="2"/>
                                                </g>
                                            </svg>



                                        </a></Link>

                                            <ul className="submenu">
                                                <li><Link href={'/parenting-tools-baby'}><a >Baby Development Milestone</a></Link></li>
                                                <li><Link href={'/'}><a>Baby Growth Calculator</a></Link></li>
                                                <li><Link href={'/parenting-tools-sleep-traning'}><a >Sleep Training</a></Link></li>
                                                <li><Link href={'/parenting-tools-babies-under-spectrum'}><a>Babies Under Spectrum</a></Link></li>

                                            </ul>

                                        </li>
                                        <li><Link href={'/parenting/list'}><a href="">Parenting Articles</a></Link></li>
                                    </ul>
                                </li>
                                <li><Link href={'/contact'}><a>Contact
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.018" height="30" viewBox="0 0 29.018 30">
                                        <path id="Path_8285" data-name="Path 8285" d="M11.219,29.416c4.554.946,10.109,1.1,13.687-2.324,4.912-4.7,4.957-13.135,2.571-19.047-1.011-2.5-3.1-5.656-6.233-4.407C17.688,5.055,8.114-7.986,1.766,8.169A28.152,28.152,0,0,0,.505,12.184,15.049,15.049,0,0,0,1.6,22.983a12.9,12.9,0,0,0,6.527,5.5,17.745,17.745,0,0,0,3.092.936" transform="translate(0.001 0)" fill="#18aeae" opacity="0.5"/>
                                    </svg>

                                </a></Link></li>


                                <li><Link href={'/shop'}><a>
                                    <span>Find Shops</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.018" height="30" viewBox="0 0 29.018 30">
                                        <path id="Path_8285" data-name="Path 8285" d="M11.219,29.416c4.554.946,10.109,1.1,13.687-2.324,4.912-4.7,4.957-13.135,2.571-19.047-1.011-2.5-3.1-5.656-6.233-4.407C17.688,5.055,8.114-7.986,1.766,8.169A28.152,28.152,0,0,0,.505,12.184,15.049,15.049,0,0,0,1.6,22.983a12.9,12.9,0,0,0,6.527,5.5,17.745,17.745,0,0,0,3.092.936" transform="translate(0.001 0)" fill="#18aeae" opacity="0.5"/>
                                    </svg>

                                </a></Link></li>
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </StyledMenu>


            <StyledMobileMenu className="Mobile-menu-wrap menu-bar">
                <Container>
                    <Row className="mobile-menu" ref={mobileMenuRaf}>
                        <Col className="logo forNormal">

                            <div className="logo-wrp">
                                <Link href={"/"}>
                                    <a>
                                        <img src="/images/static/logo.svg" alt=""/>

                                    </a>
                                </Link>
                            </div>
                        </Col>



                        <Col className="hamburger">
              <span ref={hamburgerRef}>

      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <circle id="Ellipse_637" data-name="Ellipse 637" cx="20" cy="20" r="20" fill="#18aeae"/>
  <g id="Group_17095" data-name="Group 17095" transform="translate(-314.5 -11)">
    <line id="Line_12367" data-name="Line 12367" x2="15" transform="translate(327 36)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
    <line id="Line_12366" data-name="Line 12366" x2="15" transform="translate(327 31)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
    <line id="Line_12368" data-name="Line 12368" x2="15" transform="translate(327 26)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
  </g>
</svg>



              </span>

                            <span ref={hamburgerCloseRef}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <circle id="Ellipse_637" data-name="Ellipse 637" cx="20" cy="20" r="20" fill="#18aeae"/>
  <g id="Group_17396" data-name="Group 17396" transform="translate(-320 -15)">
    <line id="Line_12367" data-name="Line 12367" x2="15" transform="translate(334.696 40.303) rotate(-45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
    <line id="Line_12366" data-name="Line 12366" x2="15" transform="translate(334.696 29.696) rotate(45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
  </g>
</svg>

              </span>

                        </Col>

                        <div className="mobile-menu__items" ref={menuRef}>

                            <ul className="mobile-menu__items__ul">


                                <div className="shop-now">
                                    <Link  href="/shop">
                                        <a>Find Shops</a>
                                    </Link>
                                </div>

                                <Accordion defaultActiveKey="">
                                    <li className={'main_child'}>
                                        <Link href={"/"}>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className={'main_child'}>
                                        <Link href={"/about"}>
                                            <a>About
                                            </a>
                                        </Link>
                                    </li>


                                    <li onClick={(event) => handleSubmenuClick(1,event)} className={`main_child ${showSubmenu === 1 ? 'submenu-open-mb': ''}`}>
                                        <Link href={"javascript:void(0)"}>
                                            <a>Products<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(12.5 7.5) rotate(90)" fill="#fff"/>
                                            </svg></a>
                                        </Link>
                                        <ul className={'submenu'}>
                                            <div className="main_title">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                    <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(7.5 12.5) rotate(-90)" fill="#fff"/>
                                                </svg>   Products
                                            </div>
                                            <li className={''}>
                                                <Link href={'/products'}><a>Our Products </a></Link>

                                            </li>
                                            <li className={``}>
                                                <Link href={'/'}><a>Diaper Size Guide </a></Link>

                                            </li>
                                            <li className={``}>
                                                <Link href={'/'}><a>Diaper Size Calculator</a></Link>

                                            </li>

                                        </ul>
                                    </li>

                                    <li onClick={(event) => handleSubmenuClick(2,event)} className={`main_child ${showSubmenu === 2 ? 'submenu-open-mb': ''}`}>
                                        <Link href={"javascript:void(0)"}>
                                            <a>Pregnancy<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(12.5 7.5) rotate(90)" fill="#fff"/>
                                            </svg></a>
                                        </Link>
                                        <ul className={'submenu'}>
                                            <div className="main_title">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                    <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(7.5 12.5) rotate(-90)" fill="#fff"/>
                                                </svg>Pregnancy
                                            </div>
                                            <li className={''}>
                                                <Link href={'/pregnency'}><a>Pregnancy  Corner</a></Link>

                                            </li>
                                            <li onClick={(event) => handleSubmenuSubClick(1,event)} className={`main-child-sub ${showSubmenuSub == 1 ? 'submenu-open-next' : null}`}>
                                                <Link href={'javascript:void(0)'}><a>Pregnancy Tools <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                    <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(12.5 7.5) rotate(90)" fill="#fff"/>
                                                </svg></a></Link>

                                                <ul className="mega_sub">
                                                    <div className="main_title">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                            <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(7.5 12.5) rotate(-90)" fill="#fff"/>
                                                        </svg>  Pregnancy Tools
                                                    </div>
                                                    <li><Link href={'/pregnency-tools-child-birth'}><a>Childbirth Education Classes</a></Link></li>
                                                    {/*<li><Link href={'/pregnency-tools-hospital-checklist'}><a >Hospital Bag Checklist</a></Link></li>*/}
                                                    <li show={show_w} onClick={handleShowWGT}><Link href={'javascript:void(0)'}><a>Weight Gain Calculator</a></Link></li>
                                                    <li show={showCal} onClick={handleShowCal} ><Link href={'javascript:void(0)'}><a >Due Date Calculator </a></Link></li>
                                                    <li  ><Link href={'/pregnancy-tools-calendar'}><a>Pregnancy Calendar</a></Link></li>
                                                    <li><Link href={'/pregnancy-tools-high-risk'}><a>High Risk Pregnancy</a></Link></li>
                                                    <li><Link href={'/guides-and-printable'}><a >Guides and Printable</a></Link></li>


                                                </ul>
                                            </li>

                                            <li className={``}>
                                                <Link href={'/pregnency/list'}><a> Parenting Articles</a></Link>

                                            </li>


                                        </ul>
                                    </li>


                                    <li onClick={(event) => handleSubmenuClick(3,event)} className={`main_child ${showSubmenu === 3 ? 'submenu-open-mb': ''}`}>
                                        <Link href={"javascript:void(0)"}>
                                            <a>Parenting<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(12.5 7.5) rotate(90)" fill="#fff"/>
                                            </svg></a>
                                        </Link>
                                        <ul className={'submenu'}>
                                            <div className="main_title">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                    <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(7.5 12.5) rotate(-90)" fill="#fff"/>
                                                </svg>Parenting
                                            </div>
                                            <li className={''}>
                                                <Link href={'/products'}><a>Parenting Corner</a></Link>

                                            </li>
                                            <li onClick={(event) => handleSubmenuSubClick(2,event)} className={`main-child-sub ${showSubmenuSub == 2 ? 'submenu-open-next' : ''}`}>
                                                <Link href={'javascript:void(0)'}><a> Parenting Tools<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                    <circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"/>
                                                    <path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(12.5 7.5) rotate(90)" fill="#fff"/>
                                                </svg>
                                                </a></Link>

                                                <ul className="mega_sub">
                                                    <div className="main_title">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle id="Ellipse_638" data-name="Ellipse 638" cx="10" cy="10" r="10" fill="#18aeae"></circle><path id="Polygon_2" data-name="Polygon 2" d="M2.5,0,5,4H0Z" transform="translate(7.5 12.5) rotate(-90)" fill="#fff"></path></svg>Parenting Tools
                                                    </div>
                                                    <li><Link href={'/parenting-tools-baby'}><a >Baby Development Milestone</a></Link></li>
                                                    <li><Link href={'/'}><a >Baby Growth Calculator</a></Link></li>
                                                    <li><Link href={'/parenting-tools-sleep-traning'}><a>Sleep Training</a></Link></li>
                                                    <li><Link href={'/parenting-tools-babies-under-spectrum'}><a>Babies Under Spectrum</a></Link></li>

                                                </ul>
                                            </li>

                                            <li className={``}>
                                                <Link href={'/parenting/list'}><a> Parenting Articles</a></Link>

                                            </li>


                                        </ul>
                                    </li>


                                    <li>
                                        <Link href={"/contact"}>Contact</Link>
                                    </li>

                                </Accordion>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </StyledMobileMenu>
        </>

    );
};

const StyledMenu = styled.section`
  height: 90px;
  width: 100%;
  background-color: #FFFFFF;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  transition: 0.7s all ease;
  .container {
    height: 100%;

    .row {
      height: 100%;
    }
  }

  .desktop-menu-logo-sticky{
    display: none;
    height: 100%;
    align-items: center;
    transition: 0.7s all ease;

    svg{
      height: 0px;
      transition: 0.7s all ease;

    }
    img{
      height: 0px;
      transition: 0.7s all ease;

    }
  }
  .desktop-menu-logo {
    display: flex;
    align-items: center;
    height: 100%;
    a {
      display: block;

      svg {
        transition: 0.7s all ease;
        height: 60px;
        .st0{fill:#FFFFFF;}
        .st1{fill:#EC1C24;}
        .st2{fill:#2E3191;}
      }
      img {

        transition: 0.7s all ease;
        height: 60px;
        display: block;
        width: 100%;
      }
    }
  }

  .desktop-menu__wrp {
    display: flex;
    height: 100%;
    justify-content: flex-end;

    .main-wrp {
      display: flex;
      justify-content: flex-end;
      height: 100%;

      > li {
        height: 100%;
        display: flex;

        a {
          font-family: "Baloo Chettan 2";
          padding: 0 15px;
          display: flex;
          align-items: center;
          font-size: 20px;
          font-weight: bold;
          line-height: 24px;
          position: relative;
          color: #32355D;

          svg {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            z-index: -1;
            opacity: 0;
            transform: scale(0.8);
            transition: 0.7s all ease;
          }

          &:hover {
            color: #32355D !important;

            svg {
              opacity: 1;
              transform: scale(1);

            }
          }
        }

        &:last-child {
          background: #ff6f96;
          transition: 0.7s all ease;
          margin-left: 15px;

          a {
            position: relative;
            span{
              color: white !important;

            }
            &:before {
              bottom: 0;
              content: "";
              display: block;
              left: auto;
              position: absolute;
              right: 0;
              top: 0;
              -webkit-transition: left 0.25s ease-in-out, right 0.25s ease-in-out, width 0.25s ease-in-out;
              transition: left 0.25s ease-in-out, right 0.25s ease-in-out, width 0.25s ease-in-out;
              width: 0;
              z-index: 0;
              background-color: ${hover};

            }

            span {
              position: relative;
              z-index: 1;
              color: #32355D;
              transition: 0.7s all ease;
            }

            &:hover {
              span {
                color: white !important;
              }

              &:before {
                left: 0;
                right: auto;
                width: 100%;
              }
            }

          }
        }

        &.has-child {
          position: relative;

          > .submenu {
            background: white;
            position: absolute;
            top: 90px;
            border-radius: 10px;
            padding: 30px;
            min-width: 260px;
            transform: translateY(15px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.7s ease;
            box-shadow: 0px 10px 10px rgb(0,0,0,0.05);
            li {
              a {
                font-family: 'Noto Sans';
                font-weight: bold;
                font-size: 16px;
                line-height: 24px;
                color: #32355D;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(50, 53, 93, 0.3);
                padding-left:0;
                padding-right: 0;
                justify-content: space-between;
                svg{
                  position: relative !important;
                  left: unset !important;
                  right: unset !important;
                  opacity: 1 !important;
                  margin: 0 !important;
                  z-index: 1 !important;
                  line{
                    transition: 0.7s all ease;

                  }
                }
                &:hover{
                  color: ${hover} !important;
                  svg{
                    line{
                      stroke: ${hover} !important;

                    }
                  }
                }
                
              
              }
              &:last-child{
                a{
                  border-bottom: none !important;
                }
              }
              margin-bottom: 10px;
              position: relative;
              &:last-child{
                margin-bottom: 0;
              }
              &:hover{
                >.submenu{
                  transform: translateX(0px);
                  opacity: 1;
                  visibility: visible;
                }
              }
              >.submenu{
                position: absolute;
                background: white;
                left: calc(100% + 30px);
                min-width: 260px;
                padding: 30px;
                top: -10px;
                border-radius: 10px;
                transform: translateX(-30px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.7s ease;
                box-shadow: 0px 10px 10px rgb(0,0,0,0.05);

              }
            }
            
          }


          &:hover{
            > .submenu{
              transform: translateY(0px);
              opacity: 1;
              visibility: visible;

            }
          }
        }
        &:nth-of-type(5){
          >.submenu{
            li{
              >.submenu{
                right: calc(100% + 30px);
                left: unset !important;
              }
            }
          }
        }
      }
    }
  }

  
  
  
  //responsive

  @media(max-width: 1095px) and (min-width: 993px){
    .desktop-menu__wrp .main-wrp > li a{
      font-size: 16px;
    }
  }
  @media(max-width: 992px){
    display: none;
  }

`;

// mobile menu
const StyledMobileMenu = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 99999;
  display: flex;
  align-items: center;
  transition: background .4s cubic-bezier(0.4, 0, 0, 1);
  overflow: visible !important;
  background: #FFFFFF;

  .forClose {
    display: none !important;

    a {
      img {
        height: 40px !important;
      }
    }
  }

  &.menu-open {
    background: rgba(255, 255, 255, 1);
    //.forNormal{
    //  display: none !important;
    //}
    .forClose {
      display: block !important;
    }
  }

  .mobile-menu {
    align-items: center;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;

      .logo-wrp {
        transition: 0.7s all ease;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        a {
          display: block;

          svg {
            margin-top: 10px;
            transition: 0.7s all ease;
            height: 40px;
          }
          img{
            margin-top: 0px;
            transition: 0.7s all ease;
            height: 40px;
          }
        }
      }

      a {
        display: flex;
      }

    }

    .hamburger {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 60px;

      span {
        display: flex;

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          color: #F9F9F9;
          margin: 0 10px 0 0;
        }

        &:nth-of-type(2) {
          display: none !important;
        }
      }

      &.menu-open span {
        &:nth-of-type(1) {
          display: none !important;
        }

        &:nth-of-type(2) {
          display: flex !important;
        }
      }
    }

    &__items {
      display: block;
      position: absolute;
      opacity: 1;
      background-color: #FBF9F3;
      height: 100vh;
      top: 60px;
      left: 0;
      width: 100%;
      z-index: -1;
      padding: 60px 15px 60px 15px;
      overflow: auto;
      transition: opacity .5s cubic-bezier(0.4, 0, 0, 1);
      transform: translateX(100%);
      &:after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        background: #C4C4C4;
        height: 1px;
        //content: "";
        margin: 0 auto;
        width: calc(100% - 30px);
      }

      .shop-now{
        display: flex;
        margin-bottom: 40px;
        width: 100%;
        a{
          font-family: "Baloo Chettan 2";
          border-radius: 25px;
          background: #FF6F96;
          font-size: 20px;
          font-weight: bold;
          line-height: 50px;
          text-align: center;
          width: 100%;
          color: #FFFFFF;
          &:hover{
            color: white !important;
          }
        }
      }
    

      &__top {
        ul {
          li {
            a {
              height: 45px;
              border-radius: 25px;
              background-color: #D80028;
              color: #FFFFFF;
              font-size: 18px;
              font-weight: 400;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              padding: 0 30px;
              text-transform: capitalize;

              margin-bottom: 30px;

              img {
                margin-right: 10px;
              }

              span {
                margin-right: 10px !important;
              }
            }

            &:nth-last-child(1) a {
              margin-bottom: 60px;
              background-color: #4F616B;

              &:hover {
                color: #ffffff !important;
              }
            }

          }
        }
      }

      &__ul {

        li {
          padding-bottom: 25px;
          border-bottom: 1px solid rgba(225, 228, 230, 0.2);
          margin-bottom: 20px;

          &:nth-last-child(1) {
            border-bottom: 0;
          }

          a {
            font-family: "Baloo Chettan 2";
            color: #32355D;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            text-transform: capitalize;
          }
        }

      }

    }

    &.menu-open {

      .mobile-menu__items {
        display: block;
      }

    }


    .main-child-sub {
      a {
        display: flex;
        justify-content: space-between;
      }
    }

    //accordion
    .accordion-item {
      .accordion-header {
        .accordion-button {
          background-color: transparent;
          color: #4F616B;
          font-weight: 500;
          font-size: 20px;
          line-height: 20px;
          text-transform: capitalize;
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          padding: 0;
          box-shadow: none;
          border: none;
          margin-bottom: 20px;
          padding-bottom: 25px;
          border-bottom: 1px solid #E1E4E6;

          p {
            margin: 0;
            font-size: 22px;
            line-height: 28px;
            text-transform: capitalize;
            font-weight: bold;
            padding-right: 30px;
            width: 100%;
          }

          span {
            &:nth-last-child(2) {
              display: none !important;
            }

            &:nth-last-child(1) {
              display: block !important;
            }
          }


          &.collapsed {
            span {
              &:nth-last-child(2) {
                display: block !important;
              }

              &:nth-last-child(1) {
                display: none !important;
              }
            }


          }


          &.collapsed {
            border-bottom: 1px solid #E1E4E6;
          }
        }


      }

      .accordion-body {
        padding-bottom: 25px;
        padding-top: 20px;

        ul {
          li {
            border: none;
            padding-bottom: 0;
            margin-bottom: 0;

            a {
              font-size: 16px;
              line-height: 22px;
              font-weight: 600;
              margin-bottom: 15px;
              display: block;
            }

            &:after {
              display: none;
            }
          }
        }
      }

      &:nth-last-child(1) {
        .accordion-button {
          //border: none !important;
        }
      }

    }

    .main_child {
      border: none;
      padding-bottom: 0;

      a {
        background-color: transparent;
        text-transform: capitalize;
        width: 100%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        padding: 0 0 20px;
        box-shadow: none;
        border: none;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(50, 53, 93, 0.2);
        font-family: "Baloo Chettan 2";
        color: #32355D;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        @media (max-width: 767px) {
          img {
            z-index: -1;
            position: relative;
          }
          svg{
            z-index: -1;
          }
        }

        p {
          margin: 0;
          font-size: 22px;
          line-height: 28px;
          text-transform: capitalize;
          font-weight: bold;
          padding-right: 30px;
          width: 100%;
        }

        span {
          &:nth-last-child(2) {
            display: none !important;
          }

          &:nth-last-child(1) {
            display: block !important;
          }
        }


        &.collapsed {
          span {
            &:nth-last-child(2) {
              display: block !important;
            }

            &:nth-last-child(1) {
              display: none !important;
            }
          }


        }


        &.collapsed {
          border-bottom: 1px solid #E1E4E6;
        }
      }

      &.submenu-open-mb {
        .submenu {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
          z-index: 10;

        }

        .submenu-open-next {
          .mega_sub {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            z-index: 10;

          }

        }

        .submenu-open-next-next {
          .mega_sub_sub {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
          }

        }
      }

      .submenu {
        padding: 0px 15px 30px;
        //padding: 60px 15px 30px;
        position: fixed;
        right: 0;
        top: 60px;
        left: 0;
        bottom: 0;
        background: #FBF9F3;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
        transform: translateX(100%);
        overflow-x: scroll;

        &::-webkit-scrollbar {
          display: none;
        }

        .main_title {
          text-align: left;
          display: flex;
          font-family: "Baloo Chettan 2";
          color: #32355D;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 45px;
          align-items: center;

          svg {
            margin-right: 20px;
            position: relative;
            z-index: -1;
          }
        }

        li {
          border: none;
          padding-bottom: 0;
          margin-bottom: 0;

          a {
            font-family: "Baloo Chettan 2";
            color: #32355D;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 15px;
            //display: block;
          }

          &:after {
            display: none;
          }
        }

        .mega_sub {
          padding: 0px 15px 30px;
          //padding: 60px 15px 30px;
          position: fixed;
          right: 0;
          top: 0px;
          left: 0;
          bottom: 0;
          background: #FBF9F3;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
          transform: translateX(100%);
          height: 185vh;

          &:hover {
            //color: #4F616B;
          }
        }

        .mega_sub_sub {
          padding: 20px 15px 30px;
          position: fixed;
          right: 0;
          top: 0px;
          left: 0;
          bottom: 0;
          background: white;
          z-index: 999;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transition: 0.7s all cubic-bezier(0.4, 0, 0, 1);
          transform: translateX(100%);
        }


      }

      .fotter_menu {
        margin-top: 150px;

        h3 {
          font-size: 32px;
          color: #4F616B;
          line-height: 32px;
        }

        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #4F616B;
        }

        .footer {
          margin-top: 40px;

          a {
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
            color: #4F616B;
            padding: 0;
            display: block;
            margin: 0 0 10px;
            border: none;

            &:last-child {
              margin: 0;
            }
          }
        }
      }

      &:nth-last-child(1) {
        .accordion-button {
          //border: none !important;
        }
      }

    }

  }

  @media (min-width: 993px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .hamburger {
      //top: -10px;
    }
  }


`;

export default MyComponent;