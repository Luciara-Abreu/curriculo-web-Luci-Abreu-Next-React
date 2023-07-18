import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContainerApresentation, ContainerButton, ContainerFormSendEmail, ContainerInitial, ContainerSection, ContainerSectionForm, HR, Title } from "./styles";


function FormSendEmail() {
  useEffect(() => {
    AOS.init(); // Inicia o AOS

    return () => {
      AOS.refresh(); // Atualiza o AOS quando o componente é desmontado
    };
  }, []);



  return (
        <ContainerFormSendEmail>
          <ContainerSection>
            <ContainerApresentation data-aos="zoom-in-up" data-aos-duration="1000">
              <Title>Fale comigo!</Title>
              <HR />
              <ContainerInitial data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="title-initial">
                <p className="text-muted1">Tudo pronto para começar seu próximo</p>
                <p className="text-muted1">projeto comigo?</p>
                </div>
                <p className="text-muted2"> Entre em contato! </p>
              </ContainerInitial>

              {/*<form action="https://api.staticforms.xyz/submit" method="post">*/}
              {/* Formulário de Contato */}
              <ContainerSectionForm data-aos="zoom-in-left">
              <form action="https://formsubmit.co/6022aec38f12017e7094cebed4e0c3bf" method="POST">
                  <div >
                    <label>Nome</label>
                    <input type="text" name="name" className="form-control" placeholder="nome sobrenome" autoComplete="on" required />
                  </div>

                  <div>
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" placeholder="nome@email.com" autoComplete="on" required />
                  </div>

                  <div>
                    <label >Mensagem</label>
                    <textarea  name="textmessage" className="form-control" placeholder="Digite aqui..." style={{ height: "100px" }}></textarea>
                  </div>
                  <ContainerButton>
                    <button className="btnSubmit" type="submit">Enviar</button>
                  </ContainerButton>              
                </form>
              </ContainerSectionForm>
            </ContainerApresentation>
          </ContainerSection>
        </ContainerFormSendEmail>
  );
}

export default FormSendEmail;

//<input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/src/obrigado.html" />
// <input type="hidden" name="accessKey" value="2a8244f5-73da-4c49-8631-cc6bf3c184fa" />