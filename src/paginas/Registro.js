import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './navbar'
const Registro =() => {
    const [formData, setFormData] = useState({
        nombre:'',
        email:'',
        password:'',
        cpassword:''
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate() 
    const handleSubmit = (e) =>{
        e.preventDefault();
        let isvalid = true
        let validationErrors = {}
        if(formData.nombre === "" || formData.nombre === null){
            isvalid = false;
            validationErrors.nombre = 'Nombre requerido'
        }
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
        if(formData.cpassword !==  formData.password){
            isvalid = false;
            validationErrors.cpassword = 'Contraseña no coincide'
        }

        setErrors(validationErrors)
        setValid(isvalid)

        if (Object.keys(validationErrors).length === 0){
            axios.post('http://localhost:8000/users', formData)
            .then(result => {
                alert('Registro Exitoso')
                navigate('/login')
            })
            .catch(err => console.log(err))
        }
    }
    return (
        <div class='col-md-6 offset-md-4'>
           <Navbar/>
           <br></br>
            <br></br>
            <div class='row' style={{ paddingTop: '50px'}}>
                
            <form class='mt-5 border p-4 bg-light shadow' onSubmit={handleSubmit}>
                <h4 class='mb-5 text-secondary'>Crea Tu Cuenta</h4>
                {
                    valid ? <></>:
                    <span className='text-danger'>
                        {errors.nombre};{errors.email};{errors.password};{errors.cpassword}

                    </span>
                } 
            <div class="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input type="text" name="nombre" class="form-control" placeholder="Escribe tu nombre"
                    onChange={(event)=>setFormData({...formData, nombre: event.target.value})}/>
                        
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Correo</label>
                    <input type="email" name="email" class="form-control" placeholder="Escribe tu correo"
                    onChange={(event)=>setFormData({...formData, email: event.target.value})}/>
            
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" name="password" class="form-control" placeholder="Escribe tu Contraseña"
                    onChange={(event)=>setFormData({...formData, password: event.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirmar Contraseña</label>
                    <input type="password" name="cpassword" class="form-control" placeholder="Escribe tu Contraseña"
                    onChange={(event)=>setFormData({...formData, cpassword: event.target.value})}/>
                </div>
                <br>
                </br>
                <div div style={{ display: 'flex', justifyContent: 'center' }}><button  type="submit" class="btn btn-primary">Submit</button></div>
                
            </form>

            </div>
            
            <p class='text-center mt-3 text-secondary'>
                Ya tienes cuenta <Link to="/login">Iniciar Seccion</Link>

            </p>
        </div>
    )
}

export default Registro