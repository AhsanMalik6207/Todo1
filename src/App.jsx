import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Name from './Components/Name';
import Container from './Components/Container';
import InputFood from './Components/Input';
function App() {
  let foodItems = ["Rice","Pizza","Mutton","Chocolates","Coffee","Burgar"];
  
  // let textStateArr= useState("Food item Entered by user")
  // let textToShow= textStateArr[0];
  // let setTextState= textStateArr[1];

  let [textToShow, setTextState]=useState('Palao')
console.log(`Current value of textState: ${textToShow}`)

  const handleOnChange=(event)=>{
    console.log(event.target.value)
    setTextState(event.target.value);
  }
  
  return (<>
    <Container>
      <Name />
      <InputFood handleOnChange={handleOnChange} />
      <ErrorMessage item={foodItems}/>
      <p>{textToShow}</p>
      <FoodItems item={foodItems}/>
    </Container>

  </>
  );
}

export default App;