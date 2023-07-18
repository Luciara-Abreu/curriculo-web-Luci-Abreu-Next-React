import { styled } from "styled-components"


const ContainerFormSendEmail = styled.div`
margin: 0;
padding: 0;
width: 100%;
`

const ContainerSection = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #ffff;
padding: 14dvh 0 6dvh 0;

`

const ContainerApresentation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-sans-serif);
  font-weight: 500;
  line-height: 1.2;
`;


const HR = styled.h2`
  width: 8%;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em; 
  margin-inline-start: auto;
  margin-inline-end: auto; 
  border-top: 2px solid #0a6d7a;

  @media (max-width: 768px) {
    width: 18%;
  }
  `

const ContainerInitial = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.text-muted1, .text-muted2{
color: #6c757d;
font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
margin:0;
}

.text-muted1{
    font-size: 25px;    
  }

 .text-muted2{
    font-size: 20px;
  }

.title-initial{
  display: flex;
  justify-content: baseline;

  }

@media (max-width: 768px) {
  width: 100%;

.title-initial{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  .text-muted1{
    font-size: 20px;    
  }

 .text-muted2{
    font-size: 15px;
  }

}
`




 /* Formulário de Contato */
const ContainerSectionForm = styled.div`
width: 100%;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1px;
background: #ffff;

form{
  width: 90%;
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    margin-bottom: 2%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: var(--white);
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}   

@media (max-width: 768px) {
  .form-control {
    width: 93%;
    margin-bottom: 10%;
  }
}
`
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
  padding-top: 10px;
  
  .btnSubmit{
  width: 10%;
  font-family: var(--font-family-sans-serif);
  background: #0a6d7a;
  color: aliceblue;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

@media (max-width: 768px) {
  padding: 20px;

  .btnSubmit {
    width: 93%;
  }
}
`



export {
  /* Apresentação Formulário de Contato */
  ContainerFormSendEmail,
  ContainerSection,
  ContainerApresentation,
  ContainerInitial,
  Title,
  HR,
  /* Formulário de Contato */
  ContainerSectionForm,
  ContainerButton

}