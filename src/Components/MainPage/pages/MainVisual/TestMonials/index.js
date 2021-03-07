import React from 'react';
import {
    TestMonialsWrapper,
    TestMonialsWrapperCol,
    TestMonialsWrapperContainer,
    TestMonialsWrapperTestImage,
    TestMonialsWrapperRow,
    TestMonialsWrapperRow2,
    TestMonialsWrapperSlickList,
    TestMonialsWrapperSlickListTrack,
    TestMonialsWrapperText,
    TestMonialsWrapperTextWhite,
    TestImage,
    ImageForm,
    TestImage3,
    TestImage4,
    TestImage5
} from './style/indexStyle';
import './style/Testmonial.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoIosQuote } from 'react-icons/io'
// import Image1 from './style/images/images1.jpg'

export function TestMonials() {
    const settings = {
        dots: true,
        infinete: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,

    }
    return (
        <TestMonialsWrapper id="blog">
            <TestMonialsWrapperTestImage>
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
                        <TestMonialsWrapperSlickList>
                            <TestMonialsWrapperSlickListTrack>
                                <Slider {...settings}
                                    className="Slider"
                                    dots={true}
                                    arrows={true}
                                    slidesToScroll={1}
                                >
                                    {/* 1 */}
                                    <div className="Slider1">
                                        <div className="row testmonial-wrap slick-initialized slick-slider">
                                            <button className="slide-arrow next-arrow slick-arrow">
                                                <FaArrowLeft className="ti-arrow-left" />
                                            </button>
                                            <div className="slick-list draggable">
                                                <div className="slick-track">
                                                    <div className="col-lg-12 slick-slide">
                                                        <div className="test-wrap">
                                                            <IoIosQuote className="text-color ti-quote-left" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p className="text-white">
                                                            Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
                                                            trud exercittion ullam laboris nisi ut
                                                            <br />
                                                            aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.
                                                        </p>
                                                        <div className="test-author d-flex mt-4">
                                                            <ImageForm>
                                                                <TestImage></TestImage>
                                                            </ImageForm>
                                                            <div className="border1">
                                                                <h5 className="mt-0 mt-2 text-blue">Liolane hussy</h5>
                                                                <span className="text-color">Developer</span>
                                                            </div>
                                                            <div>
                                                                <h5 className="mt-0 mt-2 text-white">Liolane hussy</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="slide-arrow prev-arrow slick-arrow">
                                                <FaArrowRight className="ti-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <div className="Slider1">
                                        <div className="row testmonial-wrap slick-initialized slick-slider">
                                            <button className="slide-arrow next-arrow slick-arrow">
                                                <FaArrowLeft className="ti-arrow-left" />
                                            </button>
                                            <div className="slick-list draggable">
                                                <div className="slick-track">
                                                    <div className="col-lg-12 slick-slide">
                                                        <div className="test-wrap">
                                                            <IoIosQuote className="text-color ti-quote-left" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p className="text-white">
                                                            Lorem ipsum dolors amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
                                                            {/* trud exercittion ullam laboris nisi ut */}
                                                            <br />
                                                            aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.
                                                        </p>
                                                        <div className="test-author d-flex mt-4">
                                                            <ImageForm>
                                                                <TestImage></TestImage>
                                                            </ImageForm>
                                                            <div className="border1">
                                                                <h5 className="mt-0 mt-2 text-blue">Liolane hussy</h5>
                                                                <span className="text-color">Developer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="slide-arrow prev-arrow slick-arrow">
                                                <FaArrowRight className="ti-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* 3 */}
                                    <div className="Slider1">
                                        <div className="row testmonial-wrap slick-initialized slick-slider">
                                            <button className="slide-arrow next-arrow slick-arrow">
                                                <FaArrowLeft className="ti-arrow-left" />
                                            </button>
                                            <div className="slick-list draggable">
                                                <div className="slick-track">
                                                    <div className="col-lg-12 slick-slide">
                                                        <div className="test-wrap">
                                                            <IoIosQuote className="text-color ti-quote-left" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p className="text-white">
                                                            Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
                                                            trud exercittion ullam laboris nisi ut
                                                            <br />
                                                            aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.
                                                        </p>
                                                        <div className="test-author d-flex mt-4">
                                                            <ImageForm>
                                                                <TestImage3></TestImage3>
                                                            </ImageForm>
                                                            <div className="border1">
                                                                <h5 className="mt-0 mt-2 text-blue">Liolane hussy</h5>
                                                                <span className="text-color">Developer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="slide-arrow prev-arrow slick-arrow">
                                                <FaArrowRight className="ti-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* 4 */}
                                    <div className="Slider1">
                                        <div className="row testmonial-wrap slick-initialized slick-slider">
                                            <button className="slide-arrow next-arrow slick-arrow">
                                                <FaArrowLeft className="ti-arrow-left" />
                                            </button>
                                            <div className="slick-list draggable">
                                                <div className="slick-track">
                                                    <div className="col-lg-12 slick-slide">
                                                        <div className="test-wrap">
                                                            <IoIosQuote className="text-color ti-quote-left" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p className="text-white">
                                                            Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
                                                            trud exercittion ullam laboris nisi ut
                                                            <br />
                                                            aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.
                                                        </p>
                                                        <div className="test-author d-flex mt-4">
                                                            <ImageForm>
                                                                <TestImage4></TestImage4>
                                                            </ImageForm>
                                                            <div className="border1">
                                                                <h5 className="mt-0 mt-2 text-blue">Liolane hussy</h5>
                                                                <span className="text-color">Developer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="slide-arrow prev-arrow slick-arrow">
                                                <FaArrowRight className="ti-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* 5 */}
                                    <div className="Slider1">
                                        <div className="row testmonial-wrap slick-initialized slick-slider">
                                            <button className="slide-arrow next-arrow slick-arrow">
                                                <FaArrowLeft className="ti-arrow-left" />
                                            </button>
                                            <div className="slick-list draggable">
                                                <div className="slick-track">
                                                    <div className="col-lg-12 slick-slide">
                                                        <div className="test-wrap">
                                                            <IoIosQuote className="text-color ti-quote-left" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-content">
                                                        <p className="text-white">
                                                            Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim veniam.quis nos
                                                            trud exercittion ullam laboris nisi ut
                                                            <br />
                                                            aliquip excepteur. sint occaecat cuida tat nonproident sunt in culpa qui officia deserunt mollit anim est laborum. sed ut perspiciatis.
                                                        </p>
                                                        <div className="test-author d-flex mt-4">
                                                            <ImageForm>
                                                                <TestImage5></TestImage5>
                                                            </ImageForm>
                                                            <div className="border1">
                                                                <h5 className="mt-0 mt-2 text-blue">Liolane hussy</h5>
                                                                <span className="text-color">Developer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="slide-arrow prev-arrow slick-arrow">
                                                <FaArrowRight className="ti-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </Slider>
                            </TestMonialsWrapperSlickListTrack>
                        </TestMonialsWrapperSlickList>
                    </TestMonialsWrapperRow2>
                </TestMonialsWrapperContainer>
            </TestMonialsWrapperTestImage>
        </TestMonialsWrapper >
    );
}


export default TestMonials;