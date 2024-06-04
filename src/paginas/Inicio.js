import React from "react";
import Navbar from "./navbar"
import { Link } from "react-router-dom";
import './css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Inicio() {
    return (
      <div className="Inicio" style={{ background: '#FF5B58'}}> 
   <Navbar/>
      <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                
                <h1 class="masthead-heading text-uppercase mb-0">AllyPrice</h1>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"> <FontAwesomeIcon icon={faStar} /></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0">Tu aliado a la hora de comprar</p>
                <br></br>
                <Link to='/Buscar' style={{ textDecoration: 'none' }} class="masthead-heading text-uppercase mb-0">
                <button style={{ fontSize: '24px', color: 'red', padding: '15px 30px', borderRadius: '50px', border: 'none', background: 'white', cursor: 'pointer' }}>
                    Ir a Buscar
                </button>
            </Link>
            </div>
        </header>
   

      
      </div>
    )
  }
  
  export default Inicio;