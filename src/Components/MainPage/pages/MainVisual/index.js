import React from 'react';
import { BackgroundBg, MainVisualWrapper } from '../../styles/MainPageStyle';
import Header from '../Header';
import MainContainer from '../MainContainer';
import Services from '../Services';
import SectionPort from './SectionPort.js';
import TestMonials from './TestMonials';


export function MainVisual() {
    return (
        <MainVisualWrapper>
            <BackgroundBg>
                <Header />
                <MainContainer />
            </BackgroundBg>
            <Services />
            <SectionPort />
            <TestMonials />
        </MainVisualWrapper>
    );
}


export default MainVisual;