import {useState} from "react";
import './App.css';

function App() {

  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour + ${name}`);
    setName("")
  }

  return (
    <div className="App">
      <h2>Bienvenue chez nous !</h2>
      <br />
      <h3>Connectez vous</h3>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name"></label>
        <input type="text" 
        id="name" 
        placeholder='Entrez votre prenom'
        value={name} 
        onChange={handleChange}
        required
        />

        <label htmlFor="btnConnexion"></label>
        <button id='btnConnexion'
        >Accedez a votre espace</button>
      </form>
    </div>
  );
}

export default App;
