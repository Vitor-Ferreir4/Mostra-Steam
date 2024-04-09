import './App.css'
import Navbar from './Components/Navbar'
import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import Texto1 from './Components/Texto1.js'
import Botao from './Components/Botao.js'
import Footer from './Components/footer'
import Imagem from './Components/Imagem.js'




function App() {
  return (
    <header>
      <div className="App">
        <Navbar/>
        <Logo className="App-logo"/>
      </div>

      <div className='Paragrafo1'>
        <Texto1/>
      </div>

      <div  className='Imagem'>
      <Imagem/>
      </div>

      <div className='Botao'>
        <Botao/>
      </div>
      <div>
        <Footer/>
      </div>
    </header>
  );
}

export default App;
