import React from 'react';
import SectionHeader from './Pages/Header';
import Picture from './Pages/Picture';
import {
    SectionPortContainer,
    SectionPortWrapper,

} from './style/SectionPortStyle';

export function SectionPort() {
    return (
        <SectionPortWrapper>
            <SectionPortContainer>
                <SectionHeader />
                <Picture />
            </SectionPortContainer>
        </SectionPortWrapper>
    );
}


export default SectionPort;