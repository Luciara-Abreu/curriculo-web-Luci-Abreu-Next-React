import styled from 'styled-components';

const Container = styled.div`
  background: rgb(202, 194, 194);
  height: 100%;
  margin: 0;
  padding: 0;
  `

const ContainerComponent = styled.div `
margin: 0;
padding: 0;
`
  
const Body = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding-bottom: 0px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  `

const LeftSide = styled.div`
  width: 25%;
  height: auto;
  background: #0a6d7a;
  color: aliceblue;
  padding: 5% 2% 10% 2%;
  font-size: 21px;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0% 8% 0% 8%;
    font-size: 21px;
  }
  
`

const RightSide = styled.div`
  width: 75%;
  background: rgb(202, 194, 194);
  color:black;
  padding: 3% 0 0 3%;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0% 8% 0% 8%;
    font-size: 21px;
  }  
`

const Footer = styled.div`
  padding: 0;
  text-align: center;
  height: 30px;
  background-color: #333;
  color: #f2f2f2;

.p-footer{
  padding: 0;
  margin: 0;
} 
`

  const ImageContainer = styled.div`
  width: 100%;  
  margin: 0;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 0 5% 0;

  .p-subtitle{
  padding: 5%;
  height: auto;
  transition: transform 0.3s ease;
  }
  .p-subtitle:hover {
    transform: rotate(-10deg) scale(1.2);
}
  .image-container{
    width: 15%;
    height: 15%;
  }

  .image-container-Right{
    width: 9%;
    height: 9%;
  }
  `


const ImageContainerRight = styled.div`
width: 100%;  
margin: 0;  
display: flex;
justify-content: space-between;
align-items: center;
padding: 2% 0 2% 0;

.p-subtitle{
padding: 5%;
height: auto;
font-size: 25px;
font-weight: bold;
}

.image-container{
  width: 15%;
  height: 15%;
}

.image-container-Right{
  width: 9%;
  height: 9%;
}
`

  const HorizontalLine = styled.div`
      width: 71%; 
      float: right;
      margin: 0;
      height: 1px;
  
      display: block;
      unicode-bidi: isolate;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
      margin-inline-start: auto;
      margin-inline-end: auto;
      overflow: hidden;
      border-style: inset;
      border-width: 1px;
`

/* -----------------------------------------------------------------------*/



export {
  Container,
  ContainerComponent,
  Body,
  LeftSide,
  RightSide,
  Footer,
  ImageContainer, 
  ImageContainerRight, 
  HorizontalLine
}