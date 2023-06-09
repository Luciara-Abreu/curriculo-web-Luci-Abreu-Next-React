import { HorizontalLine, ImageContainer, ContainerComponent } from "@/styles/styles"
import Image from 'next/image'

function Profile() {
  return (
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/notebook.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">PERFIL</p>
        <HorizontalLine />
      </ImageContainer>

      <p>
        Eu possuo habilidades técnicas em programação de nível pleno, o que me permite criar algumas soluções de software
        e resolver alguns problemas através da codificação. Além disso, tenho conhecimento em linguagens de desenvolvimento
        e estou familiarizado com alguns frameworks populares. Também possuo experiência em bancos de dados e conhecimento em seus
        frameworks. Sou uma solucionadora de problemas com pensamento lógico e uma boa capacidade de trabalho em equipe. Estou constantemente
        atualizado com as melhores práticas e metodologias ágeis. Busco sempre aprender e me adaptar às novas tecnologias e tendências do setor.
        Caso tenha interesse em entrar em contato, segue meus dados para contato logo abaixo.
      </p>
    </ContainerComponent>
  )
}

export default Profile