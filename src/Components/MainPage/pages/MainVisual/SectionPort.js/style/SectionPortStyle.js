import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'


export const SectionPortWrapper = styled.div`
   width:100%;
   height:1756px;
   padding:200px 0px 200px 0px;
   background:#fff;
   display:block;
   box-sizing:border-box;
`

export const SectionPortContainer = styled.div`
    width:100%;
    max-width:1110px;
    height:1436px;
    padding: 0px 15px 0px 15px;
    margin:auto;
    // border:1px solid #000;
    box-sizing:border-box;

    @media screen and (min-width: 1200px) {
        max-width: 1140px;
    }

`


export const SectionPortRow = styled.div`
   display:flex;
   flex-wrap:wrap;
   margin: 0px -15px 0px -15px;
   max-width:1140px;
   height:216px;
//    border:1px solid red;
`


export const SectionPortRowCol = styled.div`
   max-width:920px;
   height:216px;
   padding:0px 15px 0px 15px;

   @media screen and (min-wdith: 992px) {
       flex: 0 0 83.333333%;
       max-width: 83.333333%;
       position:relative;
       width:100%;
       padding:0px 15px 0px 15px;
   }
`

export const SectionPortRowSpan = styled.div`
   color: #f57479;
   font-size:20px;
   font-weight: bold;
   line-height: 34px;
   font-family: "Poppins", sans-serif;
   text-transform: uppercase;
   margin-bottom: 8px;
`

export const SectionPortRowTitle = styled.div`
    margin-bottom: 24px;
    margin-top: 8px;
    font-size:40px;
    line-height:50px;
    
`

export const SectionPortiems = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items:center;
   justify-content:space-between;
   margin-bottom: 3rem;
`

export const SectionPortGroup = styled.div`
   width:653.672px;
   height:48px;
//    border:1px solid red;
   position: relative;
   display:inline-flex;
   vertical-align: middle;


   &:after, &:before {
       box-sizigng:border-box;
   }
`

export const SectionPortGroupLabel = styled.label`
     border:0;
     padding: 12px 0px 12px 35px;

     &:active {
         color:#f57479;
     }

`


export const SectionPortGroupInput = styled.input`
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
  width:13px;
  height:13px;
  box-sizing:border-box;
  overflow:visible;

`

export const SectionPortLink = styled(LinkR)`
  text-decoration:none;
  padding:12px 35px 12px 35px;
  border-bolor: #f57479;
  color: #f57479;
  border-radius: 3px;
  font-size:16px;
  display:inline-block;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.3s ease;
  border: 1px solid;
  position:relative;
//   z-index: 1;
  cursor: pointer;
`