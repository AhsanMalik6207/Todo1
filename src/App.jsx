import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Name from './Components/Name';
import Container from './Components/Container';
import InputFood from './Components/Input';
function App() {
  let foodItems = ["Rice","Pizza","Mutton","Chocolates","Coffee","Burgar"];
 
  
  return (<>
    <Container>
      <Name />
      <InputFood />
      <ErrorMessage item={foodItems}/>
      <FoodItems item={foodItems}/>
    </Container>

  </>
  );
}

export default App;