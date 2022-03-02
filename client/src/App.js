import {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState()

  const addCliente = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/cadastrar', {
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf,
      email: email,
      senha: senha
    }).then(() => console.log("Sucesso!"))
  }

  return (
    <div className='container'>
      <form>
        <h1>Cadastro Cliente</h1>
        <div>
          <div className='row'>
            <div className='input'>
              <label>Nome</label>
              <input type='text' nome='nome' id='nome' onChange={(event) => setNome(event.target.value)}></input>
            </div>
            <div>
              <label>Sobrenome</label>
              <input type='text' nome='sobrenome' id='sobrenome' onChange={(event) => setSobrenome(event.target.value)}></input>
            </div>
            <div>
              <label>CPF</label>
              <input type='text' nome='cpf' id='cpf' onChange={(event) => setCpf(event.target.value)}></input>
            </div>
            <div>
              <label>E-mail</label>
              <input type='email' nome='email' id='email' onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div>
              <label>Senha</label>
              <input type='password' nome='senha' id='senha' onChange={(event) => setSenha(event.target.value)}></input>
            </div>
            <div>
              <button onClick={addCliente}>Cadastrar</button>
            </div>  
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
