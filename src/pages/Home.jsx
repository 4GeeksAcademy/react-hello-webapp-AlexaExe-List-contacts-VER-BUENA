import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts } from "../components/Services/APIServices.js";
import { ContactCard } from "../components/ContactCard.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {

		getContacts(dispatch);

	}, [])


	return (

		<div className="container mt-5">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1>Mis Contactos</h1>
				<Link to="/add">
					<button className="btn btn-success">+ Añadir contacto</button>
				</Link>
			</div>

			<div>
				{store.contacts && store.contacts.map(contact => (
					<ContactCard contact={contact} key={contact.id} />
				))}

				<div className="scroll-container">


				</div>
			</div>

		</div>
	);
}; 