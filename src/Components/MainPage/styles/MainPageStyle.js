import styled from 'styled-components'
import Image from './banner-2.png'

export const MainPageWrapper = styled.div`
   width:100%;
   min-height:100vw;

   display:flex;
   background:#470FA8 !important;
   overflow-:hidden;
   padding-top:00px;
   position:absolute;
  
`;



export const BackgroundBg = styled.div`
//   background:red;
  width:100%;
  height:860px;
//   border:1px solid red;
  position:relative;
  box-sizing:border-box;
  background:url(${Image}) no-repeat; 
  background-size:cover;
  bottom:0%;;
  z-index:1;
`;


export const MainVisualWrapper = styled.div`
   width:100%;
   height:1000vh;
   border:1px solid #000;
`;
