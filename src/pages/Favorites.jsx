import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Favorites = () => {

    const [favorites, setFavorites ] = useState(null);
    const { store } = useGlobalReducer();


    useEffect(() => {

        if (store.favorites && store.favorites.length > 0) {
            setFavorites(store.favorites);
            
        }

    }, [store.favorites]);

    if (!favorites || favorites.length === 0) {
        return (
            <p className="text-center mt-5">
                Cargando favoritos...
            </p>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="text-black mb-4">Favoritos</h1>
            {favorites.map((fav, index) => (
                <div className="card mb-3 bg-dark text-light" key={index}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img
                                src={`https://cdn.thesimpsonsapi.com/200${fav.portrait_path}`}
                                className="img-fluid rounded-start p-3"
                                alt={fav.name}
                                style={{ maxHeight: "300px"}}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{fav.name}</h5>
                                <p><strong>Edad:</strong> {fav.age || "Desconocido"}</p>
                                <p><strong>Ocupación:</strong> {fav.occupation || "Sin datos"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

};

export default Favorites;