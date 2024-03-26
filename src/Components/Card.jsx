import { Link } from "react-router-dom";

const Card = ({ state, dispatch ,odonto }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "AGREGAR_FAVORITO", payload: odonto });
  };

  return (
    <div className="card">
      Soy una card.
      {/* En cada card deberan mostrar en name - username y el id */}
      <div>
                  <Link to={`/detalle/${odonto.id}`}>
                  <p>Name: {odonto.name}- {odonto.username} {odonto.id}</p>
                  </Link>
      </div>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
