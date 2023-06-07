import { ContainerComponent, HorizontalLine, ImageContainer } from '@/styles/styles'
import Image from 'next/image'


function Calculadora3D(){
  return(
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/steps.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">PROJETO</p>
        <HorizontalLine />

      </ImageContainer>      
    </ContainerComponent>
  )
}
export default Calculadora3D