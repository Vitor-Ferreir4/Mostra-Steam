import './App.css'
import Navbar from './Components/Navbar'
import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import Texto1 from './Components/Texto1.js'
import BotaoLogin from './Components/BotaoLogin.js'
import BotaoSignUp from './Components/BotaoSignUp'
import Footer from './Components/footer'
import Imagem from './Components/Imagem.js'




function App() {
  return (
    <header>
      <div className="App">
        <Navbar/>
        <Logo className="App-logo"/>
      </div>

      <div>
        <Texto1/>
      </div>

      <div  className='Imagem'>
      <Imagem/>
      </div>

      <div className='BotaoLogin'>
        <BotaoLogin/>
      </div>

      <div className='BotaoSignUp'>
        <BotaoSignUp/>
      </div>

      <div>
        <Footer/>
      </div>
    </header>
  );
}

export default App;
