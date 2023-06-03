function Courses(){
  return (
    <div>       
      <img src="/src/assets/gifs/flag.gif" className="flag" alt="Imagem ilustrativa de um arquivo"/>
    <p className="p-courses">CURSOS COMPLEMENTARES</p>
    <span className="linha-horizontal"></span>

    <div className="carousel">
          <div>
            <h4>JavaScript</h4>
            <li>Curso básico de React - rocketseat.com.br</li>
            <li>Curso básico de Node - rocketseat.com.br</li>
            <li>Curso avançado Web Moderno Completo com JavaScript - udemy </li>
          </div>

          <div>
            <h4>Node</h4>
            <li>Construindo uma API Restful de Vendas Javascript com Node.js, ExpressJS, Typescript, TypeORM, Postgres,
              Redis, etc. – Udemy</li>
            <li>Construindo uma API Restful de Aniversariantes Javascript com Node.js, ExpressJS, com MongoBd e Mongoose
              –
              MJV SCHOLL DE NODE</li>
            <li>Construindo uma API Restful de Aniversariantes Javascript com Node.js, ExpressJS, com firebase, com
              Mysql,
              Sequelize – através de vídeos no Youtube</li>
          </div>

          <div>
            <h4>Banco de Dados</h4>
            <li>Introdução a Banco de Dados SQL - DevMedia</li>
            <li>Introdução a Banco de Dados Oracle 12C/16C - DevMedia</li>
          </div>

          <div>
            <h4>Python</h4>
            <li>Desenvolvimento com Python / HTML5 - Introdução ao front-end</li>
            <li>Python Fundamentos Para Análise de Dados 3.0</li>
          </div>

          <div>
            <h4>PHP</h4>
            <li>Introdução a linguagem de programação PHP, CSS com WordPress </li>
          </div>

          <div>
            <h4>HTML5 E CSS3</h4>
            <li>Introdução a Criação de Websites com HTML5 e CSS3 - DIO </li>
          </div>

        </div>

    </div>
  )
}

export default Courses