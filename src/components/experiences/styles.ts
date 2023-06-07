import styled from 'styled-components'

const ContaierExperience = styled.div`
width: 100%;
padding: 3% 0 3% 0;

> p{
  font-size: 20px;
  font-weight: bold; 
}
`
const Description = styled.div`
width: 95%;
padding-top: 2%;

font-size: 20px;
`

const ExperienceLine = styled.div`
width: 100%; 
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

export {
  ContaierExperience,
  Description,
  ExperienceLine
}