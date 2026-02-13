import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
					{/* <span className="btn-success">Panel Principal</span> */}
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn-success">Soy un adorno 💖</button>
					</Link>
					
				</div>
			</div>
		</nav>
	);
};