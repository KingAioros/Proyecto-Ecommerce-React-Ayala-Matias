import { collection, getDocs } from "firebase/firestore";
import styles from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    const productRef = collection(db, "producto");
  
    const getProduct = async () => {
      const productCollection = await getDocs(productRef)
      const producto = productCollection.docs.map(doc => ({
        ...doc.data(),
         id: doc.id,
        }));
      setProductos(producto)
    }
  
    useEffect(() => {
      getProduct();
    }, []);

    return (
        <div id="contenedor" className={styles.ItemListContainer +" "+ "contenedor"}>
        {productos.map((producto) =>(
        <div key={producto.id} className={"tarjeta-body"}>
            <Link to={`${producto.id}`}>
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
                </div>
            </div>
            </Link>
        </div>
        ))}
        </div>
    )
}

export default ItemListContainer;