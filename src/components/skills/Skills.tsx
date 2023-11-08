import { ContainerComponent, HorizontalLine, ImageContainer } from "@/styles/styles"
import Image from 'next/image'
import { ContainerSkill, Progress, Skill, Title } from "./styles"

function Skills() {
  return (
    <ContainerComponent>
      <ImageContainer>
        <Image src="/images/gifs/pyramid.gif" className="image-container" alt="Imagem ilustrativa de um arquivo" width={50} height={50} />
        <p className="p-subtitle">SKILLS</p>
        <HorizontalLine />
      </ImageContainer>

      <ContainerSkill>
        <Title>HTML</Title>
        <Skill>
          <Progress progress={70}></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>CSS</Title>
        <Skill>
          <Progress progress={75} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>JavaScript</Title>
        <Skill>
          <Progress progress={85} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>TypeScript</Title>
        <Skill>
          <Progress progress={80} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Node</Title>
        <Skill>
          <Progress progress={75} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>SQL / PLSQL</Title>
        <Skill>
          <Progress progress={60} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Postgres</Title>
        <Skill>
          <Progress progress={65} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>MongoDB</Title>
        <Skill>
          <Progress progress={66} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>MySQL</Title>
        <Skill>
          <Progress progress={55} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Next 2023</Title>
        <Skill>
          <Progress progress={30} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>React</Title>
        <Skill>
          <Progress progress={40} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>JAVA</Title>
        <Skill>
          <Progress progress={20} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Python</Title>
        <Skill>
          <Progress progress={15} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>PHP</Title>
        <Skill>
          <Progress progress={10} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Oracle</Title>
        <Skill>
          <Progress progress={13} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Firebase</Title>
        <Skill>
          <Progress progress={15} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Excel</Title>
        <Skill>
          <Progress progress={80} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>GIT</Title>
        <Skill>
          <Progress progress={70} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Sequelize</Title>
        <Skill>
          <Progress progress={40} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>TypeOrm</Title>
        <Skill>
          <Progress progress={50} ></Progress>
        </Skill>
      </ContainerSkill>

      <ContainerSkill>
        <Title>Mongoose</Title>
        <Skill>
          <Progress progress={55} ></Progress>
        </Skill>
      </ContainerSkill>

    </ContainerComponent>
  )
}

export default Skills