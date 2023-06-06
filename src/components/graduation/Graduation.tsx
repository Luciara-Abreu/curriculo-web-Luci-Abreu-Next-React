import { HorizontalLine, ImageContainer, ContainerComponent } from '@/styles/styles'
import Image from 'next/image'

function Graduation(){
  return (
    <ContainerComponent>
    <ImageContainer>
        <Image src="/images/gifs/graduation.gif" className="image-container" alt="graduation" width={0} height={0} />
        <p className="p-subtitle">GRADUAÇÃO</p>
        <HorizontalLine />
    </ImageContainer>

      <section className="section-text-graduation">
        <p>Tecnólogo em Banco de Dados </p>
        <p>Universidade: Cruzeiro do Sul</p>
        <p>Conclusão: 30/06/2021</p>
      </section>
    </ContainerComponent>
  )
}

export default Graduation