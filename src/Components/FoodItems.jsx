import Item from "./Item";

const FoodItems =({item})=>{
   
  return(
    <>
        <ul className="list-group">
      {item.map((khadija) => 
   <Item key={khadija} ahsan={khadija}/>
      )}</ul>
    </>
  )
}
export default FoodItems;