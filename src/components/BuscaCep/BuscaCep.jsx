const apiCep = () => {
    const [informacoes, setInformacoes] = useState()
  
    async function handleRequisicao() {
      const response = await fetch(`https://viacep.com.br/ws/${}/json`)
      const json = await response.json()
      setInformacoes(json)
    }
    return (
      <div>
        <button onClick={handleRequisicao}>Buscar</button>
        <h3>{informacoes ? informacoes.cep : ''}</h3>
        <img src={informacoes ? informacoes.picture.large : ''} alt="" />
      </div>
    )
  }

  export default apiCep