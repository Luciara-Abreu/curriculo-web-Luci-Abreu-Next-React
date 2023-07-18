import { ContainerButton } from "../form/styles";

const Agradecimento = () => {
  const handleVoltarClick = () => {
    window.location.href = "/"; // Redireciona para a página inicial (home)
  };


  return (
    <ContainerButton>
    <h1>Obrigado pelo contato!!</h1>
    <h3>Tão logo te retorno!</h3>
    <button className="btnSubmit" onClick={handleVoltarClick}>
      Voltar ao site?
    </button>
  </ContainerButton>
  )

};

export default Agradecimento;
