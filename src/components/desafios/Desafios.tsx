import { ContainerComponent, HorizontalLine, ImageContainer } from '@/styles/styles';
import Image from 'next/image';
import { ContainerLinks, ContainerDesafios } from './styles';
import Borboleta from '../borboleta/Borboleta';


const Desafios: React.FC = () => {
  return (
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/steps.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={0} height={0} />
        <p className="p-subtitle">DESAFIOS</p>
        <HorizontalLine />
      </ImageContainer>

      <ContainerDesafios>
        <ContainerLinks>
        <Borboleta />  
        <a href="#" className="a-projeto" target="_blank" rel="noopener noreferrer">Desafio 1</a>
        </ContainerLinks>
      </ContainerDesafios>
    </ContainerComponent>
  );
};

export default Desafios;
