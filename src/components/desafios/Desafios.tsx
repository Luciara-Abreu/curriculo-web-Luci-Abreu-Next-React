import { ContainerComponent, HorizontalLine, ImageContainer } from '@/styles/styles'
import Image from 'next/image'
import { ContainerLinks, ContainerDesafios } from './stayles'

function Desafios(){
  return(
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/steps.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">DESAFIOS</p>
        <HorizontalLine />
      </ImageContainer>  

      <ContainerDesafios>
      <ContainerLinks>
          <Image src="/images/borboleta.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="#" className="a-In" target="_blank">Desafio 1</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/borboleta.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="#" className="a-In" target="_blank">Desafio 2</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/borboleta.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="#" className="a-In" target="_blank">Desafio 3</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/borboleta.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="#" className="a-In" target="_blank">Desafio 4</a>
        </ContainerLinks>

        <ContainerLinks>
          <Image src="/images/borboleta.png" className="In" alt="imagem LnkedIn" width={50} height={50} />
          <a href="#" className="a-In" target="_blank">Desafio 5</a>
        </ContainerLinks>

      </ContainerDesafios>
    </ContainerComponent>
  )
}
export default Desafios