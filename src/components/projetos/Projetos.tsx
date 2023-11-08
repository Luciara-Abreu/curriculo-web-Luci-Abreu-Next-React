import { ContainerComponent, HorizontalLine, ImageContainer } from '@/styles/styles'
import Image from 'next/image'
import { ContainerLinks, ContainerProjetos } from './stayles'
import Borboleta from '../borboleta/Borboleta'


function Projetos() {
  return (
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/steps.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">PROJETOS</p>
        <HorizontalLine />
      </ImageContainer>

      <ContainerProjetos>

        <ContainerLinks>
          <Borboleta />
          <a href="https://luci-portifolio.vercel.app/" className="a-projeto" target="_blank">Portfólio</a>
        </ContainerLinks>

        <ContainerLinks>
          <Borboleta />
          <a href="https://form-contact-hook-form.vercel.app/" className="a-projeto" target="_blank">Formulário de contato</a>
        </ContainerLinks>

        <ContainerLinks>
          <Borboleta />
          <a href="https://jogo-da-forca-plum.vercel.app/" className="a-projeto" target="_blank">Jogo da Forca</a>
        </ContainerLinks>

      </ContainerProjetos>
    </ContainerComponent>
  )
}
export default Projetos