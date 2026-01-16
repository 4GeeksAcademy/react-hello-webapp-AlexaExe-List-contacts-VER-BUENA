import { Link } from "react-router-dom";


export const Demo = () => {

  return (
    <div className="container">
            <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
      <div className="text-center mt-4">
        <img src={`https://media.biobiochile.cl/wp-content/uploads/2023/12/loca-gatos-los-simpson-750x400.png`} alt={""} style={{maxHeight: "300px", marginTop:"10px"}}/>
        <h2>Así va mi estado en programación...🤣🤣🤣</h2>
      </div>
    </div>
  );
};
