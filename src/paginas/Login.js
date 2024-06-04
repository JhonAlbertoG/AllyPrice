import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './navbar'

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        
    })

    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        let isvalid = true
        let validationErrors = {}

        if(formData.email === "" || formData.email === null){
            isvalid = false;
            validationErrors.email = 'correo requerido'
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            isvalid = false;
            validationErrors.email = 'correo incorrecto'
        }
        if(formData.password === "" || formData.password === null){
            isvalid = false;
            validationErrors.password = 'Contraseña requerido'
        } else if (formData.password.length < 4){
            isvalid= false;
            validationErrors.password = 'Contraseña debe ser de 4 o mas caracteres'
        }
        

        setErrors(validationErrors)
        setValid(isvalid)

        
        axios.get('http://localhost:8000/users')
        .then(result => {
            result.data.map(user =>{
                if(user.email === formData.email){
                    if(user.password === formData.password){
                       alert('inicio exitoso') 
                       navigate('/Buscar')
                    } else {
                        isvalid = false;
                        validationErrors.password = 'Contraseña equivocada'
                    }

                } else if(formData.email !== ""){
                    isvalid = false;
                    validationErrors.email = 'Correo equivocado'
                }
            })
            setErrors(validationErrors)
            setValid(isvalid)
        })
        .catch(err => console.log(err))
        
    }
    return (
        <div ><Navbar/>
        <br></br>
        <br></br>
        <div class='col-md-6 offset-md-4' >
        <br></br>
        <br></br>
            <div class='row'style={{ display: 'flex', justifyContent: 'center' }} >

                <form class='mt-5 border p-4 bg-light shadow' onSubmit={handleSubmit}>
                    <h4 class='mb-5 text-secondary'>Inicia Seccion</h4>
                    {
                        valid ? <></> :
                            <span className='text-danger'>
                                {errors.nombre};{errors.email};{errors.password};{errors.cpassword}

                            </span>
                    }

                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" name="email" class="form-control" placeholder="Escribe tu correo"
                            onChange={(event) => setFormData({ ...formData, email: event.target.value })} />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" name="password" class="form-control" placeholder="Escribe tu Contraseña"
                            onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
                    </div>

                    <br></br>
                    <div div style={{ display: 'flex', justifyContent: 'center' }}><button  type="submit" class="btn btn-primary">Iniciar</button></div>
                </form>

            </div>

            <p class='text-center mt-3 text-secondary'>
                No tienes cuenta <Link to="/Registro">Registrarse</Link>

            </p>
        </div>
        </div>
    )
}

export default Login
