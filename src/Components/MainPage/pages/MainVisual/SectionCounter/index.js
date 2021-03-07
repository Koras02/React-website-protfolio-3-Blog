import React from 'react';
import { SectionColCounter, SectionCounterImage, SectionCounterWrapper, SectionDescription, SectionDescriptionH2, SectionRow, SectionRowCol1, SectoinContainer } from './style/SectionCounterStyle';
import Image1 from './images/cta-bg.png'
import { AiFillHeart, AiFillProject, AiOutlineInbox } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa'
import './style/Section.css';

function SectionCounter() {
    return (
        <SectionCounterWrapper>
            <SectionCounterImage src={Image1}>

            </SectionCounterImage>
            <SectoinContainer>
                <SectionRow>
                    <SectionRowCol1>
                        <SectionColCounter>
                            <AiOutlineInbox className="icon" />
                            <SectionDescription>
                                <SectionDescriptionH2>
                                    <span className="counter">370</span>
                                </SectionDescriptionH2>
                                <p className="text-capitalize mb-0">work complated</p>
                            </SectionDescription>
                        </SectionColCounter>
                    </SectionRowCol1>
                    <SectionRowCol1>
                        <SectionColCounter>
                            <AiFillProject className="icon" />
                            <SectionDescription>
                                <SectionDescriptionH2>
                                    <span className="counter">450</span>
                                </SectionDescriptionH2>
                                <p className="text-capitalize mb-0">New Projects</p>
                            </SectionDescription>
                        </SectionColCounter>
                    </SectionRowCol1>
                    <SectionRowCol1>
                        <SectionColCounter>
                            <AiFillHeart className="icon" />
                            <SectionDescription>
                                <SectionDescriptionH2>
                                    <span className="counter">50<span className="K">K</span>+</span>
                                </SectionDescriptionH2>
                                <p className="text-capitalize mb-0">Happy Customers</p>
                            </SectionDescription>
                        </SectionColCounter>
                    </SectionRowCol1>
                    <SectionRowCol1>
                        <SectionColCounter>
                            <FaAward className="icon" />
                            <SectionDescription>
                                <SectionDescriptionH2>
                                    <span className="counter">50+</span>
                                </SectionDescriptionH2>
                                <p className="text-capitalize mb-0">Awards Win</p>
                            </SectionDescription>
                        </SectionColCounter>
                    </SectionRowCol1>
                </SectionRow>
            </SectoinContainer>
        </SectionCounterWrapper>
    );
}


export default SectionCounter;