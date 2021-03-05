import styled from 'styled-components';


export const PictureRowWrapper = styled.div`
    position:relative;
    overflow:hidden;
    height:1122px;
    transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    display: flex;
    flex-wrap:wrap;
    margin:0px -15px 0px -10px;

    box-sizing:border-box;
    // border:1px solid red;

`

export const PitureRowCol = styled.div`
   @media screen and (min-width: 992px) {
       flex: 0 0 33.333333%;
       max-width: 30.333333%;
   }

   max-width:250px;
   height:350px;
   padding:0px 15px 15px 15px;
//    position:absolute;
   top:0px;
   left:0px;
   visibility: visible;
//    border:1px solid red;
   will-change: transform;
   opacity: 1;
   transition-duration: 250ms;
   transition-timing-function: cubic-bezier (0.4 ,0, 0.2, 1);
   transition-property: transform, opacity;
   transform: translate(0px, 0px) scale(1);

`

export const PictureRowColBox = styled.div`
   position:relative;
   box-sizing:border-box;
   display:block;
`

export const PitureRowColImage = styled.div`
   position:relative;
 

`

export const PitureRowColImages = styled.img`
   width:100%;
   height:350px;
   display:block;
   
`