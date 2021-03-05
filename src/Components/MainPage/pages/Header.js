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

export function Header() {
    const [scrollNav, setscrollNav] = useState();

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setscrollNav(true)
        } else (
            setscrollNav(false)
        );
    }
    useEffect(() => {
        changeNav()
        window.addEventListener('scroll', changeNav)
    })


    return (
        <MainHeaderWrapper scrollNav={scrollNav}>
            <MainHeaderContainer>
                <MainHeaderNavbarLink to="/">
                    <Icon>
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
                            <MainHeadeNavbarListLink to="/">
                                About
                            </MainHeadeNavbarListLink>
                            <MainHeaderNavbarUl>

                            </MainHeaderNavbarUl>
                        </MainHeaderNavbarList>
                        <MainHeaderNavbarList>
                            <MainHeadeNavbarListLink to="/">
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