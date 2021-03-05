import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { FaAsymmetrik } from 'react-icons/fa'

export const MainHeaderWrapper = styled.div`
   width:100%;
   height:100px;
   padidng:8px 16px 8px 16px;
//    border:1px solid #000;
   position:fixed;
   top:0;
   right:0;
   left:0;
   z-index:1030;
   background:none;
   // background: red;
   background:${({ scrollNav }) => scrollNav ? '#203e52' : 'none'};
   transition: ${({ scrollNav }) => scrollNav ? '2s' : '0s'}
`;

export const MainHeaderContainer = styled.div`
   max-width:1100px;
   height:56px;
   padding:0px 15px 0px 15px;
   margin:auto;
//    border:1px solid red;
   position:relative;
   top:20%;

   @media screen and (min-width:1200px) {
       max-width: 1140px;
   }
   
`

export const MainHeaderNavbarLink = styled(LinkR)`
   font-size:40px;
   color:#000;
   font-weight:500;
   font-family: "Poppins", sans-serif;
   padding: 5px 0px 5px 0px;
   margin-right:16px;
`

export const Icon = styled(FaAsymmetrik)`
    max-width:100%;
    height:auto;
    vertical-align: middle;
    border-style:none;
`;

export const MainHeaderNavbarCol = styled.div`
   align-items:center;
   flex-grow: 1;
   width:100%;
   height:56px;
//    border:1px solid #000;
   position:absolute;
   left:20%;
   top:-5%;
   
    

   @media screen and (min-width: 992px) {
       flex-direction: row;
   }
`

export const MainHeaderNavbarCenter = styled.div`
   width:546px;
   height: 56px;
//    border:1px solid #000;
   margin:auto;
`

export const MainHeaderNavbarList = styled.div`
    max-width:108.844px;
    height: 56px;
    position:relative;
    display:inline-block;
`;

export const MainHeadeNavbarListLink = styled(LinkR)`
    text-transform: uppercase;
    color:#000;
    font-size: 16px;
    padding: 8px 35px 8px 20px;
    font-weight:500;
    line-height: 40px;
    display:block;
    white-space: nowrap;
    text-decoration:none;

    &:before {
        box-sizing:border-box;
    }

`

export const MainHeaderNavbarUl = styled.ul`
   box-shadow: 0px 3px 9px 0px rgb(0 0 0 /12%);
   padding:15px;
   border:0;
   border-radius:0;
   background:#fff;
   top: 90%;
   left:0px;
   margin-top: 20px;
   display:block;
   visibility: hidden;
   opacity: 0;
   right: 0px;
   transition: all .45s ease;
   width:220px;
   position:absolute;
`

export const MainHeaderNavbarli = styled.div`
     max-width:220px;
     height:40px;
`

export const MainHeaderDropdownItem = styled(LinkR)`
   
`