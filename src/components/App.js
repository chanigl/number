import {Number, arrNbr} from "./Number";

function App() {
  return (
    <div id="aa">
      {arrNbr.map((el,i)=>
      <Number
      key={i}
      nbr={el}
      color={test(el)}
      />
      )}
    </div>
  );
}
function test(nbr){
  if(nbr==2 || nbr==3 || nbr==5 || nbr==7){
    return "red"
  }
  else if(nbr%2==0){
    return "green"
  }
  else if(nbr%3==0 || nbr%5==0 ||nbr%7==0 ||nbr==1){
    return "yellow"
  }
  else{
    return "red"
  }
}

export default App;
