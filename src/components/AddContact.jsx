import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { createContact, updateContact } from "../components/Services/APIServices";

// este componente muestra la información completa de un personaje según el ID de la URL.

export const AddContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();

    // Si hay id, buscamos el contacto para editar
    const contactToEdit = id ? store.contacts.find(c => c.id === parseInt(id)) : null;

    const [name, setName] = useState(contactToEdit?.name || "");
    const [phone, setPhone] = useState(contactToEdit?.phone || "");
    const [email, setEmail] = useState(contactToEdit?.email || "");
    const [address, setAddress] = useState(contactToEdit?.address || "");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const contact = {
            name,
            phone,
            email,
            address
        };

        if (id) {
            await updateContact(dispatch, id, contact);
        } else {
            await createContact(dispatch, contact);
        }

        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h1>{id ? "Editar Contacto" : "Añadir Contacto"}</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success me-2">
                    {id ? "Guardar cambios" : "Crear contacto"}
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>
                    Cancelar
                </button>
            </form>
        </div>
    );
};