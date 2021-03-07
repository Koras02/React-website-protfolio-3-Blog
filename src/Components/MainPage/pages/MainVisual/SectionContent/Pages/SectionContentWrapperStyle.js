import styled from 'styled-components';
import Image from '../images/Image2.jpg'
import { Link as LinkR } from 'react-router-dom'

export const SectionContentWrapper = styled.div`
  width:100%;
  height:720px;
  background: url(${Image}) no-repeat;
  background-size:cover;
  display:block;
  padding:120px 0px 120px 0px;
  box-sizing:border-box;
`;

export const SectionContentContainer = styled.div`
width:100%;
height:481px;
padding: 0px 15px 0px 15px;
margin:auto;
// border:1px solid #fff;

@media screen and (min-width: 1200px) {
    max-width:1140px;
}

`;

export const SectionContentRow = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin: 0px -15px 0px -15px;
//   border:1px solid #000;
//   width:1140px;
  height: 481px;
//   background:red;
//   margin:auto;
`

export const SectionContentCol = styled.div`
position:relative;
// width:100%;
height:481px;
max-width:540px;
display:block;
padding:0px 15px 0px 15px;
// border:1px solid #000;
    @media screen and (min-width:992px) {
        flex:0 0 50%;
        max-width: 50%;
    }
`

export const SectionContentColH1 = styled.div`
   margin-bottom:8px;
   color:#000;
   font-size: 20px;
   line-height:34px;
   color:#f57479;
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   text-transform: uppercase;
`

export const SectionContentColH3 = styled.div`
   margin: 8px 48px;
   font-size: 40px;
   line-height:50px;
   font-weight:500;
   text-align:left;
   position:relative;
   left:-25px;
`

export const SectionContentColForm = styled.div`
    box-sizing:border-box;
    display: block;
    margin-top: 0em;
    width:540px;
    height:291px;
    // border:1px solid #000;
    
`

export const SectionContentFormRow = styled.div`
   width:550px;
   height:51px;
//    border:1px solid #000;
   display:flex;
   flex-wrap:wrap;
   margin: 0px -5px 0px -5px;
`


export const SectionContentFormRowCol = styled.div`
width:265px;
height:51px;
// border:1px solid red;
// padding:0px 5px 0px 5px;
display:inline-flex;

@media screen and (min-width:992px) {
    flex:0 0 48%;
    max-width:50%;
}
`

export const SectionContentFormColGroup = styled.div`
margin-bottom:1rem;
box-sizing:border-box;
display:block;
margin-left:20px;
`

export const SectionContentFormColGroupInput = styled.input`
background-color: transparent;
border-radius: 0px;
border: 0px;
border-bottom: 1px solid #e6c5c5;
padding:15px 0px 15px 15px;
color: #000;
font-size:14px;
display: block;
width:100%;
height: cacl(1.5em + .75rem + 2px);
font-weight:400;
line-height:1.5;
outline:none;
margin:0;
`;

export const SectionContentFormRow1 = styled.div`
    width:500px;
    height:189px;
    // border:1px solid #000;
    display:flex;
    flex-wrap: wrap;
    margin:0px -15px 0px -15px;
    margin:auto;
`

export const SectionContentFormRow1Col = styled.div`
//  border:1px solid blue;
 width:540px;
 height: 189px;
//  padding:0px 15px 0px 15px;
 
@media screen and (min-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
}
`

export const SectionContentTextArea = styled.input`
  width:460px;
  height:84px;
  padding: 15px 0px 15px 15px;
  margin-bottom: 24px;
  background-color: transparent;
  border-radius: 0px;
  border:none;
  border-bottom:1px solid #e6c5c5;
  outline:none;
//   border:1px solid #000;
  font-size:14px;
`

export const SectionContentFormRow1ColLink = styled(LinkR)`
    width:91.281px;
    height: 24px;
    // border:1px solid #000;
    background: #f57479;
    border-color:#f57479;
    color:#fff;
    text-decoration:none;
    padding: 12px 35px;
    border-radius: 3px;
    font-size:16px;
    display:inline-block;
    transition: all .3s ease;
    position:relative;
    // z-index:1;
    cursor:pointer;
    vertical-align:middle;

    &:hover {
        background:#d89afc;
        color:#152252;
    }

`