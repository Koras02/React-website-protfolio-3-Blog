import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const SectionFooterWrapper = styled.div`
   width:100%;
   max-height:400px;
   padding:120px 0px;
   background: #1f1f40;
   position:absolute;
`

export const SectionFooterWrapperImage = styled.img`
   position:absolute;
   width:100%;
   height:100%;
   left:0;
   top:0; 
`;

export const SectionFooterWrapperContainer = styled.div`
    width:100%;
    height:270px;
    padding:0px 15px 0px 15px;
    margin:auto;
    // border:1px solid red;
    box-sizing:border-box;
    display:block;
   

    @media screen and (min-width: 1200px) {
        max-width:1140px;
    }
`

export const SectionFooterWrapperRow = styled.div`
    display:flex;
    flex-wrap;wrap;
    margin: 0px -15px 0px -15px;
    // border:1px solid yellow;
    max-width:1140px;
    height:270px;
`

export const SectionFooterWrapperCol = styled.div`
    width:100%;
    height:270px;
    // border:1px solid red;
    padding:0px 15px 0px 15px;
    display:block;

    @media screen and (min-width: 992px) {
        flex: 0 0 25%;
        max-width:25%;
    }
`

export const SectionFooterWrapperCol1 = styled.div`
   position:relative;
   width:54%;
   height:270px;
   max-width:255px;
   // border:1px solid red;
//    background:red;
   padding:0px 15px 0px 15px;
   left:-50px;
@media screen and (min-width: 992px) {
    margin-left: auto;
    margin-bottom: 0;
    flex: 0 0 25%;
    padding:0px 15px 0px 15px;
    // width:60%;
    max-width:160px;
}
`


export const SectionFooterWrapperCol3 = styled.div`
position:relative;
   width:100%;
   // background:red;
   padding:0px 15px 0px 15px;
   //    border:1px solid #000;
   margin-left:95px;
   
   // &:hover {
      //     background:blue;
   // }
   @media screen and (min-width: 992px) {
      flex: 0 0 25%;
      max-width:25%;
      //  border:1px solid #000;
      //  background:red;
   }
   `

export const SectionFooterWrapperFooter = styled.div`
   width:255px;
   height:254px;
   //    border:1px solid #fff;
   color: rgba(255, 255, 255, 0.7);
   display:block;
   //    border:1px solid red;
   //    z-index:1;
   position:absolute;
   //    z-index:1p
   
   
   @media screen and (min-width: 992px) {
      margin-bottom: 0;
   }
   `;

export const SectionFooterWrapperFooterH4 = styled.div`
   color:#fff;
   font-weight:700;
   margin-bottom:1rem;
   font-size:24px;
   line-height:30px;
   box-sizing:border-box;
   // display:block;
   z-index;999;
   &:hover {
      //   background:blue;
   }
   
   `;

export const SectionFooterWrapperFooterUl = styled.ul`
   width:255px;
   height:58px;
   //    border:1px solid #000;
   margin-top:20px;
   margin-bottom:16px;
   list-style:none;
   display:block;
   `

export const SectionFooterWrapperFooterUlList = styled.div`
   width:50px;
   height:50px;
   margin: 0px 0px 8px 8px;
   color:rgba(255,255,255,0.7);
   display:inline-block;
   box-sizing:border-box;
   text-align:-webkit-match-parent;
   list-style:none;
   // background:red;
   position:relative;
   border:1px solid #fff;
   left:-50px;
   border-radius:100%;
   
   &:hover {
      //  background:#f57479;
      border-color: #547479;
      color:#fff;
   }
   &:active {
      background:#f57479;
      border-color: #547479;
      color:#fff;
   }
   `

export const SectionFooterWrapperFooterUlListLink = styled(LinkR)`
   //    z-index:1;
   width:50px;
   height:50px;
   //   border:1px solid #fff;
   //   background:#fff;
   margin:0px 0px 8px 8px;
  position:absolute;
  left:18%;top:30%;
  color:#fff;
  
  &:acitve {
     background:#f57479;
     border-color: #547479;
     color:#fff;
   }
   
   `;

export const SectionFooterWrapperCol3Widget = styled.div`
   width:255px;
   height:236px;
   // border:1px solid #000;
   `

export const SectionFooterWrapperCol1Widget = styled.div`
   width:160px;
   height:236px;
   //   border:1px solid #000;
   //   background:red;
   display:block;
   `

export const SectionFooterWrapperColtestWhite = styled.div`
   color:#fff;
   margin-bottom: 1rem;
   font: bold 24px/30px arial;
   
   `
export const SectionFooterWrapperColtestUl = styled.ul`
   list-style:none;
   margin-top:0;
   margin-bottom:1rem;
   line-height:38px;
   display:block;
   `;

export const SectionFooterWrapperColtestList = styled.div`
   color:rgba(255,255,255.0.7);
   box-sizing: border-box;
   display:list-item;
   text-align: -webkit-match-parent;
   text-align:left;
   postiion:absolute;
   left:-20px;
   `

export const SectionFooterWrapperColLink = styled(LinkR)`
   text-decoration:none;
   color:#fff;
   background:transparent;
   cursor:pointer;
   // text-align:--webkit-match-parent;
   position:relative;
   left:-40px;
   display:flex;
   // text-transform: uppercase;
   
   `

export const SectionFooterWrapperColWidgetH1 = styled.div`
   color:#fff;
   font-size: 24px;
   line-height: 30px;
   font-weight: 500;
   display:block;
   
   @media screen and (min-width: 992px) {
      margin-bottom:1rem;;
   }
   `

export const SectionFooterWrapperColWidgetUl = styled.ul`
   line-height: 38px;
   list-style:none;
   padding-left:0;
   margin-bottom: 1rem;
   display:block;
   width:160px;
   height:190px;
   `

export const SectionFooterWrapperColWidgetUlList = styled.li`
   color: #fff;
   box-sizing:border-box;
   display:list-item;
   text-align: --webkit-match-parent;
   
   `;

export const SectionFooterWrapperColWidgetUlListLink = styled(LinkR)`
   color: rgba(255,255,255, 0.7);
   text-transform: capitalize;
   text-decoration:none;
   `

export const SectionFooterWrapperCol2 = styled.div`
     max-width:160px;
     height: 270px;
     padding:0px 15px 0px 15px;
   //   border:1px solid yellow;
   //   background:yellow;
     @media screen and (min-width: 992px) {
         flex: 0 0 16.666667%;
         max-width: 16.666667%;
     } 
   `;

export const SectionFooterWrapperCol2Wiget = styled.div`
    color: rgba(255,255,255,.0.7);
    display:block;
    box-sizing:borde-box;
    font-size:15px;
    font-weight: 400;
    line-height: 26px;

`
export const SectionFooterWrapperCol2TextWhite = styled.div`
   font-weight: 500;
   color:#fff;
   margin-bottom:1rem;
   font-size: 24px;
   display:block;
   line-height: 30px;
`

export const SectionFooterWrapperCol2Ul = styled.ul`
   line-height:38px;
   list-style:none;
   margin-bottom:1rem;
   display:block;
   position:relative;
   left:-40px;
   width:255px;
   height: 152px;

`

export const SectionFooterWrapperCol2List = styled.li`
   list-style:none;
   color: rgba(255,255,255,0.7);
   display:list-item;
   text-align: --webkit-match-parent;
   line-height: 40px;
   font-size:15px;
   font-weight: 400;
   font-family: "Open Sans", sans-serif;
`;

export const SectionFooterWrapperCol2ListLink = styled(LinkR)`
  text-decoration:none;
  color: rgba(255, 255, 255, 0.7);
  text-transform: capitalize;
  background-color: transparent;
  cursor:pointer;
`