import styled from 'styled-components'

const ContainerCarousel  = styled.div`
display: flex;
flex-direction: column;
width: 95%;

.slide{
  flex: 0 0 200px;
}

.carousel-controls{
  padding-top: 3%;
  

  .button {
  width: 10%;
  margin: 2px;
  background: #0a6d7a;
  color: aliceblue;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; 
}

.button:hover {
  background-color: #085e68; 
}
}

`
export {
  ContainerCarousel
}