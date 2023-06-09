import { ContainerComponent, HorizontalLine, ImageContainer } from '@/styles/styles'
import Image from 'next/image'
import { ContainerLinks, ContainerProjetos } from './stayles'


function Projetos(){
  return(
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/steps.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">PROJETOS</p>
        <HorizontalLine />
      </ImageContainer>  

      <ContainerProjetos>
      <ContainerLinks>
          <Image src="/images/borboleta.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="#" className="a-In" target="_blank">Agenda Aniversariantes</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/borboleta.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="#" className="a-In" target="_blank">Calculadora 3D</a>
        </ContainerLinks>
      </ContainerProjetos>

    </ContainerComponent>
  )
}
export default Projetos