import React from "react";
import "./footer.css";

function Footer(){
    return(
        <footer className="Footer" alt="">
            <h1 className="Footer2">PARCEIROS</h1>
            <p className="Footer3">BĒHANCE</p>
            <a href="https://br.linkedin.com">
                <img className="Footer-Img" src={require('../assets/Linkedin.png')} alt=""/>
            </a>
            <a href="https://www.alura.com.br">
                <img className="Footer-Img2" src={require('../assets/alura.png')} alt="" width={200}/>
            </a>
            <hr className="Linha"></hr>
        </footer>
    )
}

export default Footer;