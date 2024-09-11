import styles from "./Item.module.css"
const Item = ({ahsan, handleBuyButtonClicked})=>{
 
  return (
    <>
        <li className={`${styles["ahsan-item"]} list-group-item`}><span className={styles["ahsan-span"]}>{ahsan}</span><button className={`${styles.button} btn btn-info`} onClick={handleBuyButtonClicked}>Buy</button></li>
        
    </>
  )
}
export default Item;