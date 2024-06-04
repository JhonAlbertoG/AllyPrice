import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import  { useEffect } from 'react'; // Asegúrate de importar useEffect
const Navbar = () => {
    useEffect(() => {
        const navbarShrink = () => {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
            }
        };

        // Llamar a navbarShrink al montar el componente
        navbarShrink();

        // Llamar a navbarShrink cuando la página se desplaza
        document.addEventListener('scroll', navbarShrink);

        // Limpiar el listener de evento cuando el componente se desmonta
        return () => {
            document.removeEventListener('scroll', navbarShrink);
        };
    }, []); // Esto asegura que solo se llame una vez, al montar el componente
    return (

        <nav class="navbar navbar-expand-lg text-uppercase fixed-top"  id="mainNav">
            <div class="container" >
                <a class="navbar-brand" style={{color: '#FFFFFF'}} href="/">AllyPrice</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1"><Link to='/registro' className='' class="nav-link py-2 px-0 px-lg-2 rounded">Registro</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"><Link to='/login' className='' class="nav-link py-2 px-0 px-lg-2 rounded">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}

export default Navbar
