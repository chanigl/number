import {Number, arrNbr} from "./Number";

function App() {
  return (
    <div>
      {arrNbr.map((el,i)=>
      <Number
      key={i}
      nbr={el}
      />
      )}
    </div>
  );
}

export default App;
