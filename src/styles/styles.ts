import styled from 'styled-components';

const Container = styled.div`
  background: rgb(202, 194, 194);
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    width: auto;
    height: auto;
    background: blue;
  }
`

const ContainerComponent = styled.div`
width: auto;
height: auto;
margin: 0;
padding: 0;

@media (max-width: 767px) {
  margin-bottom: 10%;
  > p{
      font-size: 17px;
      margin: 0  0 2% 0;
    }
  .section-text-graduation{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    > p{
      font-size: 17px;
      margin: 0  0 2% 0;
    }
  }
}
`

const Body = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding-bottom: 0px;

  @media (max-width: 767px) {
    width: auto;
    height: auto;
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
    width: auto;
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
    width: auto;
    height: auto;
    padding: 0% 8% 0% 8%;
    font-size: 21px;
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

  @media (max-width: 767px) {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 0;

    .p-subtitle{
    padding: 5%;
    height: auto;
    font-size: 15px;
    font-weight: bold;
}
.image-container{
    width: 15%;
    height: 15%;
}

.image-container-Right{
  width: 15%;
  height: 15%;
}
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

@media (max-width: 767px) {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-top: 10%;

    .p-subtitle{
padding: 5%;
height: auto;
font-size: 15px;
font-weight: bold;
}
.image-container{
  width: 10%;
  height: 10%;
}

.image-container-Right{
  width: 17%;
  height: 17%;
}
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
  ImageContainer,
  ImageContainerRight,
  HorizontalLine
}