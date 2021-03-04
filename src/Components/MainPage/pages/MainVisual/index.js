import React from 'react';
import { BackgroundBg, MainVisualWrapper } from '../../styles/MainPageStyle';
import Header from '../Header';
import MainContainer from '../MainContainer';
import Services from '../Services';


export function MainVisual() {
    return (
        <MainVisualWrapper>
            <BackgroundBg>
                <Header />
                <MainContainer />
            </BackgroundBg>
            <Services />
        </MainVisualWrapper>
    );
}


export default MainVisual;