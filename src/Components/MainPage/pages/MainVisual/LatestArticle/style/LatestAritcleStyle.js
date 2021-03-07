import styled from 'styled-components';
import Image from '../Images/Pattern.png';
import { Link as LinkR } from 'react-router-dom';

export const LatestAritcleWrapper = styled.div`
   width:100%;
   height:845.13px;
   padding: 120px 0px;
//    overflow:hidden;
   position:relative;
   display:block;
   box-sizing:border-box;
   background: #f5f5f5;

&:before {
    position:absolute;
    content: "";
    background: url(${Image}) no-repeat;
    width:100%;
    height:100%;
    left:-63px;
    top:60%;
   }
`;

export const LatestAritcleContainer = styled.div`
   max-width:100%;
   height:605.125px;
   padding: 0px 15px 0px 15px;
   margin:auto;
//    border:1px solid #000;
   display:block;
   @media screen and (min-width: 1200px) {
       max-width: 1140px;
   }
`

export const LatestAritcleContainerRow = styled.div`
   max-width:1140px;
   height:140px;
//    display:flex; 
   flex-wrap:wrap;
//    margin: 0px -15px 0px -15px;
//    margin:auto;
//    border: 1px solid red;
`;

export const LatestAritcleContainerCol = styled.div`
   text-align:center;
   max-width:1110px;
   height:140px;
   padding: 0px 15px 0px 15px;
   position:relative;

   
   @media screen and (min-width: 992px) {
       flex: 0 0 100%;
       max-width:100%;
       text-align:center;
   }
`

export const LatestAritcleContainerTextUpper = styled.div`
  text-align:center;
  margin-bottom: 8px;
  color: #f57479;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 34px;
  font-weight: 500;
`
export const LatestAritcleContainerTextH3 = styled.div`
    margin: 8px 0px 48px 0px;
    font:40px/50px arial;
    font-weight:500;
    color: #222530;
`;

export const LatestAirticleContainerRow2 = styled.div`
    max-width:1140px;
    height: 465.13px;
    // justify-content: center!important;
    // margin: 0px -15px 0px -15px;
    flex-wrap:wrap;
    display:flex;
    // border:1px solid #000;
    // margin:auto;
 
`

export const LatestAirticleContainerRow2Col = styled.div`
  @media screen and (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    // border:1px solid red;
    margin-bottom:0;
  }
  position:relative;
  width:100%;
  padding: 0px 15px 0px 15px;
  box-sizing:border-box;
  display:block;
//   border:1px solid red;

  
`

export const LatestAirticleContainerRow2ColImg = styled.div`
   position:relative;
   display:block;
   max-width:450px;
   height: 236.484px;
//    border:1px solid #000;
`

export const LatestAirticleContainerRow2ColImgLink = styled(LinkR)`
  -webkit-transition: all .3s ease;
  transition: .3s ease;
  color:#007bff;
  text-decoration:none;
  background:transparent;
  cursor:pointer;
`

export const ColImage = styled.img`
//    width:100%;
   max-width:350px;
   height:250.484px;
//    border:1px solid #000;
   background-size:cover;
   position:absolute;
   left:15%;
//    max-width:100%;
//    height:auto;

   vertical-align:middle;
//    border-style:none;
`;

export const ColALink = styled(LinkR)`
   margin:auto;
   position:absolute;
   left:20%;
   content: "";
   display:inline-block;
   padding:1px 10px;
//    z-index:1;
//    left: 7%;
   top:9%;
   text-decoration:none;
   background:#fff;
   color:#000;
   text-transform: capitalize;
`

export const LatestAirticleContainerRow2ColImgLinks = styled(LinkR)`
  color:#007bff;
  text-docration:none;
  background-color:transparent;
  box-sizing:border-box;
  cursor:pointer;
  text-decoration:none;
`

export const LatestAirticleContainerRow2ColImgH4 = styled.div`
   color:#222530;
   text-decoration:none;
   margin:24px 8px;
   display:block;
   margin-block-start: 1.33em;
//    margin-block-end: 1.33em;
   font-size:23px;
   line-height:30px;
   text-align:left;
   font-weight:bold;
`;

export const LatestAirticleContainerRow2ColImgPost = styled.div`
    text-transform: uppercase;
    // margin-bottom:1rem;
    width:350px;
    height:26px;
    // border:1px solid #000;
    margin-bottom:16px;
    display:flex;

`

export const LatestAirticleContainerRow2ColImgPostText = styled.div`
   color:#f57479;
   text-transform: uppercase;
   font-size: 15px;
   font-weight: 400;
   line-height: 2px;
   margin-left:10px;
`;

export const LatestAirticleContainerRow2ColImgPostTextDescription = styled.div`
  color: #848485;
  margin-bottom: 16px;
  display:block;
  max-width:350px;
  height:78px;
//   border: 1px solid #000;
  font-size:15px;
  font-weigh:400;
  line-height:26px;
`