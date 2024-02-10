import { useState }  from "react";

function App() {

  return (
    <div>
      <p>ストップウォッチ</p>
      <Times/>
      <buttom>START</buttom>
      <buttom>LAP</buttom>
      <buttom>STOP</buttom>
      <buttom>RESET</buttom>
      <Laps/>
    </div>
  );
}

export default App;
