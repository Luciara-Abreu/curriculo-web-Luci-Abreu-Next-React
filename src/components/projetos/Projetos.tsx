import { ContainerComponent, HorizontalLine, ImageContainer } from '@/styles/styles'
import AgendaAniversariantes from '../agendaAniversariante/AgendaAniversariantes'
import Calculadora3D from '../calculadora3D/Calculadora3D'
import Image from 'next/image'
import { ContainerProjetos } from './stayles'


function Projetos(){
  return(
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/steps.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">PROJETO</p>
        <HorizontalLine />
      </ImageContainer>  

      <ContainerProjetos>
      <AgendaAniversariantes/>  
      <Calculadora3D />  
      </ContainerProjetos>

    </ContainerComponent>
  )
}
export default Projetos