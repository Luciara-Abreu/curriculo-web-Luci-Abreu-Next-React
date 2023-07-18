import Graduation from "@/components/graduation/Graduation";
import Profile from "@/components/profile/Profile";
import Skills from "@/components/skills/Skills";
import Contacts from "@/components/contacts/Contacts"
import Experiences from "@/components/experiences/Experiences";
import Courses from "@/components/courses/Courses";
import NameImage from "@/components/name-image/NameImage";
import Projetos from "@/components/projetos/Projetos";
import Desafios from "@/components/desafios/Desafios";
import Footer from "@/components/footer/Footer";
import { Body, Container, ContainerData, ContainerForm, LeftSide, RightSide } from "@/styles/styles";
import FormSendEmail from "@/components/form/form.send.mail";


//Agradecimento
export default function Home() {
  
  return (
    <Container>
      <Body className="body">
        <ContainerData>
        <LeftSide>
          <NameImage />
          <Graduation />
          <Profile />
          <Skills />
          <Contacts />
          <Projetos />
          <Desafios />
        </LeftSide>

        <RightSide>
          <Experiences />
          <Courses />
        </RightSide>
        </ContainerData>

        <ContainerForm className="container-form">
        <FormSendEmail />
        </ContainerForm>
        
      </Body>
      <Footer />
    </Container>
  )
}
