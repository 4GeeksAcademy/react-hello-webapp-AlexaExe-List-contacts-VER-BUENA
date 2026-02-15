import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";
import { deleteContact } from "./Services/APIServices";


export const ContactCard = ({ contact }) => {
    const { dispatch } = useGlobalReducer()

    const handleDelete = () => {
        deleteContact(dispatch, contact.id);
        //borrar contactos por id
    };


    return (
        <div className="card mb-3 position-relative">
            <div className="position-absolute top-0 end-0 m-2">
                    <Link to={`/edit/${contact.id}`}>
                        <button type="button" className="btn btn-outline-primary me-2"> ✏️
                        </button>
                    </Link>
                       <button className="btn btn-sm btn-outline-danger" onClick={handleDelete} >🗑️</button>
                </div>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
                    <img

                    //con esta parte del código genero diferentes imagenes, como la API las guarda, simplemente vamos rotando por orden de lugar, chica, chico, Anon. 
                        src={["https://i.imgur.com/BSaVC3g.png", "https://i.imgur.com/ADahR9w.png","https://i.imgur.com/r6cixti.png"][contact.id % 3]}
                        
                        alt={contact.name}
                        className="rounded-circle"
                        style={{ width: "100px", heigh: "100px", objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-8">
                    <div className="card-body">

                        <h5 className="card-title"> Nombre: {contact.name}</h5>
                        <p>📍 dirección: {contact.address || "Sin dirección"}</p>
                        <p>📞 móvil: {contact.phone || "Sin teléfono"}</p>
                        <p>✉️ email: {contact.email || "Sin email"}</p>
                    </div>
                </div>
                

            </div>

        </div>

    );

};