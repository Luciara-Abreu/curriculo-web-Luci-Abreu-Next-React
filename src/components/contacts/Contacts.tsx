import Image from 'next/image'
import { Container, ImageContainer } from "./style"

function Contacts() {
  return (
    <Container>
      <Image src="/images/gifs/handshake.gif" alt="Handshake" width={50} height={50} />
      <article className="aritle-contat">
        <ImageContainer>
        </ImageContainer>
        <p className="p-contact">CONTATO</p>
        <span className="linha-horizontal"></span>
      </article>

      <article className="article-links-contats">
        <ul className="lista-contato">
          <li className="li-fone">
            <img src="assets/ringing.png" className="fone" />
            <a href="tel:+5551984539391" className="a-fone" target="_blank">Telefone Luci Abreu</a>
          </li>

          <li className="li-whats">
            <img src="assets/whatsapp.png" className="whatsapp" />
            <a href="https://wa.me/5551984539391" className="a-whatsapp" target="_blank">WhatsApp Luci Abreu</a>
          </li>

          <li className="li-mail">
            <img src="assets/envelope.png" className="email" />
            <a href="mailto:luciara.abreu@gmail.com.com" className="a-email" target="_blank">E-mail Luci Abreu</a>
          </li>

          <li className="li-git">
            <img src="assets/github.png" className="git" />
            <a href="https://github.com/Luciara-Abreu" className="a-git" target="_blank">Repositório Luci Abreu</a>
          </li>

          <li className="li-in">
            <img src="assets/linkedin.png" className="In" />
            <a href="https://www.linkedin.com/in/luciara-abreu/" className="a-In" target="_blank">LinkedIn Luci Abreu</a>
          </li>

        </ul>
      </article>
    </Container>
  )
}

export default Contacts
