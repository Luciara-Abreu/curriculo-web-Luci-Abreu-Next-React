function NameImage(){
  const foto = "/src/assets/luciabreu.png"
  return(
    <div>
      <header className="foto-e-name">
      <img src="/public/luciabreu.png" alt="Minha Imagem" />
        <h1 id="title">Luci Abreu</h1>
        <div className="butterfly-container">
          <div className="butterfly"></div>
        </div>
      </header>
    </div>
  )
}
export default NameImage