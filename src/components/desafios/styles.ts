import styled from 'styled-components'


const ContainerDesafios = styled.div`
width: 100%;
`

const ContainerLinks = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center; 

 
  .a-projeto {
    text-decoration: none;
    color: aliceblue;
    margin: 0;
    padding: 0% 0 5% 0;
    }

    //-----------------------------------------------------------


    @media (max-width: 767px) {
      width: auto;
      height: auto;
      margin-bottom: 1%;
      padding: 0;

      .a-projeto {
    text-decoration: none;
    color: aliceblue;
    margin: 0;
    padding: 0% 0 5% 5%;
    }
  }
  `

export {
  ContainerDesafios,
  ContainerLinks
}
