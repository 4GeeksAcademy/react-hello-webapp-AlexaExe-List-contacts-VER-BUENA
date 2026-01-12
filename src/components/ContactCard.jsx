import useGlobalReducer from "../hooks/useGlobalReducer"

export const ContactCard = ({contact}) => {
    const { store, dispatch } = useGlobalReducer()

    return (
      <div className="my-2 border glass col-6 d-flex">
            <div>
                <img src={`https://cdn.thesimpsonsapi.com/500${contact.portrait_path}`} alt={contact.name} />
            </div>
            
            <div>
            <h3>Nombre: {contact.name}</h3>
            <p>Edad: {contact.age}</p>
            <p>Dirección: {contact.address}</p>
            </div>


        </div>  

    )






}