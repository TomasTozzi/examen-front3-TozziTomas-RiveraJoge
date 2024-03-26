import { useClinicaStates } from "../Context/GlobalContext";
import Card from "../Components/Card";

const Inicio = () => {
  const { state, dispatch, odonto } = useClinicaStates();


  return (
    <>
      <div>Home. Modo:{state.darkMode ? "oscuro" : "claro"}</div>
      <div className="card-container">
      {odonto.map((odonto) => {
      return <Card key={odonto.id} odonto={odonto}/>})}
      </div>
    </>
  );
};

export default Inicio;
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
