import { ContainerComponent, ImageContainer, HorizontalLine } from "@/styles/styles";
import { SlidesCarousel } from "./styles";
import Image from 'next/image'
import Carousel from "../carousel/Carousel";

function Courses(){
  return (
    <ContainerComponent>
    <ImageContainer>
      <Image src="/images/gifs/flag.gif" className="image-container-Right" width={0} height={0} alt={"imagem-ilustrativa"} />
      <p className="p-subtitle">CURSOS COMPLEMENTARES</p>
      <HorizontalLine />
    </ImageContainer>

    <div>
      <Carousel>
        <SlidesCarousel key="1">
          <h4>JavaScript</h4>
          <li>Curso básico de React - rocketseat.com.br</li>
          <li>Curso básico de Node - rocketseat.com.br</li>
          <li>Curso avançado Web Moderno Completo com JavaScript - udemy </li>
        </SlidesCarousel>

        <SlidesCarousel key="2">
          <h4>Node</h4>
          <li>Construindo uma API Restful de Vendas Javascript com Node.js, ExpressJS, Typescript, TypeORM, Postgres,
            Redis, etc. – Udemy</li>
          <li>Construindo uma API Restful de Aniversariantes Javascript com Node.js, ExpressJS, com MongoBd e Mongoose
            –MJV SCHOLL DE NODE</li>
          <li>Construindo uma API Restful de Aniversariantes Javascript com Node.js, ExpressJS, com firebase, com
            Mysql,Sequelize – através de vídeos no Youtube</li>
        </SlidesCarousel>

        <SlidesCarousel key="3">
          <h4>Banco de Dados</h4>
          <li>Introdução a Banco de Dados SQL - DevMedia</li>
          <li>Introdução a Banco de Dados Oracle 12C/16C - DevMedia</li>
        </SlidesCarousel>

        <SlidesCarousel key="4">
          <h4>Python</h4>
          <li>Desenvolvimento com Python / HTML5 - Introdução ao front-end</li>
          <li>Python Fundamentos Para Análise de Dados 3.0</li>
        </SlidesCarousel>

        <SlidesCarousel key="5">
          <h4>PHP</h4>
          <li>Introdução a linguagem de programação PHP, CSS com WordPress </li>
        </SlidesCarousel>

        <SlidesCarousel key="6">
          <h4>HTML5 E CSS3</h4>
          <li>Introdução a Criação de Websites com HTML5 e CSS3 - DIO </li>
        </SlidesCarousel>
      </Carousel>
    </div>  
    </ContainerComponent>
  )
}

export default Courses