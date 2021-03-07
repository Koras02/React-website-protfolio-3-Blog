import React from 'react';
import { SectionContentCol, SectionContentColForm, SectionContentColH1, SectionContentColH3, SectionContentContainer, SectionContentFormColGroup, SectionContentFormColGroupInput, SectionContentFormRow, SectionContentFormRow1, SectionContentFormRow1Col, SectionContentFormRow1ColLink, SectionContentFormRowCol, SectionContentRow, SectionContentTextArea, SectionContentWrapper } from './Pages/SectionContentWrapperStyle';

export function SectionContent() {
    return (
        <SectionContentWrapper>
            <SectionContentContainer>
                <SectionContentRow>
                    <SectionContentCol>
                        <SectionContentColH1>
                            Content me
                       </SectionContentColH1>
                        <SectionContentColH3>
                            Let's Create
                            <br />
                            Something Big
                        </SectionContentColH3>
                        <SectionContentColForm>
                            <SectionContentFormRow>
                                <SectionContentFormRowCol>
                                    <SectionContentFormColGroup>
                                        <SectionContentFormColGroupInput type="text" placeholder="First Name" required />
                                    </SectionContentFormColGroup>
                                </SectionContentFormRowCol>
                                <SectionContentFormRowCol>
                                    <SectionContentFormColGroup>
                                        <SectionContentFormColGroupInput type="text" placeholder="Last Name" required />
                                    </SectionContentFormColGroup>
                                </SectionContentFormRowCol>
                            </SectionContentFormRow>
                            <SectionContentFormRow>
                                <SectionContentFormRowCol>
                                    <SectionContentFormColGroup>
                                        <SectionContentFormColGroupInput type="text" placeholder="Email Address" required />
                                    </SectionContentFormColGroup>
                                </SectionContentFormRowCol>
                                <SectionContentFormRowCol>
                                    <SectionContentFormColGroup>
                                        <SectionContentFormColGroupInput type="text" placeholder="Phone Number" required />
                                    </SectionContentFormColGroup>
                                </SectionContentFormRowCol>
                            </SectionContentFormRow>
                            <SectionContentFormRow1>
                                <SectionContentFormRow1Col>
                                    <SectionContentTextArea type="text">
                                    </SectionContentTextArea>
                                    <SectionContentFormRow1ColLink to="/">
                                        Get A Quote
                                </SectionContentFormRow1ColLink>
                                </SectionContentFormRow1Col>
                            </SectionContentFormRow1>
                        </SectionContentColForm>
                    </SectionContentCol>
                </SectionContentRow>
            </SectionContentContainer>
        </SectionContentWrapper>
    );
}


export default SectionContent;