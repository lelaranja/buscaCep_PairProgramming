import React from "react"
import { useState } from "react"
import Input from "../Input/Input"
import Label from "../Label/Label"

const BuscaCep = () => {
    const [informacoes, setInformacoes] = useState()
    const [cep, setCep] = useState('')
  
    async function handleRequisicao() {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
      const json = await response.json()
      setInformacoes(json)
    }

    return (
      <div>
        <Label texto="Insira seu CEP:"/>
        <Input tipo="text" valor={cep} onChange={e=>setCep(e.target.value)}/>
        <button onClick={handleRequisicao}>Buscar</button>
        <h3>{informacoes ? informacoes.cep : ''}</h3>
      </div>
    )
  }

  export default BuscaCep