import React, { useState, useRef } from "react";
import {
  BiSearchAlt,
  BiMapPin,
  BiPhone,
  BiHome,
  BiBuilding,
  BiStar,
} from "react-icons/bi";
import api from "./assets/api";
import {
  Conteiner,
  Title_One,
  SingleInput,
  ButtonOne,
  Main,
  LoadingSpinner,
  ErrorMessage,
} from "./styles";

function App() {
  const [cep, setCep] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [singleInput, setSingleInput] = useState("");
  const inputRef = useRef(null);

  const inputChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setSingleInput(value);
    setError(""); // Limpa erro quando usuário digita
  };

  const formatCep = (value) => {
    return value.replace(/(\d{5})(\d{3})/, "$1-$2");
  };

  const clickedButton = async () => {
    if (singleInput === "") {
      setError("Por favor, digite um CEP válido ⚠️");
      return;
    }

    if (singleInput.length !== 8) {
      setError("CEP deve ter 8 dígitos");
      return;
    }

    setLoading(true);
    setError("");
    setCep({});

    try {
      const dados = await api.get(`${singleInput}/json`);

      if (dados.data.erro) {
        setError("CEP não encontrado. Verifique o número digitado.");
        return;
      }

      setCep(dados.data);
      setSingleInput("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (err) {
      setError("Erro ao buscar CEP. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      clickedButton();
    }
  };

  return (
    <Conteiner>
      <Title_One>Buscar CEP</Title_One>

      <SingleInput>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite seu CEP (apenas números)"
          onChange={inputChange}
          onKeyPress={handleKeyPress}
          maxLength={8}
          value={singleInput}
        />
        <ButtonOne onClick={clickedButton} disabled={loading}>
          {loading ? <LoadingSpinner /> : <BiSearchAlt />}
        </ButtonOne>
      </SingleInput>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {Object.keys(cep).length > 0 && !loading && (
        <Main>
          <h2>
            <BiStar
              style={{
                marginRight: "10px",
                color: "#FFD700",
                filter: "drop-shadow(0 0 5px rgba(255, 215, 0, 0.8))",
              }}
            />
            CEP: {formatCep(cep.cep)}
          </h2>

          {cep.logradouro && (
            <p>
              <BiHome
                style={{
                  marginRight: "8px",
                  color: "#FFD700",
                  filter: "drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))",
                }}
              />
              <b>Endereço:</b> {cep.logradouro}
            </p>
          )}

          {cep.bairro && (
            <p>
              <BiBuilding
                style={{
                  marginRight: "8px",
                  color: "#FFA500",
                  filter: "drop-shadow(0 0 3px rgba(255, 165, 0, 0.5))",
                }}
              />
              <b>Bairro:</b> {cep.bairro}
            </p>
          )}

          <p>
            <BiMapPin
              style={{
                marginRight: "8px",
                color: "#FF8C00",
                filter: "drop-shadow(0 0 3px rgba(255, 140, 0, 0.5))",
              }}
            />
            <b>Cidade:</b> {cep.localidade} - {cep.uf}
          </p>

          {cep.ddd && (
            <p>
              <BiPhone
                style={{
                  marginRight: "8px",
                  color: "#FFD700",
                  filter: "drop-shadow(0 0 3px rgba(255, 215, 0, 0.5))",
                }}
              />
              <b>DDD:</b> {cep.ddd}
            </p>
          )}
        </Main>
      )}
    </Conteiner>
  );
}

export default App;
