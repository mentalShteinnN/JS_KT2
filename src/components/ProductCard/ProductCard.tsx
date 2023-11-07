import { FunctionComponent, useEffect, useState } from "react";
import { cardPropsT } from "../../types";
import styles from "./productcard.module.css";

interface propsT {
  product: cardPropsT;
  deleteProduct: (id: number) => void;
}

export const ProductCard: FunctionComponent<propsT> = ({
  product,
  deleteProduct,
}) => {
  const [count, setCount] = useState(product.count);

  useEffect(() => {
    if (count === 0) {
      deleteProduct(product.id);
      return () => {};
    }
  }, [count, product.id, deleteProduct]);

  return (
    <div
      className={styles.container}
      onDoubleClick={() => {
        deleteProduct(product.id);
      }}
    >
      <div className={styles.content}>
        <h2>{product.name}</h2>
        <p>Price: {product.price}</p>
        <div className={styles.flex}>
          <button
            className={styles.btn}
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <p>{count}</p>
          <button
            className={styles.btn}
            onDoubleClick={(e) => {
              e.stopPropagation();
            }}
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
