import React from 'react';
import {
    SectionFooterWrapper,
    SectionFooterWrapperCol,
    SectionFooterWrapperCol1,
    SectionFooterWrapperCol1Widget,
    SectionFooterWrapperCol2,
    SectionFooterWrapperCol2List,
    SectionFooterWrapperCol2TextWhite,
    SectionFooterWrapperCol2Ul,
    SectionFooterWrapperCol2Wiget,
    SectionFooterWrapperCol3,
    SectionFooterWrapperCol3Widget,
    SectionFooterWrapperColLink,
    SectionFooterWrapperColtestList,
    SectionFooterWrapperColtestUl,
    SectionFooterWrapperColtestWhite,
    SectionFooterWrapperColWidgetH1,
    SectionFooterWrapperColWidgetUl,
    SectionFooterWrapperColWidgetUlList,
    SectionFooterWrapperColWidgetUlListLink,
    SectionFooterWrapperContainer,
    SectionFooterWrapperFooter,
    SectionFooterWrapperFooterH4,
    SectionFooterWrapperFooterUl,
    SectionFooterWrapperFooterUlList,
    SectionFooterWrapperFooterUlListLink,
    SectionFooterWrapperImage,
    SectionFooterWrapperRow,
    SectionFooterWrapperCol2ListLink
} from './style/SectionFooterStyle';
import Image from "./Image/footer-bg.png"
import { Fa500Px, FaFacebook, FaTwitch, FaTwitter } from 'react-icons/fa';


export function SectionFooter() {
    return (
        <SectionFooterWrapper id="footer">
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
                    {/* 2번째 */}
                    <SectionFooterWrapperCol3>
                        <SectionFooterWrapperCol3Widget>
                            <SectionFooterWrapperColtestWhite>
                                Navigation
                            </SectionFooterWrapperColtestWhite>
                            <SectionFooterWrapperColtestUl>
                                <SectionFooterWrapperColtestList>
                                    <SectionFooterWrapperColLink to="/">
                                        About Us
                                 </SectionFooterWrapperColLink>
                                    <SectionFooterWrapperColLink to="/">
                                        Services
                                 </SectionFooterWrapperColLink>
                                    <SectionFooterWrapperColLink to="/">
                                        Projects
                                 </SectionFooterWrapperColLink>
                                    <SectionFooterWrapperColLink to="/">
                                        Company News
                                 </SectionFooterWrapperColLink>
                                    <SectionFooterWrapperColLink to="/">
                                        contact Us
                                 </SectionFooterWrapperColLink>
                                </SectionFooterWrapperColtestList>
                            </SectionFooterWrapperColtestUl>
                        </SectionFooterWrapperCol3Widget>
                    </SectionFooterWrapperCol3>
                    {/* 3번 */}
                    <SectionFooterWrapperCol1>
                        <SectionFooterWrapperCol1Widget>
                            <SectionFooterWrapperColWidgetH1>
                                Services
                            </SectionFooterWrapperColWidgetH1>
                            <SectionFooterWrapperColWidgetUl>
                                <SectionFooterWrapperColWidgetUlList>
                                    <SectionFooterWrapperColWidgetUlListLink to="/">
                                        Brand Design
                                    </SectionFooterWrapperColWidgetUlListLink>
                                </SectionFooterWrapperColWidgetUlList>
                                <SectionFooterWrapperColWidgetUlList>
                                    <SectionFooterWrapperColWidgetUlListLink to="/">
                                        seo & marketing
                                    </SectionFooterWrapperColWidgetUlListLink>
                                </SectionFooterWrapperColWidgetUlList>
                                <SectionFooterWrapperColWidgetUlList>                            <SectionFooterWrapperColWidgetUlListLink to="/">
                                    creative design
                                    </SectionFooterWrapperColWidgetUlListLink>
                                </SectionFooterWrapperColWidgetUlList>
                                <SectionFooterWrapperColWidgetUlList>
                                    <SectionFooterWrapperColWidgetUlListLink to="/">
                                        photograpy
                                    </SectionFooterWrapperColWidgetUlListLink>
                                </SectionFooterWrapperColWidgetUlList>
                                <SectionFooterWrapperColWidgetUlList>
                                    <SectionFooterWrapperColWidgetUlListLink to="/">
                                        print design
                                    </SectionFooterWrapperColWidgetUlListLink>
                                </SectionFooterWrapperColWidgetUlList>
                            </SectionFooterWrapperColWidgetUl>
                        </SectionFooterWrapperCol1Widget>
                    </SectionFooterWrapperCol1>
                    {/* 4번 */}
                    <SectionFooterWrapperCol2>
                        <SectionFooterWrapperCol2Wiget>
                            <SectionFooterWrapperCol2TextWhite>
                                Contact Info
                           </SectionFooterWrapperCol2TextWhite>
                            <SectionFooterWrapperCol2Ul>
                                <SectionFooterWrapperCol2List>
                                    9567 Turner Trace Apt. 466 North Willie, BC C3G8A4
                                </SectionFooterWrapperCol2List>
                                <SectionFooterWrapperCol2List>
                                    <SectionFooterWrapperCol2ListLink to="/">
                                        +21 123 456 5523
                                  </SectionFooterWrapperCol2ListLink>
                                </SectionFooterWrapperCol2List>
                                <SectionFooterWrapperCol2ListLink to="#">
                                    wjdgh0727@gmail.com
                                </SectionFooterWrapperCol2ListLink>
                            </SectionFooterWrapperCol2Ul>
                        </SectionFooterWrapperCol2Wiget>
                    </SectionFooterWrapperCol2>
                </SectionFooterWrapperRow>
            </SectionFooterWrapperContainer>
        </SectionFooterWrapper>
    );
}


export default SectionFooter;