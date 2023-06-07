import styled from 'styled-components';

const ContainerLinks = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center; 

  .fone, .whatsapp, .email, .git, .In{
    width: 10%; 
    height: 5%; 
    margin: 0;
    padding: 4% 4% 0% 0%;
    height: auto;
    transition: transform 0.3s ease;
  }

.fone:hover, .whatsapp:hover, .email:hover, .git:hover, .In:hover {
  transform: scale(1.2) rotate(10deg)
}

  .a-fone, .a-whatsapp, .a-email, .a-git, .a-In {
    text-decoration: none;
    color: aliceblue;
    margin: 0;
    padding: 5% 0 1% 0;
    }

    @media (max-width: 767px) {
      width: auto;
      height: auto;
      margin-bottom: 1%;
      padding: 0;

  .fone, .whatsapp, .email, .git, .In{
    width: 10%; 
    height: 5%; 
    margin: 0;
    padding: 4% 4% 0% 0%;
    height: auto;
    transition: transform 0.3s ease;
  }

.fone:hover, .whatsapp:hover, .email:hover, .git:hover, .In:hover {
  transform: scale(1.2) rotate(10deg)
}
    }
  `

  const ContainerSection = styled.div`
  padding: 5% 0% 5% 0%;
  `

   export {
    ContainerSection,
    ContainerLinks
  }