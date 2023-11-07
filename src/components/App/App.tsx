import React, { useState } from 'react';
import { AddProduct } from '../AddProduct/AddProduct';
import { cardPropsT } from '../../types';
import { ProductList } from '../ProductsList/ProductList';
import styles from './app.module.css'

const data:cardPropsT[] = [ 
  {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
  {id: 2, name: 'Самокат', price: 700, count: 1}, 
  {id: 3, name: 'Ролики', price: 1300, count: 2}, 
  {id: 4, name: 'Сноуборд', price: 19000, count: 4}
]
  

function App() {

  const [ productsList, setProductList] = useState<cardPropsT[]>(data)

  function addProduct():void {
    let productInfo = prompt()
    if (typeof productInfo === 'string' && productInfo.split(' ').length === 2 && !isNaN(+productInfo.split(' ')[1])) {
      let newProduct:cardPropsT = {
        id: Date.now(),
        name: productInfo.split(' ')[0],
        price: +productInfo.split(' ')[1],
        count: 1
      }
      setProductList([...productsList, newProduct])
    } else {
      alert('Uncorrect input')
    }
  }

  function deleteProduct(id:number):void {
    let newProductsList = productsList.filter(i => i.id !== id)
    setProductList(newProductsList)
  }

  return (
    <div className={styles.flex}>
      <AddProduct addProduct={addProduct}/>
      <ProductList products={productsList} deleteProduct={deleteProduct}/>
    </div>
  );
}

export default App;
