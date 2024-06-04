export default function Tarjeta (props){

    const item =props.item;

    return(
        <div className="card">
            <div className="card-header">
                {item.place}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {item.title}
                </h5>
                <div className="card-text">
                    <div className="col-sm-6 mb-6" >
                    {<img src={item.img_link} width="120px" height="120px"/>}
                    </div>
                    
                    <div className="text-container">
                    <h5>Precio: {item.price}</h5>
                    <h5>Puntuacion: {item.rating}</h5>
                    </div>
                    
                
                </div>
                <a href={item.link}>
                    <button>
                        Ver Producto
                    </button>

                </a>


            </div>
            </div>

    )

}


