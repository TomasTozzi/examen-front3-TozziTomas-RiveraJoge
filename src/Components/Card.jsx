import { Link } from "react-router-dom";
import { useClinicaStates } from "../Context/GlobalContext";

const Card = ({ odonto }) => {

  const { state, dispatch } = useClinicaStates();


  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    let favoritos =  [];
    console.log(favoritos)
    favoritos.push(odonto)
    console.log(favoritos)
    // Convertir el objeto a una cadena JSON
    const favoritosString = JSON.stringify(favoritos);

    // Agregar la cadena al localStorage
    localStorage.setItem('favs', favoritosString);




    //dispatch({ type: "AGREGAR_FAVORITO", payload: odonto });
    console.log("Se agrega a Favoritos. " + odonto.name)
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
      <button onClick={addFav}>Add Favorite</button>

    </div>
  );
};

export default Card;
