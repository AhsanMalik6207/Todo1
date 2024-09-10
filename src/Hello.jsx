export default function Hellow(){
  let myName= "Ahsan Malik";
  let fullDetails=()=>{
    return "Reactjs is used to create dynamics UI Components"
  }
  return <h1>
    Message: {fullDetails()}. I am your mentor {myName}
  </h1>
}