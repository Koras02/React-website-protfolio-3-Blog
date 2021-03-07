import React from 'react';
import { SectionFooterWrapper, SectionFooterWrapperCol, SectionFooterWrapperCol1, SectionFooterWrapperCol1Widget, SectionFooterWrapperCol2, SectionFooterWrapperCol3, SectionFooterWrapperCol3Widget, SectionFooterWrapperContainer, SectionFooterWrapperFooter, SectionFooterWrapperFooterH4, SectionFooterWrapperFooterUl, SectionFooterWrapperFooterUlList, SectionFooterWrapperFooterUlListLink, SectionFooterWrapperImage, SectionFooterWrapperRow } from './style/SectionFooterStyle';
import Image from "./Image/footer-bg.png"
import { Fa500Px, FaFacebook, FaTwitch, FaTwitter } from 'react-icons/fa';


export function SectionFooter() {
    return (
        <SectionFooterWrapper>
            <SectionFooterWrapperImage src={Image}></SectionFooterWrapperImage>
            <SectionFooterWrapperContainer>
                <SectionFooterWrapperRow>
                    <SectionFooterWrapperCol>
                        <SectionFooterWrapperFooter>
                            <SectionFooterWrapperFooterH4>About dizer.</SectionFooterWrapperFooterH4>
                            Lorem ipsum dolor amet consectetur adipielit sed eiusm tempor
                             incididunt ut labore dolore magna aliqua enim ad minim veniam.
                        <SectionFooterWrapperFooterUl>
                                <SectionFooterWrapperFooterUlList>
                                    <SectionFooterWrapperFooterUlListLink>
                                        <Fa500Px />
                                    </SectionFooterWrapperFooterUlListLink>
                                </SectionFooterWrapperFooterUlList>
                                <SectionFooterWrapperFooterUlList>
                                    <SectionFooterWrapperFooterUlListLink>
                                        <FaFacebook />
                                    </SectionFooterWrapperFooterUlListLink>
                                </SectionFooterWrapperFooterUlList>
                                <SectionFooterWrapperFooterUlList>
                                    <SectionFooterWrapperFooterUlListLink>
                                        <FaTwitch />
                                    </SectionFooterWrapperFooterUlListLink>
                                </SectionFooterWrapperFooterUlList>
                                <SectionFooterWrapperFooterUlList>
                                    <SectionFooterWrapperFooterUlListLink>
                                        <FaTwitter />
                                    </SectionFooterWrapperFooterUlListLink>
                                </SectionFooterWrapperFooterUlList>
                            </SectionFooterWrapperFooterUl>
                        </SectionFooterWrapperFooter>
                    </SectionFooterWrapperCol>
                    <SectionFooterWrapperCol3>
                        <SectionFooterWrapperCol3Widget>

                        </SectionFooterWrapperCol3Widget>
                    </SectionFooterWrapperCol3>
                    <SectionFooterWrapperCol1>
                        <SectionFooterWrapperCol1Widget>

                        </SectionFooterWrapperCol1Widget>
                    </SectionFooterWrapperCol1>
                    <SectionFooterWrapperCol2></SectionFooterWrapperCol2>
                </SectionFooterWrapperRow>
            </SectionFooterWrapperContainer>
        </SectionFooterWrapper>
    );
}


export default SectionFooter;