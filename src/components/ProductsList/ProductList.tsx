import { FunctionComponent } from "react";
import { cardPropsT } from "../../types";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from './productlist.module.css'

interface propsT {
  products:cardPropsT[]
  deleteProduct: (id:number) => void
}

export const ProductList: FunctionComponent<propsT> = ({products, deleteProduct}) => {

  return(
    <div className={styles.container}>
      {Boolean(products.length)? products.map(e => <ProductCard key={e.id} product={e} deleteProduct={deleteProduct}/>): <div className={styles.no_products}>Нет ни одного товара!</div>}
    </div>
  )
}