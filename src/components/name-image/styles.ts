import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  #title{
  display: inline-block;
  font-size: 34px;
  }
  
  .minha-foto{
  width: 50%; 
  height: 50%;
  border-radius: 100%;
  padding-top: 1%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  filter: brightness(120%);
}

@media (max-width: 767px) {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 10%;
}
`

const FotoName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
`


export { 
  Container,
  FotoName
};
