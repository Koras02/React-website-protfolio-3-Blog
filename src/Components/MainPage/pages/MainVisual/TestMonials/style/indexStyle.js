import styled from 'styled-components';
import Image from './images/images1.jpg';
import Image2 from './images/images2.jpg';
import Image3 from './images/images3.jpg';
import Image4 from './images/images4.jpg';
import Image5 from './images/images5.jpg';

export const TestMonialsWrapper = styled.div`
   width: 100%;
   height: 538px;
   border:1px solid #000;
   background :#1f1f40;
   position:relative;
   display:block;
   box-sizing:border-box;
   padding: 120px 0px 120px 0px;
`

export const TestMonialsWrapperImage = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    background:url(${Image}) no-repeat;
    left:0%;
    verical-align:middle;
    border-style:none;
    box-sizing:border-box;
    padding-top:120px;
    top:0;
 
`

export const TestMonialsWrapperContainer = styled.div`
  width:100%;
  height: 298px;
  padding: 0px 15px 0px 15px;   
//   border:1px solid red;
@media screen and (min-width:1200px) {
       max-width:1140px;
       margin:auto;
   }
`

export const TestMonialsWrapperRow = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin-right:-15px;
    margin-left:-15px;
`

export const TestMonialsWrapperCol = styled.div`
   position:relative;
   width:100%;
   height:116px;
   // border:1px solid blue;
   padding:0px 15px 0px 15px;

`

export const TestMonialsWrapperText = styled.div`
   color:#f57479;
   text-transform:uppercase;
   font-size:20px;
   lune-height: 34px;
   margin-bottom: 8px;
`;

export const TestMonialsWrapperTextWhite = styled.div`
   margin: 8px 0px 24px 0px;
   color:#fff;
   font-size:40px;
   line-height: 50px;
`

export const TestMonialsWrapperRow2 = styled.div`
   flex-wrap: wrap;
   margin: 0px -15px 0px -15px;
   position:relative;
   display:block;
   box-sizing:border-box;
   user-select: none;
   touch-action: pan-y;
   -webkit-tap-highlight-color: transparent;
   // border:1px solid #fff;
//    max-width:1140px;
   height: 182px;
`;

export const ButtonLeft = styled.button`
   width:58px;
   height:68px;
   padding: 1px 6px 1px 6px;
   text-transform: none;
   overflow: visible;

   &:hover {
       color: #f57479;

   }
`


export const ButtonRight = styled.button`
  color:#fff;
`

export const TestMonialsWrapperSlickList = styled.div`
//    max-width:1140px;
   height:182px;
   position:relative;
   display:block;
   overflow:hidden;
   margin:0;
   padding:0;
`

export const TestMonialsWrapperSlickListTrack = styled.div`
 
`


export const TestMonialsWrapperTestImage = styled.div`
`

export const ImageForm = styled.div`
width:80px;
height:80px;
box-sizing:border-box;
// border:1px solid #000;
border-radius:100%;
margin-right:16px;
`;


export const TestImage = styled.div`
  width:80px;
  height:80px;
//   border:1px solid #000;
  border-radius:100%;
  margin-right:16px;
  background:url(${Image}) no-repeat;
  background-size:cover;
`

export const TestImage2 = styled.div`
  width:80px;
  height:80px;
//   border:1px solid #000;
  border-radius:100%;
  margin-right:16px;
  background:url(${Image2}) no-repeat;
  background-size:cover;
`

export const TestImage3 = styled.div`
  width:80px;
  height:80px;
//   border:1px solid #000;
  border-radius:100%;
  margin-right:16px;
  background:url(${Image3}) no-repeat;
  background-size:cover;
`

export const TestImage4 = styled.div`
  width:80px;
  height:80px;
//   border:1px solid #000;
  border-radius:100%;
  margin-right:16px;
  background:url(${Image4}) no-repeat;
  background-size:cover;
`

export const TestImage5 = styled.div`
  width:80px;
  height:80px;
//   border:1px solid #000;
  border-radius:100%;
  margin-right:16px;
  background:url(${Image5}) no-repeat;
  background-size:cover;
`