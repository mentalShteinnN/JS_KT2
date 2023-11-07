import { FunctionComponent } from "react";
import styles from './addproduct.module.css'

interface propsT {
  addProduct: () => void
} 

export const AddProduct: FunctionComponent<propsT> = ({addProduct}) => {
  return (
    <div>
      <button className={styles.btn} onClick={() => addProduct()}>Добавить новый товар!</button>
    </div>
  )
}