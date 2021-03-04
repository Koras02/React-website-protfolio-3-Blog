import React from 'react';
import { MainButton, MainContainer4, MainContainerCol1, MainContainerCol2, MainContainerCol2Background, MainContainerContent1, MainContainerH2, MainContainerItems, MainContainerSpan, MainContainerWrapper } from '../styles/MainContainerStyle';

function MainContainer() {
    return (
        <MainContainerWrapper>
            <MainContainerItems>
                <MainContainerCol1>
                    <MainContainerContent1>
                        <MainContainerSpan>
                            MY NAME is Kim Jung Ho
                      </MainContainerSpan>
                        <MainContainerH2>
                            I Am a creative
                             <br />
                            UI/UX Designer
                            <br />
                            from London.
                        </MainContainerH2>
                        <MainContainer4>
                            Dolor sit amet consectetur elit sed do eiusmod
                            <br />
                            tempor incididunt labore et dolore magna.
                        </MainContainer4>
                        <MainButton to="/">
                            Contact Me
                        </MainButton>
                    </MainContainerContent1>
                </MainContainerCol1>
                <MainContainerCol2>
                    <MainContainerCol2Background></MainContainerCol2Background>
                </MainContainerCol2>
            </MainContainerItems>
        </MainContainerWrapper>
    );
}


export default MainContainer;