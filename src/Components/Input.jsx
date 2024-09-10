import styles from "./Input.module.css"
const InputFood=()=>{
  return(
    <>
    <input type="text" placeholder="Enter the Food Item here" className={styles.inputFood}
    onChange={(event)=>console.log(event.target.value)} />
    </>
  )
}
export default InputFood;