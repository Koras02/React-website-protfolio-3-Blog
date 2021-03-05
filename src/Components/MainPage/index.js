import React from 'react';

import MainVisual from './pages/MainVisual';
import { MainPageWrapper } from './styles/MainPageStyle'
// import { MainServicesWarpper } from './styles/MainServicesStyle';


export function MainPage() {
    return (
        <MainPageWrapper>
            <MainVisual />
        </MainPageWrapper>

    );
}


export default MainPage;