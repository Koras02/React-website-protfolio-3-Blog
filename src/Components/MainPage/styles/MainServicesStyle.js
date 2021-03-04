import styled from 'styled-components';

export const MainServicesWarpper = styled.div`
   width:100%;
   height:395px;
   display:block;
   border:1px solid red;
   box-sizing:border-box;
`;

export const MainServicesContainer = styled.div`
   width:100%;
   padding: 0px 15px 0px 15px;
   margin:auto;
   @media screen and (min-width:1200px) {
      max-width:1140px;
      height:395px;
   }
`;

export const MainServicesContainerRow = styled.div`
    max-width:1140px;
    height:395px;
    border:1px solid #000;
    display:flex;
    justify-content:center;
    margin:0px -15px 0px -15px;
`

export const MainServicesContainerCol = styled.div`
    max-width:350px;
    height:395px;
    padding:0px 15px 0px 15px;
    border:1px solid #000;
    position:relative;
    left:4%;
   @media screen and (min-width: 992px) {
      flex: 0 0 33.333333%;
      max-width: 33.333333%%;
   }
`


export const MainServicesContainerItem = styled.div`
   padding: 80px 24px 80px 24px;
   max-width:302px;
   height:235px;
   border:1px solid red;
  
`

export const MainServicesContainerItemTitle = styled.div`
     text-align:center;
     margin: 24px 0px 24px 0px;
     font-size:24px;
     line-height: 30px;
     color:#000;
     font-weight:500;
`
