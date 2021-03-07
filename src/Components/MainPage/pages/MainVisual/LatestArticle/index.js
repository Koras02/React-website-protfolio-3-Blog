import React from 'react';
import {
    LatestAritcleContainer,
    LatestAritcleContainerRow,
    LatestAritcleContainerCol,
    LatestAritcleWrapper,
    LatestAritcleContainerTextUpper,
    LatestAritcleContainerTextH3,
    LatestAirticleContainerRow2,
    LatestAirticleContainerRow2Col,
    LatestAirticleContainerRow2ColImg,
    LatestAirticleContainerRow2ColImgLink,
    ColImage,
    ColALink,
    LatestAirticleContainerRow2ColImgLinks,
    LatestAirticleContainerRow2ColImgH4,
    LatestAirticleContainerRow2ColImgPost,
    LatestAirticleContainerRow2ColImgPostText,
    LatestAirticleContainerRow2ColImgPostTextDescription
} from './style/LatestAritcleStyle';
import Image from './Images/4.jpg';

export function LatestAritcle() {
    return (
        <>
            <LatestAritcleWrapper>
                <LatestAritcleContainer>
                    <LatestAritcleContainerRow>
                        <LatestAritcleContainerCol>
                            <LatestAritcleContainerTextUpper>latest article</LatestAritcleContainerTextUpper>
                            <LatestAritcleContainerTextH3>Stay Update with dizer</LatestAritcleContainerTextH3>
                        </LatestAritcleContainerCol>
                    </LatestAritcleContainerRow>
                    <LatestAirticleContainerRow2>
                        {/* 1 */}
                        <LatestAirticleContainerRow2Col>
                            <LatestAirticleContainerRow2ColImg>
                                <LatestAirticleContainerRow2ColImgLink to="/s">
                                    <ColImage src={Image}></ColImage>
                                    <ColALink>
                                        development
                                    </ColALink>
                                </LatestAirticleContainerRow2ColImgLink>
                            </LatestAirticleContainerRow2ColImg>
                            {/* Link */}
                            <LatestAirticleContainerRow2ColImgLinks to="/">
                                <LatestAirticleContainerRow2ColImgH4>
                                    Premium Jekyll And Ghost Themes
                                </LatestAirticleContainerRow2ColImgH4>
                                {/* Post */}
                                <LatestAirticleContainerRow2ColImgPost>
                                    <LatestAirticleContainerRow2ColImgPostText>
                                        by Themefisher
                                      </LatestAirticleContainerRow2ColImgPostText>
                                    <LatestAirticleContainerRow2ColImgPostText>
                                        / 02 January 2020
                                      </LatestAirticleContainerRow2ColImgPostText>
                                </LatestAirticleContainerRow2ColImgPost>
                                {/* Description */}
                                <LatestAirticleContainerRow2ColImgPostTextDescription>
                                    11 time-saving pro tips for web designers working in Webflow11
                                    time-saving pro tips for web designers working in Webflow Consectetuer...
                                </LatestAirticleContainerRow2ColImgPostTextDescription>
                            </LatestAirticleContainerRow2ColImgLinks>
                        </LatestAirticleContainerRow2Col>
                        {/* 2 */}
                        <LatestAirticleContainerRow2Col>
                            <LatestAirticleContainerRow2ColImg>
                                <LatestAirticleContainerRow2ColImgLink to="/s">
                                    <ColImage src={Image}></ColImage>
                                    <ColALink>
                                        development
                                    </ColALink>
                                </LatestAirticleContainerRow2ColImgLink>
                            </LatestAirticleContainerRow2ColImg>
                            {/* Link */}
                            <LatestAirticleContainerRow2ColImgLinks to="/">
                                <LatestAirticleContainerRow2ColImgH4>
                                    Premium Jekyll And Ghost Themes
                                </LatestAirticleContainerRow2ColImgH4>
                                {/* Post */}
                                <LatestAirticleContainerRow2ColImgPost>
                                    <LatestAirticleContainerRow2ColImgPostText>
                                        by Themefisher
                                      </LatestAirticleContainerRow2ColImgPostText>
                                    <LatestAirticleContainerRow2ColImgPostText>
                                        / 02 January 2020
                                      </LatestAirticleContainerRow2ColImgPostText>
                                </LatestAirticleContainerRow2ColImgPost>
                                {/* Description */}
                                <LatestAirticleContainerRow2ColImgPostTextDescription>
                                    11 time-saving pro tips for web designers working in Webflow11
                                    time-saving pro tips for web designers working in Webflow Consectetuer...
                                </LatestAirticleContainerRow2ColImgPostTextDescription>
                            </LatestAirticleContainerRow2ColImgLinks>
                        </LatestAirticleContainerRow2Col>
                        {/* 3 */}
                        <LatestAirticleContainerRow2Col>
                            <LatestAirticleContainerRow2ColImg>
                                <LatestAirticleContainerRow2ColImgLink to="/s">
                                    <ColImage src={Image}></ColImage>
                                    <ColALink>
                                        development
                                    </ColALink>
                                </LatestAirticleContainerRow2ColImgLink>
                            </LatestAirticleContainerRow2ColImg>
                            {/* Link */}
                            <LatestAirticleContainerRow2ColImgLinks to="/">
                                <LatestAirticleContainerRow2ColImgH4>
                                    Premium Jekyll And Ghost Themes
                                </LatestAirticleContainerRow2ColImgH4>
                                {/* Post */}
                                <LatestAirticleContainerRow2ColImgPost>
                                    <LatestAirticleContainerRow2ColImgPostText>
                                        by Themefisher
                                      </LatestAirticleContainerRow2ColImgPostText>
                                    <LatestAirticleContainerRow2ColImgPostText>
                                        / 02 January 2020
                                      </LatestAirticleContainerRow2ColImgPostText>
                                </LatestAirticleContainerRow2ColImgPost>
                                {/* Description */}
                                <LatestAirticleContainerRow2ColImgPostTextDescription>
                                    11 time-saving pro tips for web designers working in Webflow11
                                    time-saving pro tips for web designers working in Webflow Consectetuer...
                                </LatestAirticleContainerRow2ColImgPostTextDescription>
                            </LatestAirticleContainerRow2ColImgLinks>
                        </LatestAirticleContainerRow2Col>
                    </LatestAirticleContainerRow2>
                </LatestAritcleContainer>
            </LatestAritcleWrapper>
        </>
    );
}


export default LatestAritcle;