import React from 'react';
import {
    SectionPortGroup,
    SectionPortGroupInput,
    SectionPortGroupLabel,
    SectionPortiems,
    SectionPortLink,
    SectionPortRow,
    SectionPortRowCol,
    SectionPortRowSpan,
    SectionPortRowTitle
} from '../style/SectionPortStyle';

export function SectionHeader() {
    return (
        <>
            <SectionPortRow>
                <SectionPortRowCol>
                    <SectionPortRowSpan>my works</SectionPortRowSpan>
                    <SectionPortRowTitle>
                        A collection of some recently completed projects,
                        covering a wide range of design
                <br />
                disciplines
            </SectionPortRowTitle>
                </SectionPortRowCol>
            </SectionPortRow>
            <SectionPortiems>
                <SectionPortGroup>
                    <SectionPortGroupLabel>
                        <SectionPortGroupInput type="radio" name="shurlle-filter" value="all" checked="checked" />
                All Projects
            </SectionPortGroupLabel>
                    <SectionPortGroupLabel>
                        <SectionPortGroupInput type="radio" name="shurlle-filter" value="design" checked="checked" />
                UI/UX Design
            </SectionPortGroupLabel>
                    <SectionPortGroupLabel>
                        <SectionPortGroupInput type="radio" name="shurlle-filter" value="branding" checked="checked" />
                Branding
            </SectionPortGroupLabel>
                    <SectionPortGroupLabel>
                        <SectionPortGroupInput type="radio" name="shurlle-filter" value="development" checked="checked" />
                Web Development
            </SectionPortGroupLabel>
                    <SectionPortGroupLabel>
                        <SectionPortGroupInput type="radio" name="shurlle-filter" value="photography" checked="checked" />
                Photography
            </SectionPortGroupLabel>
                </SectionPortGroup>
                <SectionPortLink to="/">
                    All work
        </SectionPortLink>
            </SectionPortiems>
        </>
    );
}


export default SectionHeader;