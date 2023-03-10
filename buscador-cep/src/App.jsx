import React, { useState } from 'react'

import { BiSearchAlt } from "react-icons/bi";

import api from './assets/api';

import { Conteiner, Title_One, SingleInput, ButtonOne, Main } from "./styles";

function App() {

  const [singleInput, setsIngleInput] = useState("")

  const input = document.querySelector("input")
  


  const [cep, setCep] = useState({})

  const inputChange = (e) => {
    setsIngleInput(e.target.value)
  }

  const clickedButton = async () => {


    //01001000/json/




    if (singleInput === "") {
      alert("Digita algum CEP")

    }

    try {
      let dados = await api.get(`${singleInput}/json`)
      setCep(dados.data)
      input.value = ""

      
      
    } catch {
      alert("Erro ao buscar CEP, digita novamente...")

      input.value = ""


    }

    let dados = await api.get(`${singleInput}/json`)
    
    if(dados.data.cep === cep.value){
      alert("Esse CEP não esta valido, tentar outro.")
      window.location.reload(true)
    }
    

  }





  return (
    <Conteiner>
      <Title_One>Buscar CEP</Title_One>

      <SingleInput>

        <input type="number" placeholder="Digitar seu cep..." onChange={inputChange} />

        <ButtonOne onClick={clickedButton}> <BiSearchAlt /> </ButtonOne>

      </SingleInput>

      {
        Object.keys(cep).length > 0 && (

          <Main>
            <h2>CEP:{cep.cep}</h2>

            <p><b>Endereço: </b>{cep.logradouro}</p>
            <p> <b>DDD do estado:</b> {cep.ddd} </p>
            <p><b>Bairro: </b>{cep.bairro}</p>
            <p><b>Cidade: </b>{cep.localidade + ` ${cep.uf}`}</p>
          </Main>

        )
      }

    </Conteiner>
  )
}

export default App
