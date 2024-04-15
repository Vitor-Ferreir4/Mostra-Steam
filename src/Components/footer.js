import React from "react";
import "./footer.css";

function Footer(){
    return(
        <footer className="Footer" alt="">
            <h1 className="Footer2">PARCEIROS</h1>
            <a href="https://br.linkedin.com"target="_blank">
                <img className="Footer-Img" src={require('../assets/Linkedin.png')} alt=""/>
            </a>
            <a href="https://www.gupy.io/"target="_blank">
                <img className="Footer-Img2" src={require('../assets/Gupy1.png')} alt="" width={130}/>
            </a>
            <a href='https://br.pinterest.com/'target="_blank">
                <img className="Footer-Img3" src={require('../assets/Pinterest2-removebg-preview.png')} alt="" width={200}/>
            </a>
        </footer>
    )
}

export default Footer;