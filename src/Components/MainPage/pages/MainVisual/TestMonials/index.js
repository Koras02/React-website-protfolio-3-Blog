import React from 'react';
import { TestMonialsWrapper, TestMonialsWrapperCol, TestMonialsWrapperContainer, TestMonialsWrapperImage, TestMonialsWrapperRow, TestMonialsWrapperRow2, TestMonialsWrapperSlickList, TestMonialsWrapperSlickListTrack, TestMonialsWrapperText, TestMonialsWrapperTextWhite } from './style/indexStyle';
import './style/Testmonial.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export function TestMonials() {
    const settings = {
        // dots: true,
        infinete: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <TestMonialsWrapper>
            <TestMonialsWrapperImage>
                <TestMonialsWrapperContainer>
                    <TestMonialsWrapperRow>
                        <TestMonialsWrapperCol>
                            <TestMonialsWrapperText>
                                testimonials
                            </TestMonialsWrapperText>
                            <TestMonialsWrapperTextWhite>
                                clients feedback
                            </TestMonialsWrapperTextWhite>
                        </TestMonialsWrapperCol>
                    </TestMonialsWrapperRow>
                    <TestMonialsWrapperRow2>
                        <TestMonialsWrapperSlickList >
                            <TestMonialsWrapperSlickListTrack>
                                <Slider {...settings} className="Slider">
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                </Slider>
                            </TestMonialsWrapperSlickListTrack>
                        </TestMonialsWrapperSlickList>
                    </TestMonialsWrapperRow2>
                </TestMonialsWrapperContainer>
            </TestMonialsWrapperImage>
        </TestMonialsWrapper>
    );
}


export default TestMonials;