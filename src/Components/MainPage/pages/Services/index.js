import React from 'react';
import { MainServicesContainer, MainServicesContainerCol, MainServicesContainerItem, MainServicesContainerItemTitle, MainServicesContainerRow, MainServicesWarpper } from '../../styles/MainServicesStyle';
import "./Services.css";
import { IoLogoDesignernews } from 'react-icons/io'


export function Services() {
    return (
        <MainServicesWarpper>
            <MainServicesContainer>
                <MainServicesContainerRow>
                    <MainServicesContainerCol>
                        <MainServicesContainerItem>
                            <IoLogoDesignernews size="80px" style={{ color: 'red', }} className="Logo1" />
                            <MainServicesContainerItemTitle>Brand Design</MainServicesContainerItemTitle>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.
                            </p>
                        </MainServicesContainerItem>
                    </MainServicesContainerCol>
                    <MainServicesContainerCol className="border">
                        <MainServicesContainerItem>
                            <IoLogoDesignernews size="80px" style={{ color: 'red', }} className="Logo1" />
                            <MainServicesContainerItemTitle>Brand Design</MainServicesContainerItemTitle>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.
                            </p>
                        </MainServicesContainerItem>
                    </MainServicesContainerCol>
                    <MainServicesContainerCol>
                        <MainServicesContainerItem>
                            <IoLogoDesignernews size="80px" style={{ color: 'red', }} className="Logo1" />
                            <MainServicesContainerItemTitle>Brand Design</MainServicesContainerItemTitle>
                            <p className="p">
                                Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.
                            </p>
                        </MainServicesContainerItem>
                    </MainServicesContainerCol>
                </MainServicesContainerRow>
            </MainServicesContainer>
        </MainServicesWarpper>
    );
}


export default Services;