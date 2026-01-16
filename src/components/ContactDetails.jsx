import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
// este componente muestra la información completa de un personaje según el ID de la URL.

const ContactDetails = () => {
    // useParams me ayuda a obtener el id de la ruta...(string)
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const { store } = useGlobalReducer();

//El useEffect espera a que cargue el store.characters...
    useEffect(() => {
        if (store.characters && store.characters.length > 0) {
            const found = store.characters.find(
                character => character.id === parseInt(id)
                // Luego busca el personaje cuyo id coincida usé parseInt para convertir lo que trae el useParams a número
            );
            setCharacter(found);
            // Guarda el personaje encontrado en el estado local "character".
        }
    }, [id, store.characters]);

    if (!character) {
        return (
            <p className="text-center mt-5">
                Cargando personaje...
            </p>
            // si no se encuentra muestra esto de cargando personaje
        ); 
    }

    return (
        <div className="container mt-5">
            <div className="card bg-dark text-light">
                <div className="row g-0">

                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img
                            src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`}
                            className="img-fluid rounded-start p-3"
                            alt={character.name}
                            style={{ maxHeight: "300px"}}
                        />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{character.name}</h2>

                            <p><strong>Edad:</strong> {character.age || "Desconocido"}</p>
                            <p><strong>Ocupación:</strong> {character.occupation || "Sin datos"}</p>
                            <p><strong>Cumpleaños:</strong> {character.birthdate || "No disponible"}</p>
                            <p><strong>Descripción:</strong> {character.phrases || "No proporcionada"}</p>
                            <p><strong>Género:</strong> {character.gender || "Sin clasificar"}</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );


};

export default ContactDetails;