import Image from 'next/image'
import { ImageContainer, ContainerComponent, HorizontalLine } from '@/styles/styles'
import { ContainerSection, ContainerLinks } from './styles'

function Contacts() {
  return (
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/handshake.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">CONTATO</p>
        <HorizontalLine />
      </ImageContainer>

      <ContainerSection>
        <ContainerLinks>
          <Image src="/images/ringing.png" className="fone" alt="imagem fone" width={50} height={50} />
          <a href="tel:+5551984539391" className="a-fone" target="_blank">Telefone Luci Abreu</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/whatsapp.png" className="whatsapp" alt="imagem whatsapp" width={50} height={50} />
          <a href="https://wa.me/5551984539391" className="a-whatsapp" target="_blank">WhatsApp Luci Abreu</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/envelope.png" className="email" alt="imagem email" width={50} height={50} />
          <a href="mailto:luciara.abreu@gmail.com.com" className="a-email" target="_blank">E-mail Luci Abreu</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/github.png" className="git" alt="imagem gitbub" width={50} height={50} />
          <a href="https://github.com/Luciara-Abreu" className="a-git" target="_blank">Repositório Luci Abreu</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/linkedin.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="https://www.linkedin.com/in/luciara-abreu/" className="a-In" target="_blank">LinkedIn Luci Abreu</a>
        </ContainerLinks>

      </ContainerSection>
    </ContainerComponent>
  )
}

export default Contacts
