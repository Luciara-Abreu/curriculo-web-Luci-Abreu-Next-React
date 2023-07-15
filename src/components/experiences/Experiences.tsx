import { ContainerComponent, ImageContainer, HorizontalLine, ImageContainerRight } from "@/styles/styles"
import Image from 'next/image'
import { ContaierExperience, Description, ExperienceLine } from "./styles"

function Experiences() {
  return (
    <ContainerComponent>
      <ImageContainerRight>
        <Image src="/images/gifs/social-media.gif" className="image-container-Right" width={0} height={0} alt={"imagem-ilustrativa"} />
        <p className="p-subtitle">EXPERIÊNCIAS</p>
        <HorizontalLine />
      </ImageContainerRight>


      <ContaierExperience>
        <h2 className="post-title">ACT Digital </h2>
        <p>Período: 06/12/2021 até 29/08/2022</p>
        <p>Função: Desenvolvedora Full Stack – focada em front-end</p>
        <p>Atuação: Remoto</p>
        <Description>
          Atividades:
▪ Realização de alinhamentos, reuniões diárias para apresentar as novas funcionalidades implementadas, discutir o progresso do trabalho e alinhar metas diárias.
▪ Desenvolvimento de estilos responsivos para páginas utilizando Styled-components.
▪ Implementação de novas funcionalidades, aprimoramento de componentes, seguindo padrões de clean
code e os princípios SOLID, utilizando React Hooks e Typescript.
▪ Realização de testes manuais abrangentes para verificar o funcionamento adequado da aplicação, identificar possíveis bugs, garantindo a qualidade e a estabilidade do software antes de disponibiliza-lo para uso.
▪ Solicitações e revisão de código usando Azure. 

        </Description>
      </ContaierExperience>

      <ExperienceLine />

      <ContaierExperience>
        <h2 className="post-title">Coletivo Codivas </h2>
        <p>Período: 01/03/2020 até 01/12/2021</p>
        <p>Função: Desenvolvedora JR</p>
        <p>Atuação: Remoto</p>
        <Description>
          Atividades:
▪ Desenvolvimento de projetos E-commerces, landing pages e sites institucionais de acordo com design passados no figma.
▪ Desenvolvimento de sites utilizando a plataforma Wordpress.
▪ Manutenção de código legado em PHP, manutenção de hospedagem para site em cloud.
▪ Realização de alinhamentos com os clientes para apresentar e discutir as novas funcionalidades implementadas, atendendo as suas solicitações especificas, para garantir o progresso e o sucesso dos projetos.
▪ Acompanhamento de alinhamentos para desenvolvimento de sites. Liderança de squad para entrega de projeto semanal. 

        </Description>
      </ContaierExperience>

      <ExperienceLine />

      <ContaierExperience>
        <h2 className="post-title">WeService Serviços e Tecnologia LTDA / Logicalis / Job Center </h2>
        <p>Período: 11/09/2019 até 24/08/2020 </p>
        <p>Função: Analista </p>
        <p>Atuação: Presencial</p>
        <Description>
          Atividades:
▪ Suporte de clientes via telefone e e-mail.
▪ Abertura de chamados e classificação.
▪ Ponto de contato e responsável por acompanhar os chamados relacionados ao suporte de redes e repassa-los
aos técnicos.
Meu papel era avaliar a criticidade de cada chamado e encaminha-los aos técnicos especializados dentro do
prazo estabelecido pelo SLA (Acordo de Nível de Serviço). Garantia-se, assim, que os chamados fossem tratados de forma eficiente e que as soluções fossem implementadas pelos técnicos especializados. 

        </Description>
      </ContaierExperience>

      <ExperienceLine />

      <ContaierExperience>
        <h2 className="post-title">Flex Contact Center </h2>
        <p>Período: 18/06/2018 até 28/04/2019</p>
        <p>Função: Analista de M.I.S</p>
        <p>Atuação: Presencial</p>
        <Description>
          Atividades:
▪ Extração e manipulação de dados D-1
▪ Atualização de relatórios diários.
▪ Criação de relatórios conforme a necessidade do cliente.
▪ Manutenção de relatórios e formulas.
Como Analista de Dados Estratégicos, minha principal responsabilidade era ser a mentora por trás da coleta,
análise e interpretação de dados, proporcionando informações valiosas e estratégicas para os gestores. Eu
mergulhava de cabeça na tarefa de coletar os dados necessários, garantindo sua limpeza e tratamento meticuloso. 

        </Description>
      </ContaierExperience>

      <ExperienceLine />

      <ContaierExperience>
        <h2 className="post-title">Accenture do Brasil LTDA</h2>
        <p>Período: 01/06/2015 até 03/07/2017</p>
        <p>Função: Analista de suporte N2</p>
        <p>Atuação: Presencial</p>
        <Description>
          Atividades:
▪ Atendimentos de chamados via ticket conforme criticidade e SLA.
▪ Correção ou atualização de cadastro, cartões e cobrança.
▪ Analise de dados, via consulta em PL/SQL na base de dados, aplicando correções via banco de dados.
Como Analista de Suporte N2, minha função era primordial no atendimento de chamados para identificar e
solucionar problemas técnicos e erros. Eu era responsável por responder a chamados ou tickets de suporte,
investigando minuciosamente os problemas relatados pelos usuários e buscando encontrar soluções eficazes.
Minha principal tarefa na empresa era baixar backlog analisando incidentes com possíveis erros de sistemas
ou de código, ajustar através de scripts e solucionar de forma efetiva estes incidentes. Dentro desse ambiente
ofereci soluções para otimizar as analises através de scripts dinâmicos montado em PL/SQL, também ofereci
soluções de controle e relatório de fluxo diário e mensal de (entrada e saída) por analista salvo em nuvem
montado em Excel. Foi uma boa troca de experiência e uma grande oportunidade de aprendizado para mim. 
.
        </Description>
      </ContaierExperience>

      <ExperienceLine />
    </ContainerComponent>
  )
}

export default Experiences