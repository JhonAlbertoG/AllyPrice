import React, { useState, useEffect} from "react";


import Tarjeta from "./tarjeta";
import Navbar from "./navbar";

var busqueda;

function Buscar() {
  const [filtrados, setFiltrados]= useState(null);

  useEffect(()=>{
    setup();
  },[])

  

  const setup=()=>{
    fetch('./Datos.json')
    .then( resp=> resp.json())
    .then (json=>{
      
      busqueda=json[0].data;
      //console.log(busqueda);
      setFiltrados(busqueda)
    })
  }

  const quitarTildes=(palabra)=>{
    let tmp = palabra.replace(/á/g,"a");
    tmp= tmp.replace(/é/g,"e");
    tmp= tmp.replace(/í/g,"i");
    tmp= tmp.replace(/ó/g,"o");
    tmp= tmp.replace(/ú/g,"u");
    return tmp;
  }

  const handleBuscador=(e)=>{
    const cadena= quitarTildes(e.target.value.toLowerCase());
    //console.log(cadena);
    let tmpArray=[];
    const limite= busqueda.length;
    
    for (let index = 0; index < limite; index++){
      const etiquetas = quitarTildes(busqueda[index].title.toLowerCase());
      const patt = new RegExp(cadena);
      const res = patt.test(etiquetas);

      if (res) {
        tmpArray.push(busqueda[index])
      }

    }
    tmpArray = tmpArray.sort((a,b)=>a.price - b.price);

    setFiltrados(tmpArray);
  }


  return (
    <div className="container">
      <Navbar/>
      <br></br><br></br>
      <div className="jumbotron">
        <h1>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} style={{ width: '100%', height: 'auto' }}></img>
        </h1>
        <input 
          type="text"
          onChange={handleBuscador}
          placeholder="Buscar" style={{ width: '100%', height: 'auto' }}/>
      </div>
      <hr/>
      <div className="row">
        {
          filtrados &&
          filtrados.map((item,i)=>(
            <div className="col-sm-6 mb-4" key={i}>
              <Tarjeta item={item}/>
            </div>
          ))
        }
        

      </div>
    </div>
  );
}

export default Buscar;
