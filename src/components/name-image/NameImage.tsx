import Image from 'next/image'
import { Container } from './styles'

function NameImage(){
  return(
    <Container>
      <Image src="/images/luciabreu.png" className="minha-foto" alt="Minha Imagem" width={150} height={150} />
        <h1 id="title">Luci Abreu</h1>
    </Container>
  )
}
export default NameImage