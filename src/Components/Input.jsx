import styles from "./Input.module.css"
const InputFood=({handleOnChange})=>{
 
  return(
    <>
    <input type="text" placeholder="Enter the Food Item here" className={styles.inputFood}
    onChange={handleOnChange} />
    </>
  )
}
export default InputFood;