import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const[producto, setProducto] = useState([]);
  const productRef = collection(db, "producto");
  const {id} = useParams ();

  const getProduct = async () => {
    const productCollection = await getDocs(productRef)
    const producto = productCollection.docs.map(doc => ({
      ...doc.data(),
       id: doc.id,
      }));
    setProducto(producto)
  }

  useEffect(() => {
    getProduct();
  }, []);


  return (
      <div id="contenedor" className={"contenedor"}>
      {producto.map((producto) =>(producto.id==id?
      <div key={producto.id} className={"tarjeta-body"}>
          <div className="card">
              <div className="card-img">
                  <img src={producto.img} alt="Card image cap" />
              </div>
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">
              The value of the product is expressed in US dollars.</p>
              <div className="cardBody">
                <h6 className= "precio"><strong>Precio: ${producto.precio}
                </strong></h6>
                <button id="${id}" onClick={() => console.log("AddCarrito")} className="btn btn-secondary me-md-2">Buy</button>
              </div>
          </div>
      </div>:null)
      )}
      </div>
  )
}

export default CardDetail
