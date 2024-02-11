import Times from "./Times.js";
import Laps from "./Laps.js";

function App() {

  return (
    <div>
      <p>ストップウォッチ</p>
      <Times/>
      
      {/* <button>LAP</button> */}
      {/* <button>STOP</button> */}
      
      <Laps/>
    </div>
  );
}

export default App;
