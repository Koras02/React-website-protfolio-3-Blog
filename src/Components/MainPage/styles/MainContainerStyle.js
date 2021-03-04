import styled from 'styled-components';
import Image from '../Images/Izone.png'

export const MainContainerWrapper = styled.div`
//    width:100%;
   width:100%;
   height:702px;
   padding: 0px 15px 0px 15px;
//    border:1px solid #000;
   position:absolute;
   top:10%;

//    margin:auto;
`;

export const MainContainerItems = styled.div`
   width:100%;
   height:702px;
   margin:auto;
//    border:1px solid #000;
//    background:red;
   position:absolute;
   left:-4%;
   right:0%;
   top:0%;
   bottom:0%;

`;

export const MainContainerCol1 = styled.div`
   max-width:540px;
   height:702px;
//    border:1px solid red;
   display:inline-flex;
   float:left;
   position:absolute;
   left:50%;
   margin-left:-540px;
   right:50%;
 
   @media screen and (min-width:992px) {
       flex: 0 0 50%;
       max-width:50%;
   }
`;


export const MainContainerContent1 = styled.div`
max-width:540px;
height:402px;
// border:1px solid #000;
padding: 120px 0px 120px 0px;
`

export const MainContainerSpan = styled.div`
color: #ffc429;
font-size: 18px;
line-height: 34px;
font-weight: 500;
text-transform: uppercase;
margin-bottom: 8px;
`;

export const MainContainerH2 = styled.div`
color:#fff;
margin: 8px 0px 8px 0px;
font-size: 60px;
line-height: 70px;

`

export const MainContainer4 = styled.div`
margin: 24px 0px 24px 0px;
padding-right: 55px;
color:rgba(255, 255, 255, 0.7);
font-size: 17px;
line-height:28px;
`

export const MainButton = styled.button`
background: #f57479;
color:#fff;
border-color: #f57479;
width:156.97px;
height:50px;
padding:12px 35px 12px 35px;
outline:none;

`

export const MainContainerCol2 = styled.div`
  width:500px;
  height:673.031px;
//   border:1px solid blue;
  padding:0px 15px 0px 15px;
//   background:red;
  float:right;
  position:absolute;
  left:50%;
  
`;

export const MainContainerCol2Background = styled.div`
  width:540px;
  height:673.031px;
//   border:1px solid red;
  background:url(${Image}) no-repeat;
  background-size:cover;
`