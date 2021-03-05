import React, { useEffect, useState } from 'react';
import {
    MainHeaderContainer,
    MainHeaderNavbarLink,
    MainHeaderWrapper,
    Icon,
    MainHeaderNavbarCol,
    MainHeaderNavbarCenter,
    MainHeaderNavbarList,
    MainHeadeNavbarListLink,
    MainHeaderNavbarUl,
    MainHeaderNavbarli,
    MainHeaderDropdownItem
} from '../styles/HeaderStyle';
import '../styles/Header.css'
import { animateScroll as scroll } from 'react-scroll';

export function Header() {
    const [scrollNav, setscrollNav] = useState(true);

    const changeNav = () => {
        if (window.scrollY > 80) {
            setscrollNav(false)
        } else (
            setscrollNav(true)
        );
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <MainHeaderWrapper scrollNav={scrollNav}>
            <MainHeaderContainer>
                <MainHeaderNavbarLink onClick={toggleHome}>
                    <Icon to="/">
                    </Icon>
                </MainHeaderNavbarLink>
                <MainHeaderNavbarCol>
                    <MainHeaderNavbarCenter>
                        <MainHeaderNavbarList>
                            <MainHeadeNavbarListLink to="/">
                                Home
                            </MainHeadeNavbarListLink>
                            <MainHeaderNavbarUl className="sub-menu dropdown-menu">
                                <MainHeaderNavbarli>
                                    <MainHeaderDropdownItem to="/" className="dropdown-item">Home2</MainHeaderDropdownItem>
                                </MainHeaderNavbarli>
                                <MainHeaderNavbarli>
                                    <MainHeaderDropdownItem to="/" className="dropdown-item">Home3</MainHeaderDropdownItem>
                                </MainHeaderNavbarli>
                                <MainHeaderNavbarli>
                                    <MainHeaderDropdownItem to="/" className="dropdown-item">Home4</MainHeaderDropdownItem>
                                </MainHeaderNavbarli>
                            </MainHeaderNavbarUl>
                        </MainHeaderNavbarList>
                        <MainHeaderNavbarList>
                            <MainHeadeNavbarListLink
                                to="services"
                                smooth={true}
                                offset={100}
                            >
                                About
                            </MainHeadeNavbarListLink>
                            <MainHeaderNavbarUl>

                            </MainHeaderNavbarUl>
                        </MainHeaderNavbarList>
                        <MainHeaderNavbarList>
                            <MainHeadeNavbarListLink
                                to="blog"
                                smooth={true}
                                offset={-200}
                            >
                                blog
                            </MainHeadeNavbarListLink>
                            <MainHeaderNavbarUl>

                            </MainHeaderNavbarUl>
                        </MainHeaderNavbarList>
                        <MainHeaderNavbarList>
                            <MainHeadeNavbarListLink to="/">
                                Pages
                            </MainHeadeNavbarListLink>
                            <MainHeaderNavbarUl>

                            </MainHeaderNavbarUl>
                        </MainHeaderNavbarList>
                        <MainHeaderNavbarList>
                            <MainHeadeNavbarListLink to="/">
                                Contact
                            </MainHeadeNavbarListLink>
                            <MainHeaderNavbarUl>

                            </MainHeaderNavbarUl>
                        </MainHeaderNavbarList>
                    </MainHeaderNavbarCenter>
                </MainHeaderNavbarCol>
            </MainHeaderContainer>
        </MainHeaderWrapper>
    );
}


export default Header;