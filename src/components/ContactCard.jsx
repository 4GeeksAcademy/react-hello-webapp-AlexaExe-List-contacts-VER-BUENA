import useGlobalReducer from "../hooks/useGlobalReducer"
import { Link } from "react-router-dom";
import { deleteContact } from "./Services/APIServices";

// este es un objeto sólo he copiado el nombre del array...
export const ContactCard = ({ contact }) => {
    const { dispatch } = useGlobalReducer()

    const handleDelete = () => {
        deleteContact(dispatch, contact.id);
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

                    //voy a crear un ternario para que se pueda elegir la foto 
                        src={"https://i.imgur.com/BSaVC3g.png"}
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