import styled from 'styled-components';

export const SectionCounterWrapper = styled.div`
   width:100%;
   height:88px;
   padding: 80px 0px 65px 0px;
   background: #470FA8;
   border:1px solid #000;
   position:relative;
   display:block;
`;

export const SectionCounterImage = styled.img`
    position:absolute;
    height: 100%;
    width:100%;
    left:0;
    top:0;
    vertical-align: middle;
    border-style:none;
`;

export const SectoinContainer = styled.div`
    width:100%;
    height:88px;
    padding:0px 15px 0px 15px;
   //  border:1px solid #000;
    margin:auto;
    @media screen and (min-width:1200px) [
       max-width:1140px;
    ]
`

export const SectionRow = styled.div`
    max-width:1140px;
    height:88px;
    display:flex;
    flex-wrap:wrpa;
    margin:0px -15px 0px -15px;
    margin:auto;
`;

export const SectionRowCol1 = styled.div`
     position:relative;
     width:100%;
     padding:0px 15px 0px 15px;
   //   border:1px solid #000;
     box-sizing:border-box;
     left:-20px;
     @media screen and (min-width:992px) {
        flex: 0 0 25%;
        max-width: 25%;
     }
      `

export const SectionColCounter = styled.div`
   display:flex;
   max-width:255px;
   height:80px;
   // border:1px solid red;
  @media screen and (min-width:992px) {
     margin-bottom:0px;
  }
`

export const SectionDescription = styled.div`
    width:117.625px;
    height:80px;
`

export const SectionDescriptionH2 = styled.div`
    color:#fff;
    font-size: 42px;
    margin-top:20px;
    line-height: 15px;
    font-weight:bold;
    text-transform: capitalize;
    font-family: "Popins", sans-serif;
`
