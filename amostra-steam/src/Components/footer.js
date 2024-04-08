import React from "react";
import "./footer.css";

function Footer(){
    return(
        <footer className="Footer" alt="">
            <p className="Footer2">PARCEIROS</p>
            <p className="Footer3">BĒHANCE</p>
            <img className="Footer-Img" src={require('../assets/Linkedin.png')} alt=""/>
            <hr className="Linha"></hr>
        </footer>
    )
}

export default Footer;